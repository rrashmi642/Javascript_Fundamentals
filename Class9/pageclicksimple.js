document.addEventListener("keydown", function (event) {
  console.log(event.key);
  let selector;
  let position;
  switch (event.key) {
    case "1": {
      selector="#S1";
      position="top";

      break;
    }
    case "2": {
      selector="#S2";
      position="top";
      break;
    }
    case "3": {
      selector="#S3";
      position="top";
      break;
    }
    case "t": {
    selector="#html";
      position="top";
      break;
    }
    case "b": {
    selector="html";
      position="bottom";
      break;
    }
  }
    window.scrollBy(0, document.querySelector(selector).getBoundingClientRect()[position]);

});