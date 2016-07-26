// An incredibly stupid action subscriber
const subscription = [];

const subscribe = (listener, read) => subscription.push({listener, read});

const action = (fn) => (...args) => {
  const res = fn(...args);
  subscription.forEach(({action, read}) => action(read()));
  return res;
};

module.exports = {action, subscribe};
