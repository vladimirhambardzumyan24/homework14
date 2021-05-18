function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else if (a < 0) {
    throw new Error("Negative Error.");
  }
  throw new Error("Zero Error.");
}
console.log(isPositive(23));
