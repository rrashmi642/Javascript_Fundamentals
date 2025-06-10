function createTimeoutpromise(delay,message){
    return new Promise((resolve,reject) =>{
        let TIMEOUT=5000;
        let maxTimeout=Math.min(TIMEOUT, delay);
    setTimeout(() =>{
       if(delay>TIMEOUT)
         reject(`Maximum timeout is 5 sec, but current delay is ${delay}`);
       else 
         resolve(`printing after delay of ${delay} seconds message is>>${message}`);

    },maxTimeout); 
    
})
}

//Below is the ES5 way of writing promise chaining where promises execute in parallel way, whichever takes less time executes first

//createTimeoutpromise(4000, '4sec').then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})
//createTimeoutpromise(7000, '7sec').then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})
//createTimeoutpromise(1000, '1sec').then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})
//createTimeoutpromise(2000, '2sec').then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})

//---------ES6 way of handling promises using try catch with only one catch for all execution stops if timeout error handled
async function callsequentialpromises(){
    try{
    const R2= await createTimeoutpromise(4000, '4sec');
    console.log(R2);
    const R3= await createTimeoutpromise(8000, '8sec'); //here it will throw exception and won't move forward as only one catch block is there to handle that we write catch for every try
     console.log(R3);
    const R4= await createTimeoutpromise(2000, '2sec');
     console.log(R4);
    const R1= await createTimeoutpromise(7000, '7sec');
     console.log(R1);
}
    catch(err){
        console.log(err);
    }
    
}


//---------ES6 way of handling promises using try catch with catch for every promise execution happens sequentially but won't stop

async function callsequential2promises(){
    try{
    const R2= await createTimeoutpromise(4000, '4sec');
    console.log(R2);
    }catch(err){
        console.log(err);
    }
    try{
        const R3= await createTimeoutpromise(8000, '8sec');
         console.log(R3);
    }catch(err){
        console.log(err);
    }
     try{
        const R4= await createTimeoutpromise(2000, '2sec');
     console.log(R4);
     }
     catch{
        console.log(err);
     }
    try{
        const R1= await createTimeoutpromise(7000, '7sec');
     console.log(R1);
    }catch(err){
        console.log(err);
    }
    
}   

// callsequentialpromises();
callsequential2promises();
