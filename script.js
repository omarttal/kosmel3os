"use strict";
const text = `<p class="test">كسم يوسف عصام</p>`;
const textwithspace = `<p>           كسم يوسف عصام</p>`;
function getRandomColor() {
  var letters = "BCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}
setInterval(function () {
  document.querySelector("main").insertAdjacentHTML("afterend", text);
  document.querySelector(".test").style.color = getRandomColor();
  //   document.documentElement.style.setProperty(
  //     "--primary-color",
  //     getRandomColor()
  //   );
  //   document.querySelector("p").style.color = `var(--primary-color)`;
}, 1200);
