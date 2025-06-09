console.log(sum1(6,7));
//console.log(sum2(6,7)); //  error sum2 is not  a function typeError
console.log (sum2);
function sum1(a, b){ //pass by value
    // a =2;
    // b=3;
return a + b;

}

let p1 =1;
let p2 =2  
console.log(sum1(p1 ,p2));//5if parameter value is hardcoded it will not affect and the same value will be returned 
console.log(p1, p2);  //1, 2

var sum2 = function(a,b){
return a+b;
}

// pass by reference

function total(arr){
    // arr[0]=10;
    var total=0;
    for(let i=0; i<arr.length; i++){
       total+=arr[i];
    }
    return total;
}

var p3=[1,2,3];
console.log(total(p3)); //15
console.log(p3);//10,2,3


var sum6= (a,b,c) =>{
    return a+b+c;
}