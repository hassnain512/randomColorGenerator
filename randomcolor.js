let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let h1 = document.querySelector("h1");
  let randomcolor = generatecolor();
  h1.innerText = randomcolor;
  let div = document.querySelector("div");
  div.style.backgroundColor = randomcolor;
  btn.style.backgroundColor = "black";
  btn.style.color = randomcolor;
});

function generatecolor() {
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
