const { empList } = require("./Service/empList");

// console.log('empList',empList());


let sortedAr=empList().sort((a,b)=> b.salary-a.salary)

console.log('sortedAr ',sortedAr);
