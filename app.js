// Animacije GSAP
const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.fromTo(".left-div", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".right-div", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo(".footer", {opacity: 0}, {opacity: 1, duration: 1}, "-=0.7");
tl.fromTo(".text-container", {opacity: 0}, {opacity: 1, duration: 1}, "delay: 1");
tl.fromTo(".slider-container", {opacity: 0}, {opacity: 1, duration: 1}, "delay: 1.5");


// Slika preko cijele stranice
const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");
const closeBtn = document.querySelector("#closeBtn");

closeBtn.addEventListener('click', ()=>{
  fullImgBox.style.display = "none";
 })

function openFullImg(image){
  fullImgBox.style.display = "grid";
  fullImg.src = image;
}

// Slider

// Varijable
const nazadBTn = document.querySelector(".nazadBtn");
const naprijedBTn = document.querySelector(".naprijedBtn");

const sliderTop = document.querySelector(".top-slider");
const sliderBottom = document.querySelector(".bottom-slider");
let sliderTopImg = document.querySelectorAll(".top-slider img");
let sliderBottomImg = document.querySelectorAll(".bottom-slider img");


// window.onload omogucava da se slika ucita kako bi clientWidth mogao dohvatiti njezinu sirinu

window.onload = function () {
  let i = 0;
  let j = 0;

  let sizeTop = sliderTopImg[0].clientWidth;
  let sizeBottom = sliderBottomImg[0].clientWidth;

 
  naprijedBTn.addEventListener('click', (e) => {
    if (i >= sliderTop.length && j >= sliderBottom.length) return;

    sizeTop = sliderTopImg[i].clientWidth + 10;
    sizeBottom = sliderBottomImg[j].clientWidth + 10;

    sliderTop.scrollLeft -= sizeTop;
    sliderBottom.scrollLeft -= sizeBottom; 

    i++;
    j++;
 
    e.preventDefault();
  })

  nazadBTn.addEventListener('click', (e) => {
    if (i <= 0 && j <= 0) return;
    i--;
    j--;

    sizeTop = sliderTopImg[i].clientWidth + 10;
    sizeBottom = sliderBottomImg[j].clientWidth + 10;

    sliderTop.scrollLeft += sizeTop;
    sliderBottom.scrollLeft += sizeBottom;   
    e.preventDefault();
  })

  // Dodavanje beskonacnih slajdova
  // !!!! Potrebno jos doraditi

  // sliderTop.addEventListener('scroll', ()=>{
    
  //   if (sliderTopImg[i].id==='lastClone'){
  //     sliderTop.style.transition = "none";
  //     i = sliderTopImg.length - 2;
  //     i--;
  //     sizeTop = sliderTopImg[i].clientWidth + 10;      sliderTop.scrollLeft += sizeTop;
     
  //     console.log(sliderTopImg[j]);
  //     console.log(sizeTop);
  //   }
     
  //  })

}

