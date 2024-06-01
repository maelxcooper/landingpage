function initializebannerAnimation() {

        gsap.from('.bg-wheat', {
            opacity: 0,
            delay: 2,
            x: 400
        })


        gsap.from('.main_logo img',{
                opacity: 0,
                scale: 0.5,
                delay: 1.5,
                duration: 0.5,
                ease: 'back.out(1.7)'
        })

        gsap.from('.bnr_slider', {
            opacity: 0,
            delay: 1.8,
            x: -20
        })

        gsap.from('.bnr_con h2', {
            opacity: 0,
            delay: 1.8,
            x: 10
        })

        gsap.from('.bnr_if P', {
            opacity: 0,
            delay: 2,
            x: 10
        })

        gsap.from('.f-m-btn', {
            opacity: 0,
            delay: 2.5,
            x: 10
        })

        gsap.from('.bnr_contact > div', {
            opacity: 0,
            delay: 3,
            x: 10
        })


}