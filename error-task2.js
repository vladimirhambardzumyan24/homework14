function isPositive(a) {
  if (a > 0) {
    throw "YES";
  } else if (a < 0) {
    throw new Error("Negative Error.");
  }
  throw new Error("Zero Error.");
}
isPositive(23);
