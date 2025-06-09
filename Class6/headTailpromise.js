// const isHead=new Promise(function(resolve,reject){
// let Head=Math.random();
// if(Head>0.5) resolve("Head")
// else reject("Tail");

// });

// isHead.then((data) =>{
// console.log('then>', data);
// })
// isHead.
// catch((err) =>{
//     console.log('error> tail');
// })


const isHead=new Promise(function(resolve,reject){
let Head=Math.random()>0.5;

if(Head) resolve(" It's Head")
else reject("It's Tail");

});

isHead.
then((data) =>{
console.log(data);
})

.catch((err) =>{
    console.log(err);
})