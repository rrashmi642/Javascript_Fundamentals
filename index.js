let b=10;
console.log(b);

let a=[1, 2, 3];
console.log(a);
console.log("Hello World");

//functions in js

function sum(a,b){
return a+b;
}
console.log(sum(5,2));

//block scope 

function fun(){
    let b=9;
    if(b===9) console.log("inside block", b);
  }
  fun();
  console.log("outside function b =",b);

  //function root

  function sqroot(a){
    return Math.sqrt(a);
  }
  console.log(sqroot(9));