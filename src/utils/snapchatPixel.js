export const snapTrack = (eventName, params = {}) => {
  if (typeof window === "undefined") return;
  if (!window.snaptr) return;
  window.snaptr("track", eventName, params);
};
