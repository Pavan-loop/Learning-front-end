const colors = ["#007FFF","#EF0107","#66FF00"];
const button = document.getElementById("btn");
const color = document.querySelector(".color"); 
const main = document.querySelector(".main");

button.addEventListener("click",function(){
  const randomNumber = random();
  main.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})
function random(){
  return Math.floor(Math.random() * colors.length);
}