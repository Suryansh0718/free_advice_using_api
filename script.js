// let p = fetch("https://api.adviceslip.com/advice");
// let button = document.getElementsByClassName("btn")[0];
// let advice = document.getElementById("first")
// let data = async()=>{
//   let response = await p;
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
//   let adv = data.slip.advice
//   advice.innerHTML = `<i>${adv}</i>`;
// }
// button.addEventListener("click",data);
let button = document.getElementsByClassName("btn")[0];
let advice = document.getElementById("first");

let fetchData = async () => {
  
    let response = await fetch("https://api.adviceslip.com/advice");
    
    let data = await response.json();
    let adv = data.slip.advice;
    advice.innerHTML = `<i>"${adv}"</i>`;
 
};

button.addEventListener("click", fetchData);
