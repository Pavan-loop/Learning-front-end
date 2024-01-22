const hex = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
const button = document.getElementById("btn");
const main = document.querySelector(".main");
const color = document.querySelector(".color");

button.addEventListener("click",function(){
  let hexValue = "#";
  for(let i = 0; i < 6;i++){
    hexValue += hex[random()];
  }
  main.style.backgroundColor = hexValue;
  color.textContent = hexValue;
})
function random(){
  return Math.floor(Math.random() * hex.length);
}
