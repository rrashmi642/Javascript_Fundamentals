let arr=["banana", "papaya", "mango"];
arr.push("Kiwi"); //adds element at end
console.log(arr);

arr.pop(); //emoves element from end
console.log(arr);

arr.shift(); //removes element from front
console.log(arr);

arr.unshift("berries") // adds element at front
console.log(arr);


console.log(arr.indexOf("papaya")); //gives index

if(arr[1]==="banana") console.log(Arr[1]);
else console.log("No, it's a", arr[1]);

//splice usage: splice(index, no of elements affected, "values")
arr.splice(0,0, "chiku", "berry");
console.log(arr);

arr.unshift("me");
console.log(arr);

arr.splice(0, 2, "l", "p");
console.log(arr);
