import useMapEffect from "./useMapEffect";
import { transformToNaverEventName } from "../utils/naverEventNameTransformer";
import type {
  EventTargetType,
  NaverEventFunctionObject,
} from "../@types/NaverEvent";
import { useRef } from "react";
import { OptionalRecord } from "../@types/generic";

/**
 * Naver Maps API의 이벤트를 처리하는 커스텀 훅
 *
 * @param {T | undefined} target - 이벤트를 등록할 대상 객체
 * @param {OptionalRecord<keyof NaverEventFunctionObject, (e: any) => any>} events - 이벤트 핸들러 객체
 */
const useNaverEvent = (
  target: EventTargetType | undefined,
  events: OptionalRecord<string, any>
) => {
  const listeners = useRef<naver.maps.MapEventListener[]>([]);
  const listenersOnce = useRef<naver.maps.MapEventListener[]>([]);

  useMapEffect(() => {
    if (!target) return;

    Object.entries(events).forEach(([eventName, listener]) => {
      const { eventName: naverEventName, isOnce } =
        transformToNaverEventName(eventName);

      if (isOnce) {
        const alreadyListener = listenersOnce.current.find(
          (v) => v.eventName === naverEventName
        );
        if (!alreadyListener) {
          listenersOnce.current.push(
            target.addListenerOnce(naverEventName, listener!)
          );
        }
      } else {
        const alreadyListener = listeners.current.find(
          (v) => v.eventName === naverEventName
        );
        if (alreadyListener) {
          target.removeListener(alreadyListener);
          listeners.current = listeners.current.filter(
            (v) => v.eventName !== naverEventName
          );
        }

        listeners.current.push(target.addListener(naverEventName, listener!));
      }
    });

    return () => {
      target.removeListener(listeners.current);
    };
  }, [target, events]);
};

export default useNaverEvent;
