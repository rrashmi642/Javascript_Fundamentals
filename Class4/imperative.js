let myradius=[2,3,4,5,8];
function calculatearea(arr){
    let area=[];
   
for(let i=0; i<arr.length;i++){
   area.push(3.14 * arr[i] * arr [i]);
}
return area;
}

function calculatediameter(arr){
    let diameter;
    for(let i=0; i<arr.length;i++){
     diameter.push(2 * arr[i]);
}
return diameter;
}

console.log(calculatearea(myradius));
