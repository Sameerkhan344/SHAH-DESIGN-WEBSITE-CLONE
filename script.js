function loco() {
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#bg"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#bg", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
loco();
//cursor
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", function (el) {
    cursor.style.left = `${el.x}px`;
    cursor.style.top = `${el.y}px`;
})


//music play
var mysong = new Audio();
mysong.src = "./Assets/shah-sound.mp3";

const play = () => {
    mysong.play();
    mysong.loop = true;
}
const pause = () => {
    mysong.pause();
}  

var muted = document.querySelector(".muted");
var unmuted = document.querySelector(".unmuted");
var flag = 0;
      
muted.addEventListener("click", function () {
unmuted.style.display = "block";
muted.style.display = "none";
flag = 1
pause();
})
            
 unmuted.addEventListener("click", function () {
    muted.style.display = "block";
    unmuted.style.display = "none";
     flag = 0
     play();
              
})
      
      


//nav--
const cross = document.querySelector(".close-btn");
const humbrg = document.querySelector(".hambrg");
const close = document.querySelector(".close");
const open = document.querySelector(".open");
const nav = document.querySelector(".nav-container")
const shah2 = document.querySelector(".shah-2")
const shah1 = document.querySelector(".shah-1")
// var flag = 0;
cross.addEventListener("click", function () {
    close.style.transform = `translate3d(0px, 150%, 0px)`;
    open.style.transform = `translate3d(0px, 0%, 0px)`;
    nav.style.display = "none";
    shah2.style.display = "block"
    shah1.style.display = "none"

    
});
humbrg.addEventListener("click", function () {
    open.style.transform = `translate3d(0px, -150%, 0px)`;
    close.style.transform = `translate3d(0px, 0%, 0px)`;
    nav.style.display = "block";
    shah2.style.display = "none"
    shah1.style.display = "block"
})

gsap.to(".cover", {
        height: "0%",
        duration: 4,
        ease:"Expo.easeInOut"
    })
