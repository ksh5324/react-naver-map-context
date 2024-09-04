import useMapEffect from "./useMapEffect";
import { transformToNaverEventName } from "../utils/naverEventNameTransformer";
import type { EventFunctionType, EventTargetType, } from "../@types/NaverEvent";


/**
 * Naver Maps API의 이벤트를 처리하는 커스텀 훅
 * 
 * @param {T | undefined} target - 이벤트를 등록할 대상 객체
 * @param {EventFunctionType<T>} events - 이벤트 핸들러 객체
 */
const useNaverEvent = <T extends EventTargetType>(target: T | undefined, events: EventFunctionType<T>) => {
  useMapEffect(() => {
    if (!target) return;

    const listeners: naver.maps.MapEventListener[] = [];

    Object.entries(events).forEach(([eventName, listener]) => {
      const { eventName: naverEventName, isOnce } =
        transformToNaverEventName(eventName);

      if (isOnce) {
        listeners.push(
          target.addListenerOnce(naverEventName, listener as (e: any) => any)
        );
      } else {
        listeners.push(
          target.addListener(
            naverEventName,
            listener as (e: any) => any
          )
        );
      }
    });

    return () => {
      listeners.forEach((listener) => {
        target.removeListener(listener);
      });
    };
  }, [target, events]);
};

export default useNaverEvent;
