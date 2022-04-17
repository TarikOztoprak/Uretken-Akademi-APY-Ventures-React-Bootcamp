const pictures = document.getElementsByClassName("pictures");

function loadImages() {
    for (let i = 0; i < pictures.length; i++) {
        for (let j = 0; j < 10; j++) {
            let rng = Math.floor(Math.random() * 100000);
            pictures[i].innerHTML += `<img class="mt-3" width="100%" src="https://source.unsplash.com/random/300x300?sig=${rng}" alt="">`
        }
    }
}
loadImages()

window.addEventListener('scroll',()=>{
    console.log(window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight - 100){
    loadImages();
    }
})
