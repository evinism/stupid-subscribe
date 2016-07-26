// An incredibly stupid action subscriber
const subscription = [];

const subscribe = (listener, read) => subscription.push({listener, read});

const action = (fn) => (...args) => {
  const res = fn(...args);
  subscription.forEach(({listener, read}) => listener(read()));
  return res;
};

module.exports = {action, subscribe};
