function delayedExecution(fn, args, t, cancelTimeMs) {
  let timerId;

  // Schedule the execution of fn after t milliseconds
  timerId = setTimeout(() => {
      fn(...args);
  }, t);

  // Define the cancel function
  const cancelFn = () => {
      clearTimeout(timerId);
      console.log('Execution cancelled');
  };

  // Automatically call cancelFn after cancelTimeMs
  setTimeout(cancelFn, cancelTimeMs);

  return cancelFn;
}
