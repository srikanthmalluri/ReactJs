const Emp = require('../Dao/Employee')
function empList() {
    let list = []
    const emp1 = new Emp.Employee("1", "srik", "senior", "malluri@gmail.com", "2000");
    const emp2 = new Emp.Employee("2", "srika", "senior assosiate", "malluri1@gmail.com", "2100");
    const emp3 = new Emp.Employee("3", "srikan", "senior assosiate 2", "malluri2@gmail.com", "2100");
    list.push(emp1);
    list.push(emp2);
    list.push(emp3);
    return list;
}

module.exports.empList=empList;