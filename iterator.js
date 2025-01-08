let ar = ["srikanth","suraja","saikanth","rajesh"]
let itr = ar[Symbol.iterator]();
for(let i = itr.next();i.done !==true;i=itr.next()){
    console.log('value', i.value);
    
}
let values = ar.values();
let i1=values.next();
while(i1.done!==true){
    console.log('ar val',i1.value);
    i1=values.next();
    
}

let ar1 = [1,2,3,3,3,3,3,4,4,5]
let set =new Set(ar1);

let itr1 = set.keys();
let item = itr1.next();
while(item.done!==true){
    console.log('while set ',item.value);
    item=itr1.next();
    
}