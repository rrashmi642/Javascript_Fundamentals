document.addEventListener("keydown", function (event) {
  console.log(event.key);
  let sectionRef;
  switch (event.key) {
    case "1": {
      sectionRef = document.querySelector("#S1");
      sectionRef.scrollIntoView();
      break;
    }
    case "2": {
      sectionRef = document.querySelector("#S2");
      sectionRef.scrollIntoView();
      break;
    }
    case "3": {
      sectionRef = document.querySelector("#S3");
      sectionRef.scrollIntoView();
      break;
    }
    case "t": {
    //   window.scrollTo({ top: 0 });
      window.scrollBy(0, document.querySelector('html').getBoundingClientRect().top); //other way get on top by pressing t
      break;
    }
    case "b": {
    //   window.scrollTo({ top: document.body.scrollHeight });
         window.scrollBy(0, document.querySelector('html').getBoundingClientRect().bottom);
      break;
    }
  }
});
