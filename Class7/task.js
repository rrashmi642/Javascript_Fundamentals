function task(time, message){
    return new Promise((resolve, reject)=>{
        if((message==='gym' && time <=1000) || (message==='breakfast' && time <=3000) || (message==='coffee' && time <=2000) ){
            resolve(`Doing ${message}`);
        }
        else
        reject(`You didn't complete the previous task`);
    })
}

async function todo() {
    try{
    const result = await Promise.all([
     task(1000,'gym'),
     task(3000,"coffee"),
     task(3000,"breakfast")]);
     console.log(result);
}catch(err){
    console.log(err);
}
    
}
todo();