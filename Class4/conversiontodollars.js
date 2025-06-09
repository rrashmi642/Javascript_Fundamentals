const transactions =[1000, 3000, 4000, -3180]
const dollartoinr=80;

const inrtodollar = () =>  { return transactions.map((inr,i) => inr/dollartoinr);}
console.log(inrtodollar());


//positive transactions using foreachff
const positivetxns= (txns) =>{
    const result = [];
    transactions.forEach((item)=> {
        if (item>0) result.push(item);
        })
        return result;
    }
const plus = (item) =>{return item.filter((tn) => {return tn>0;}
    )}
console.log(positivetxns(transactions));
console.log(plus(transactions));

const total=(pp) => {}

