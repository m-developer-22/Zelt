function init(){
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
init();












// -------iss line se canvas select hoga
const canvas=document.querySelector("canvas");

// -------iss line se ye decide hoga ki canvas ki help se 2d ya 3d banana hai -----yahan pe 2d ho rha
const context=canvas.getContext("2d");


// -------width aur height set hui
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


//--------jab screen ki size kam hogi tab igmage ko shi se positioned rakhega
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
})


// -------- saare images ka src yahan hai
function files(index) {
    var data = `./images/egg1.webp
    ./images/egg2.webp
    ./images/egg3.webp
    ./images/egg4.webp
    ./images/egg5.webp
    ./images/egg6.webp
    ./images/egg7.webp
    ./images/egg8.webp
    ./images/egg9.webp
    ./images/egg10.webp
    ./images/egg11.webp
    ./images/egg12.webp
    ./images/egg13.webp
    ./images/egg14.webp
    ./images/egg15.webp
    ./images/egg16.webp
    ./images/egg17.webp
    ./images/egg18.webp
    ./images/egg19.webp
    ./images/egg20.webp
    ./images/egg21.webp
    ./images/egg22.webp
    ./images/egg23.webp
    ./images/egg24.webp
    ./images/egg25.webp
    ./images/egg26.webp
    ./images/egg27.webp
    ./images/egg28.webp
    ./images/egg29.webp
    ./images/egg30.webp
    ./images/egg31.webp
    ./images/egg32.webp
    ./images/egg33.webp
    ./images/egg34.webp
    ./images/egg35.webp
    ./images/egg36.webp
    ./images/egg37.webp
    ./images/egg38.webp
    ./images/egg39.webp
    ./images/egg40.webp
    ./images/egg41.webp
    ./images/egg42.webp
    ./images/egg43.webp
    ./images/egg44.webp
    ./images/egg45.webp
    ./images/egg46.webp
    ./images/egg47.webp
    ./images/egg48.webp
    ./images/egg49.webp
    ./images/egg50.webp
    ./images/egg51.webp
    ./images/egg52.webp
    ./images/egg53.webp
    ./images/egg54.webp
    ./images/egg55.webp
    ./images/egg56.webp
    ./images/egg57.webp
    ./images/egg58.webp
    ./images/egg59.webp
    ./images/egg60.webp
    ./images/egg61.webp
    ./images/egg62.webp
    ./images/egg63.webp
    ./images/egg64.webp
    ./images/egg65.webp
    ./images/egg66.webp
    ./images/egg67.webp
    ./images/egg68.webp
    ./images/egg69.webp
    ./images/egg70.webp
    ./images/egg71.webp
    ./images/egg72.webp
    ./images/egg73.webp
    ./images/egg74.webp
    ./images/egg75.webp
    ./images/egg76.webp
    ./images/egg77.webp
    ./images/egg78.webp
    ./images/egg79.webp
    ./images/egg80.webp
    ./images/egg81.webp
    ./images/egg82.webp
    ./images/egg83.webp
    ./images/egg84.webp
    ./images/egg85.webp
    ./images/egg86.webp
    ./images/egg87.webp
    ./images/egg88.webp
    ./images/egg89.webp
    ./images/egg90.webp
    ./images/egg91.webp
    ./images/egg92.webp
    ./images/egg93.webp
    ./images/egg94.webp
    ./images/egg95.webp
    ./images/egg96.webp
    ./images/egg97.webp
    ./images/egg98.webp
    ./images/egg99.webp
    ./images/egg100.webp
    ./images/egg101.webp
    ./images/egg102.webp
    ./images/egg103.webp
    ./images/egg104.webp
    ./images/egg105.webp
    ./images/egg106.webp
    ./images/egg107.webp
    ./images/egg108.webp
    ./images/egg109.webp
    ./images/egg110.webp
    ./images/egg111.webp
    ./images/egg112.webp
    ./images/egg113.webp
    ./images/egg114.webp
    ./images/egg115.webp
    ./images/egg116.webp
    ./images/egg117.webp
    ./images/egg118.webp
    `;
    return data.split("\n")[index];
}

// --------total images jitno ko animation ke liye use karenge wo yahan
const frameCount = 118;

const images = [];
const imageSeq = {
    frame: 1
};

//-------180 image ks img tag bana ke images array mei push kiye 
for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}



gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
    scrub: 0.15,
    trigger: `#page1>canvas`,
    start: `top top`,
    end: `340% top`,
    scroller: `#main`,
    },
    onUpdate: render,
})

images[1].onload = render;



function render() {
    scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}
ScrollTrigger.create({
    trigger: "#page1>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `340% top`,
});


// gsap.to("#a",{
//     scrollTrigger:{
//         trigger:"#a",
//         start:"top 20%",
//         markers:true
//     }
// })



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


function holder(){
    document.querySelector(".swiper").style.cursor="grabbing";
}

gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    duration:1.5,
    ease: Expo.easeInOut
})
gsap.from("#page1 h3",{
    y:50,
    opacity:0,
    duration:1.5,
    delay:.2,
    ease: Expo.easeInOut
})
gsap.from("#page1 canvas",{
    y:100,
    opacity:0,
    duration:1.5,
    delay:.5,
    ease: Expo.easeInOut
})