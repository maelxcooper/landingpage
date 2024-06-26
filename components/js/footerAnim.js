// Gsap Scrolltrigger
gsap.registerPlugin(ScrollTrigger);

function initializefooterAnimation() {
gsap.from(".ftr_map", {
    scrollTrigger: ".ftr_map", 
    opacity: 0,
    delay: 1,
});


gsap.from(".soc-med", {
    scrollTrigger: ".ftr_map", 
    opacity: 0,
    delay: 1,
    y: 20
});

gsap.from(".fig1", {
    scrollTrigger: ".copyright", 
    opacity: 0,
    delay: 0.8,
    x: -20
});

gsap.from(".fig2", {
    scrollTrigger: ".copyright", 
    opacity: 0,
    delay: 1,
    x: 20
});



}