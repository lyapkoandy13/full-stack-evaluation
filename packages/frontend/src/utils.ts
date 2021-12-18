export const generateUniqueId = () =>
  Math.random().toString(24) + new Date().getTime().toString(24);
