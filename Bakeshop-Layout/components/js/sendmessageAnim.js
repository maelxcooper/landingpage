// Gsap Scrolltrigger
gsap.registerPlugin(ScrollTrigger);

function initializesendmessageAnimation() {
gsap.from("#sendmessage-container h2", {
    scrollTrigger: "#sendmessage-container", 
    opacity: 0,
    scale: 0.5,
    delay: 1,
    duration: 0.5,
    ease: 'back.out(1.7)'
});

gsap.from('.form-container', {
    scrollTrigger: '.form-container',
    opacity: 0,
    delay: 1.6,
    y: 20
})

}