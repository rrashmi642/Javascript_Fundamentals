//Different ways of creating objects in js
//1.
function fruit(color, taste){
this.color=color;
this.taste=taste;
}

let mango= new fruit("yellow", "sweet");
console.log(mango);
console.log(mango.taste);

//2.
var orange ={
    color: "orange",
    taste:"sweet"
};

console.log(orange);

//3. using class

class Fruitclass{
    constructor(color, taste){
        this. color=color;
        this.taste=taste;
    }
}
class Fruitclass2{
    constructor(color, taste){
        this. color=color;
        this.taste=taste;
    }
}
let banana=new Fruitclass("yellow", "sweet");
let banana2=new Fruitclass2("yellow", "sweet");
console.log(banana);
