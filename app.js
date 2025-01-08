// import { myFun } from "./moda";
const myFun = require('./moda')
const modb = require('./modb')
const modc = require('./modc')
console.log('a',myFun.a());
console.log('myFun', myFun.myFun());

const car1 = new modc.Cars("nexon","2024");
const newModb = new modb.modb();
const book1 =new newModb.Books("the death","sadhguru")

console.log('book1',JSON.stringify(book1));
console.log('cars',JSON.stringify(car1));


