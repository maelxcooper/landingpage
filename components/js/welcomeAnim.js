// Gsap Scrolltrigger
gsap.registerPlugin(ScrollTrigger);


function initializewelcomeAnimation() {

    gsap.from('.mid-bg-wheat', {
        scrollTrigger: '#welcome-container',
        opacity: 0,
        delay: 1,
        x: -400
    })

    gsap.from("#welcome-container h1", {
        scrollTrigger: "#welcome-container", 
        opacity: 0,
        scale: 0.5,
        delay: 1,
        duration: 0.5,
        ease: 'back.out(1.7)'
    })

    gsap.from('.info1', {
        scrollTrigger: '.info-grid',
        opacity: 0,
        delay: 1.5,
        x: -20
    })

    gsap.from('.info2', {
        scrollTrigger: '.info-grid',
        opacity: 0,
        delay: 1.5,
        x: 20
    })

    gsap.from('.opt1 div:first-child', {
        scrollTrigger: '.serv-options',
        opacity: 0,
        delay: 1,
        x: -20
    })

    gsap.from('.opt1 div:nth-child(2)', {
        scrollTrigger: '.serv-options',
        opacity: 0,
        delay: 1.5,
        x: -20
    })

    gsap.from(".br-img-con", {
        scrollTrigger: ".serv-options", 
        opacity: 0,
        scale: 0.5,
        delay: 3,
        duration: 1,
        ease: 'back.out(1.7)',
        y: -100
    })

    gsap.from('.opt2 div:first-child', {
        scrollTrigger: '.serv-options',
        opacity: 0,
        delay: 2,
        x: 20
    })

    gsap.from('.opt2 div:nth-child(2)', {
        scrollTrigger: '.serv-options',
        opacity: 0,
        delay: 2.5,
        x: 20
    })

}