gsap.to(".hide-div h1", {
    transform: `translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
    transformStyle: `preserve-3d`,
    opacity: 1,
    duration: 0.8,
    delay:1.8
})

gsap.to(".page3", {
    scrollTrigger: {
        trigger: ".page3 .sticky-cntr",
        start: "top 0%",
        end:"bottom -160%",
        pin: true,
        scroller:"#bg",
        // markers:true,
    }
})
gsap.to("p.p-1", {
     scrollTrigger: {
        trigger: "p.p-1",
        start: "top -30%",
        end:"bottom 0%",
        // markers: true,
         scroller:"#bg",
        scrub:2,
    },
    opacity: 1,
    transform:" translate3d(0px, 0px, 0px)",
    transformstyle: "preserve-3d"
})
gsap.to("p.p-1", {
     scrollTrigger: {
        trigger: "p.p-2",
        start: "top -60%",
        // markers: true,
        scroller: "#bg",
         scrub:2,   
    },
    opacity: 0,
    transform:" translate3d(0px, 40px, 0px)",
    transformstyle: "preserve-3d"
})
gsap.to("p.p-2", {
     scrollTrigger: {
        trigger: "p.p-2",
        start: "top -60%",
        // markers: true,
         scroller:"#bg",
        scrub:2,
    },
    opacity: 1,
    transform:" translate3d(0px, 0px, 0px)",
    transformstyle: "preserve-3d"
})
gsap.to("p.p-2", {
     scrollTrigger: {
        trigger: "p.p-3",
        start: "top -90%",
        // markers: true,
        scroller: "#bg",
         scrub:2,   
    },
    opacity: 0,
    transform:" translate3d(0px, 40px, 0px)",
    transformstyle: "preserve-3d"
})
gsap.to("p.p-3", {
     scrollTrigger: {
        trigger: "p.p-3",
        start: "top -90%",
        // markers: true,
         scroller:"#bg",
        scrub:2,
    },
    opacity: 1,
    transform:" translate3d(0px, 0px, 0px)",
    transformstyle: "preserve-3d"
})
gsap.to("p.p-3", {
     scrollTrigger: {
        trigger: "#bullet-4 ",
        start: "top -120%",
        // markers: true,
         scroller:"#bg",
        scrub:2,
    },
    opacity: 0,
    transform:" translate3d(0px, 40px, 0px)",
    transformstyle: "preserve-3d"
})
gsap.to("#bullet-4 ", {
     scrollTrigger: {
        trigger: "#bullet-4 ",
        start: "top -120%",
        // markers: true,
         scroller:"#bg",
        scrub:2,
    },
    opacity: 1,
    transform:" translate3d(0px, -50px, 0px)",
    transformstyle: "preserve-3d"
})
gsap.to("#bullet-4 ", {
     scrollTrigger: {
        trigger: "#bullet-4 ",
        start: "top -150%",
        // markers: true,
         scroller:"#bg",
        scrub:2,
    },
    opacity:0,
    transform:" translate3d(0px, 40px, 0px)",
    transformstyle: "preserve-3d"
})


gsap.to(".page5", {
    scrollTrigger: {
        trigger: ".page5",
        start: "top 1%",
        end:"bottom 500%",
        // markers: true,
        scroller: "#bg",
        scrub:.1,
    },
    backgroundColor:"#000",
})

// nav-txt-color----change
gsap.to(".wht", {
    scrollTrigger: {
        trigger: ".page5",
         start: "top 1%",
        end:"bottom 100%",
        // markers: true,
        scroller: "#bg",
        scrub:.1,
    },
    color:"#fff",
})
gsap.to(".wht", {
    scrollTrigger: {
        trigger: ".page6",
         start: "top 1%",
        end:"bottom 100%",
        // markers: true,
        scroller: "#bg",
        scrub:.1,
    },
    color:"#000",
})
gsap.to(".line-1", {
    scrollTrigger: {
        trigger: ".page5",
         start: "top 1%",
        end:"bottom 100%",
        // markers: true,
        scroller: "#bg",
        scrub:.1,
    },
    backgroundColor:"#fff",
})
gsap.to(".line-1", {
    scrollTrigger: {
        trigger: ".page6",
         start: "top 1%",
        // markers: true,
        scroller: "#bg",
        scrub:.1,
    },
    backgroundColor:"#000",
})
gsap.to(".div-hide-2 .line", {
    scrollTrigger: {
        trigger: ".page5",
        start: "top 2%",
        // markers: true,
        scroller: "#bg",
    },
    duration:.8,
    opacity:1,
    transform: `translate3d(0px, 0%, 0px) scale3d(1, 1, 1) skew(0deg, 0deg)`,
    transformStyle: `preserve-3d`,
    stagger: {
        amount:1,
    }
})

gsap.to(".parallax-wrapper img", {
    scrollTrigger: {
        trigger: ".page5",
        start: "top 2%",
        // markers: true,
        scroller: "#bg",
        scrub:2,
    },
    transform: `translate3d(0px, 0%, 0px) scale3d(1, 1, 1) skew(0deg, 0deg)`,
    transformStyle: `preserve-3d`,
})
gsap.to(".parallax-wrapper .pic2", {
    scrollTrigger: {
        trigger: ".page5",
        start: "top 2%",
        // markers: true,
        scroller: "#bg",
        scrub:2,
    },
    transform: `translate3d(0px, 0%, 0px) scale3d(1, 1, 1) skew(0deg, 0deg)`,
    transformStyle: `preserve-3d`,
})

gsap.to(".div-hide-2 .line", {
    scrollTrigger:{
        trigger: ".awards-recognition",
        start: "top 50%",
        // markers: true,
        scroller: "#bg",
        
    },
     transform: `translate3d(0px, 0%, 0px) scale3d(1, 1, 1) skew(0deg, 0deg)`,
    transformStyle: `preserve-3d`,
    opacity: 1,
    display:"block",
    duration:1
})

gsap.to(".award-content", {
    scrollTrigger: {
        trigger: ".award-content",
        start: "top 50%",
        // markers: true,
        scroller: "#bg",
        scrub:.2,
    },
 transform: `translateX(0px)`,
    opacity: 1,
    stagger:{
        amount: 2,
     delay:0.5
        
    },
})
gsap.to(".line-big-awards", {
    scrollTrigger: {
        trigger: ".award-content",
        start: "top 50%",
        // markers: true,
        scroller: "#bg",
        scrub:.2,
    },
    width: `100%`,
 stagger:{
     amount: 2,
     delay:0.5
    },
})



const links = document.querySelectorAll(".product-item");
const linkImages = document.querySelectorAll(".hover-reveal__img");
const progressBar = document.querySelectorAll(".running-line");

links.forEach((link, idx) => {
    link.addEventListener("mousemove", (elem) => {
        link.children[1].style.opacity = 1;
        link.children[0].style.zIndex = 3;
        link.children[1].style.transform = `translate(${elem.clientX - 300}px, -${elem.clientY / 3}px)`;
        linkImages[idx].style.transform = `scale(1, 1) skew(2deg, 2deg) rotate(0deg)`;
        link.style.zIndex = 2;
        linkImages[idx].style.height = `100%`;
        linkImages[idx].style.width = `100%`;
        progressBar[idx].style.width = `100%`;
    });
        link.addEventListener("mouseleave", (elem) => {
        link.children[1].style.opacity = 0;
        // link.children[0].style.zIndex = 9;
        link.children[1].style.transform = `translate(${elem.clientX}px - 300)`;
        linkImages[idx].style.transform = `scale(0, 0)`
        link.style.zIndex = 0;
        linkImages[idx].style.height = `0%`;
        linkImages[idx].style.width = `0%`;
        progressBar[idx].style.width = `0%`;
        
    })
})