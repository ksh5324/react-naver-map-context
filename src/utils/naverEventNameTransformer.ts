import { lowercaseFirst } from "./lowercaseFirst";

/**
 * 이벤트 이름을 Naver Maps API 이벤트 이름으로 변환합니다.
 *
 * @param eventName - 변환할 이벤트 이름
 * @returns {eventName: string, isOnce: boolean} 변환된 이벤트 이름과 일회성 여부
 */
export function transformToNaverEventName(eventName: string): {
  eventName: string;
  isOnce: boolean;
} {
  const withoutPrefix = removeOnPrefix(eventName);
  const { eventName: withoutSuffix, isOnce } = removeOnceSuffix(withoutPrefix);
  const underscoreEventName = transformChangedToUnderscore(withoutSuffix);
  const transformedEventName = lowercaseFirst(underscoreEventName);

  return { eventName: transformedEventName, isOnce };
}

export function removeOnPrefix(eventName: string): string {
  return eventName.startsWith("on")
    ? eventName.slice(2)
    : eventName;
}

export function removeOnceSuffix(eventName: string): {
  eventName: string;
  isOnce: boolean;
} {
  const isOnce = eventName.endsWith("Once");
  return {
    eventName: isOnce ? eventName.slice(0, -4) : eventName,
    isOnce,
  };
}

export function transformChangedToUnderscore(eventName: string): string {
  return eventName.replace(/Changed$/, "_changed");
}