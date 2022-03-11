async function getAdviceFromServer() {
  let response = await fetch('https://api.adviceslip.com/advice')
  let data = await response.json();
  return data;
}


function createAdwice(data) {

  let textAdwice = document.querySelector(".textAdvice");
  let labelAdwice = document.querySelector(".label");
  labelAdwice.textContent = `ADVICE #${data.id}`;
  textAdwice.textContent = `"${data.advice}"`;
}

let idAdvice = null;

function getAdviceClickHandler() {
  btnGetAdvice.disabled = true;
  btnGetAdvice.classList.add("spin");
  

  getAdviceFromServer()
    .then(data => {
     
      createAdwice(data.slip)
      btnGetAdvice.classList.remove("spin");
      btnGetAdvice.disabled = false;
      return data;
    })
    .catch(error=>console.log("error",error))



}

function loadFirstAdvice() {

  getAdviceClickHandler();
}

btnGetAdvice.addEventListener("click", getAdviceClickHandler);

document.addEventListener("DOMContentLoaded", loadFirstAdvice);
