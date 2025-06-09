/* Create a JavaScript function that uses closures to implement caching (memoization). The function should cache the results of complex calculations and return the cached result when the same inputs occur again.
*/


function sum(){
    let result ={}
  return function(arr){
    let key=String(arr) 
    // console.log("key is printing"+typeof(key)); 
    if(result[key]){
      console.log("Memory");
        
        return result[key];
    }

    const total=arr[0]+arr[1];

    result[key]=total;

    console.log("Compute");
    return result[key];
  }
}
const memorizesum=sum();

console.log(memorizesum([1,2]));
console.log(memorizesum([2,2]));
console.log(memorizesum([3,1]));
console.log(memorizesum([2,2]));
console.log(memorizesum([2,2]));