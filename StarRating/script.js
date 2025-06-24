const containerRef = document.getElementById("star-container");
const starRef = document.querySelectorAll(".star");

containerRef.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("star")) {
    let index = e.target.getAttribute("data-index");
    index = Number(index);
    console.log(typeof index);
    // let count = 0;
    for (let i = 0; i < index; i++) {      
      starRef[i].classList.add("star-filled");
        }
    for (let i = index; i < containerRef.length; i++){
              starRef[i].classList.remove("star-filled");

    }
  }
});

containerRef.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("star")) {
    const index = e.target.getAttribute("data-index");
    for (let i = 0; i < index; i++) {
      starRef[i].classList.remove("star-filled");
    }
  }
});

containerRef.addEventListener('click', (event) =>{
    if(event.target.classList.contains('star')){
        let count=0;
        const index = Number(event.target.getAttribute('data-index'));
        for (let i = 0; i < index; i++) {
      if (count == index) {
        break;
      }

      starRef[i].classList.add("star-filled");
      ++count;

    }
    for (let i = index; i < containerRef.length; i++){
              starRef[i].classList.remove("star-filled");

    }
    console.log(count);
    let countRef=document.querySelector('#count');
    countRef.innerHTML=count;
    }
})


//143 3*10^0 + 4*10^1 + 1*10^2

//3