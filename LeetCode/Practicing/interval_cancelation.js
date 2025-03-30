var cancellable = function(fn, args, t) {
  // we will start to run fn, assign it to timerId for cancelation later
  let timerId

  // we need a call immediately
  fn(...args);

  // then we start the interval
  timerId = setInterval(() => {
      fn(...args);
  }, t)


  const cancelFn = () => {
      // when cancelFn is called, we cancel the timerId
      clearTimeout(timerId);
  }

  return cancelFn
};