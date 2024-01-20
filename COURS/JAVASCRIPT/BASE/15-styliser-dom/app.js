const str1 = document.querySelector(".str1");
const str2 = document.querySelector(".str2");
const box = document.querySelector(".box");
const liste = document.querySelector(".list");
const img = document.querySelector("img");
const cont = document.querySelector(".cont");
const cont2 = document.querySelector(".cont2");
const btn = document.querySelector(".btn");

str1.textContent = "Je suis du texte depuis JS";
str2.innerText = "Hello depuis JS";

box.innerHTML = "<p> Hello<p/>";

const newEl = document.createElement("li");

newEl.innerText = "Je suis un nouvelle LI";
liste.appendChild(newEl);

liste.children[0].replaceWith(newEl);

img.src =
  "https://images.unsplash.com/photo-1682687220566-5599dbbebf11?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

cont.style.background = "red";
