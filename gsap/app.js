gsap.from(".element.element-1", {
    opacity: 1,
    y: "100vh",
    duration: 2,
    ease: "power2"
})

let hover = gsap.fromTo(".element.element-1",{ width: "25%"}, { width:"70%", duration: 1, paused: true, ease: "power1.inOut"});
let shrink = gsap.fromTo(".element.element-2", {width: "25%"}, { width: "10%", duration: 1, paused: true, ease: "power1.inOut"});
document.querySelector(".element.element-1").addEventListener('mouseenter', ()=> {
    hover.play();
    shrink.play();
});
document.querySelector(".element.element-1").addEventListener('mouseleave', ()=> {
    hover.reverse();
    shrink.reverse();
});