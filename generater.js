function* myGen() {
    console.log('my 1 clg');
    yield "1st yield"
    console.log('my 2nd clg');
    yield "2nd yield"
    console.log('my 3 clg');
    yield "3st yield"
    console.log('my 4nd clg');
    yield "4th yield"
    
}

const fun = myGen();
for(let i of fun ){
    console.log('i generator ',i);
    
}