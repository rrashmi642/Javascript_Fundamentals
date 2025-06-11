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
createTimeoutpromise(7000, '7sec').then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})
createTimeoutpromise(4000, '4sec').then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})
createTimeoutpromise(1000, '1sec').then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})
createTimeoutpromise(9000, '9sec').then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})