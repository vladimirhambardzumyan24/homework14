function reverseString(s) {
  try {
    let reversString = s.split("").reverse().join("");
    return reversString;
  } catch (error) {
    console.log(s);
    return error;
  }
}

console.log(reverseString(23));
