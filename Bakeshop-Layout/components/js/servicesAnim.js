// Gsap Scrolltrigger
gsap.registerPlugin(ScrollTrigger);

function initializeservicesAnimation() {

    gsap.from("#services-container h2", {
        scrollTrigger: "#services-container", 
        opacity: 0,
        scale: 0.5,
        delay: 1,
        duration: 0.5,
        ease: 'back.out(1.7)'
    })

    gsap.from(".serv1", {
        scrollTrigger: "#services-container",
        opacity: 0,
        delay: 1.5,
        duration: 1,
        y: -20
    })



    gsap.from(".serv2", {
        scrollTrigger: "#services-container",
        opacity: 0,
        delay: 2,
        duration: 1.5,
        y: -20
    })

    gsap.from(".serv3", {
        scrollTrigger: "#services-container",
        opacity: 0,
        delay: 2.5,
        duration: 2,
        y: -20
    })



}
