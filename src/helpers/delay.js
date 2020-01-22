function delay(fn, time) {
  let timer = false;
  console.log(time, this);
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = false;
    }, time);
    //console.log(timer);
    fn(...args);
  };
}

export default delay;
