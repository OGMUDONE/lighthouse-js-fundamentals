=function range (start, end, step) {
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  }
  if (start > end) {
    return [];
  }
  if (step <= 0) {
    return [];
  }
  let adder = [];
  for (let i = start; i <= end; i += step) {
    adder.push(i);
  }
  return adder;
}