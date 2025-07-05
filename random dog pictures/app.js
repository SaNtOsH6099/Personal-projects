let URL = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector(".btn");
let img = document.querySelector(".image");

let loader = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGRoaGlza2p1Y3JjYmhkcXNnNTZwdWV6c3Q4NXp3ZDdtbm9zcDd1MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/21L8h7Ps5RD5zPkWmC/giphy.gif";



async function pictures() {
    let retryLimit = 3;
    let retry = 1;
    img.src = loader;

   
    while (retry < retryLimit) {
        try {
            let response = await fetch(URL);
            if (response.ok) {
                let data = await response.json();
                img.src = data.message;
                return;
            }
        } catch {
            lastStatus = 0;
        }
        retry++;
    }

    let errorCode = lastStatus || 500;
    img.src = `https://http.dog/${errorCode}.jpg`;
    alert(`Failed to load dog picture. Error code: ${errorCode}`);
    
}

btn.addEventListener("click", pictures);


