function incrementCounter(button) {
    let clickCounter = parseInt(button.querySelector("#clickCounter").textContent);
    clickCounter++;
    button.querySelector("#clickCounter").textContent = clickCounter;
  }