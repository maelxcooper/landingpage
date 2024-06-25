// Gsap Scrolltrigger
gsap.registerPlugin(ScrollTrigger);


function initializemissionAnimation() {
    gsap.from('.mission-info', {
        scrollTrigger: '.mission-info',
        opacity: 0,
        delay: 1.5,
        x: -20
    })

    gsap.from('.mission-img', {
        scrollTrigger: '.mission-info',
        opacity: 0,
        delay: 2,
        x: 20
    })

    
}