//1.1
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let ul = document.createElement("ul");
document.body.appendChild(ul);

for (let country of countries) {
  let li = document.createElement("li");
  li.textContent = country;
  ul.appendChild(li);
}
//1.2
let remove = document.body.querySelector(".fn-remove-me");
remove.remove();
//1.3
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
let ul$$ = document.createElement("ul");
let div = document.body.querySelector('[data-function="printHere"]');

for (let car of cars) {
  let li$$ = document.createElement("li");
  li$$.textContent = car;
  ul$$.appendChild(li$$);
}
div.appendChild(ul$$);
//1.4
const countries$$ = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

//1.6
for (const country$$ of countries$$) {
  let div2$$ = document.createElement("div");
  div2$$.innerHTML = `<h4>${country$$.title}</h4><img src=${country$$.imgUrl}/>`;
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  div2$$.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    div2$$.remove();
  });
  document.body.appendChild(div2$$);
}
