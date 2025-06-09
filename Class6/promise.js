const result= new Promise(function(resolve, reject){
    let passingMarks=70;
    let currentMarks=80;
    if(currentMarks>passingMarks){
         resolve("passed");
    }
    else {reject("failed");
    }
    
});

result
.then((data) => {
    console.log("resolved=>", data);
})
.catch((err) =>{
    console.log("rejected", err);
})
