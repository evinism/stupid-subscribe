// An incredibly stupid action subscriber
const subscription = [];

export const subscribe = (listener, read) => subscription.push({listener, read});

export const action = (fn) => (...args) => {
  const res = fn(...args);
  subscription.forEach(({action, read}) => action(read()));
  return res;
};

export default {action, subscribe};
