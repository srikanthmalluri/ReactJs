console.log('HI');
let x: number=10
x++
console.log('x', x);
let y: number;
y = 10;
console.log('10', y);


class MyClas {
    _id: number;
    _name: number;
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
}

const c1= new MyClas(1,"sr");
console.log('c1',JSON.stringify(c1));
enum days{
    sun,
    mon,
    tue,
    wed,
    thu,
    fri,
    sat
}

console.log(days[1])

const a = () =>{

}

function returnA() : number{
    return 5;
}
interface IFace {
    testA();
    testB();
  }
interface IFaceA {
    testc();
    testd();
  }
  class MyChdCls implements IFace, IFaceA {
    static testera() {
      console.log("Static method");
    }
    testA() {
      console.log("First Method");
    }
    testB() {
      console.log("Second Method");
    }
    testc() {
      console.log("Another interface method a");
    }
    testd() {
      console.log("Another interface method b");
    }
  }
  var objb = new MyChdCls();
  MyChdCls.testera()
  objb.testA();
  objb.testB();
  objb.testc();
  objb.testd();