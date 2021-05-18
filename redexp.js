
const myRegExp = new RegExp("^([0-9]{4})+$|^([0-9]{6})+$");

console.log(myRegExp.test("12584"));



const REGEXP = /<(\w.*?)>/g;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
console.log(str.match(REGEXP));
// '<a href="/">', '<input type="radio" checked>', "<b>";