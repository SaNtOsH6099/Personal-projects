let URL = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector(".btn");
let img = document.querySelector(".image");

let loader = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGRoaGlza2p1Y3JjYmhkcXNnNTZwdWV6c3Q4NXp3ZDdtbm9zcDd1MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/21L8h7Ps5RD5zPkWmC/giphy.gif";



async function pictures() {
    img.src = await loader;
    
    let response = await fetch(URL);

    let data = await response.json();

    img.src = data.message;
}

btn.addEventListener("click", pictures);

console.log("hello");

