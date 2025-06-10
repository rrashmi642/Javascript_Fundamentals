const isHead = new Promise(function (resolve, reject) {
  let Head = Math.random() > 0.5;

  if (Head) resolve(" It's Head");
  else reject("It's Tail");
});

function TossES5() {
  //using promise chaining as per ES5 but we can make code mor readable using async await
  console.log("A");
  isHead
    .then((data) => {
      console.log(data);
    })

    .catch((err) => {
      console.log(err);
    });
  console.log("B");
}

async function TossES6() {// async await executes sequentially
  console.log("A");
  try {
    const result = await isHead;
    console.log(result);
  } catch (err) {
    console.log(err);
  }

  console.log("B");
}

//TossES5(); //output will be A B It's a head/tail as the asynchronous task get in eb APi then callback/microtask queue and finally exectes when callstack is empty

TossES6(); //output A It's
