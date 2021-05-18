function gradeLabs(studentLabs2) {
  let newArr = studentLabs2.map(function (element) {
    try {
      element.runLab() !== "undefined";
      return element.runLab(5);
    } catch (error) {
      return error;
    }
  });
  return newArr;
}

let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

console.log(gradeLabs(studentLabs2));
