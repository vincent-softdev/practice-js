var cancellable = function(fn, args, t) {
  // start timer
  const start = Date.now();
  // define the response
  let log = []

  // Now fn will happen after t time. This run outside of thread so it will start counting 
  // from this line
  let timerId = setTimeout(() => {
      const result = fn(...args);
      log.push({time: Date.now() - start, returned: result})
  }, t);

  // then now, if the cancelFn run but the timerId still waiting, then cancel task
  const cancelFn = () => {
      clearTimeout(timerId);
  }

  // We run cancelFn after cancelTimeMs
  cancelFn.log = log;

  return cancelFn
};