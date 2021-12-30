
/*
let cont = document.getElementById("pokemon");
console.log(cont)

let cont2 = document.querySelector("#pokemon");

let cont3 = document.querySelectorAll("#pokemon");
*/

let counter = 1;
function render() {
    let cont = document.getElementById("pokemon");
    cont.innerHTML = `<img src="https://tinyurl.com/ironhack-pokemons/${counter}.svg">`
    cont.firstChild.className = "poke poka poki";
    cont.classList.add("mystyle", "toto", "popo"); // this is useless just for test
    if (counter === 1) {
        document.getElementById("pokemon").style.backgroundColor = "blue";
    } else if (1 < counter && counter < 649) {
        document.getElementById("pokemon").style.backgroundColor = "white";
    } else {
        document.getElementById("pokemon").style.backgroundColor = "red";
    }
}
render();

let prev = document.getElementById("prev");
let next = document.getElementById("next");


prev.addEventListener("click", function () {
    if (counter > 1) {
        counter--;
        render();
    }
})

next.addEventListener("click", function () {
    if (counter < 649) {
        counter++;
        render();
    }
})


