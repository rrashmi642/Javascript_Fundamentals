function createTimeoutpromise(delay,message){
    return new Promise((resolve,reject) =>{
        let TIMEOUT=5000;
    if(delay>TIMEOUT)
         reject(`Maximum timeout is 5 sec, but current delay is ${delay}`);
     
    else 
    resolve(setTimeout(() => {
        console.log(`printing after delay of ${delay} seconds message is>>${message}`);
     }, delay));
    })
}
createTimeoutpromise(7000, '7sec').then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})
createTimeoutpromise(4000, '4sec').then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})
createTimeoutpromise(1000, '1sec').then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})
createTimeoutpromise(9000, '9sec').then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})