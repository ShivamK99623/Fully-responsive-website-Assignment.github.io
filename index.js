const hamberg = document.querySelector(".hamberg")
const hide = document.querySelector("#hide")
const show = document.querySelector("#show")
const navbar = document.querySelector(".navbar")
const menu = document.querySelector(".menu")
const shows = () => {
    menu.style.top = "30px"
    console.log("first")
    navbar.classList.add("height");
    show.style.display = "none"
    hide.style.display = "block"
    this.timeout = setTimeout(() => {
        hides()
    }, 3000);
}
const hides = () => {
    clearTimeout(timeout)
    menu.style.top = "";
    navbar.classList.remove("height");
    hide.style.display = "none"
    show.style.display = ""
}
show.addEventListener("click", shows)
hide.addEventListener("click", hides)
// slide show

const slideshow = document.querySelector(".slideshow")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
 function prevS(){
    if (slideshow.style.left==="0%" ) {
        slideshow.style.left="-100%"
   
    }else  if (slideshow.style.left==="-100%" ) {
        console.log(slideshow.style.left="-200%") 
    }else{
        slideshow.style.left="0%"
    }
 }
 function forw(){
    if (slideshow.style.left==="-200%") {
        slideshow.style.left="-100%"
    }
   else if (slideshow.style.left==="-100%" ) {
       slideshow.style.left="0%"
   }else {
    slideshow.style.left="-200%"}
 }

prev.addEventListener("click",prevS)

next.addEventListener("click",forw)
// setTimeout(showSlides, 2000); // Change image every 2 seconds
// function showSlides(n) {
  
// }
