let wrapper = document.querySelectorAll(".wrapper")[1];
let ul = document.querySelector("ul");
let load_more = document.querySelector(".load-more");
let button = document.querySelector("button");

let index = 0;

wrapper.classList.add("down-wrapper-onclick");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    loadMore(index);

    function loadMore(index) {
      if (index < 100) {
        for (let i = index; i < index + 5; i++) {
          let li = document.createElement("li");
          ul.appendChild(li);
          let h2 = document.createElement("h2");
          h2.innerText = data[i].title;
          let p = document.createElement("p");
          p.innerText = data[i].body;
          li.append(h2, p);
        }
      } else {
        button.style.display = "none";
      }
    }
    load_more.addEventListener("click", () => {
      index = index + 5;
      loadMore(index);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
