// // Gsap Scrolltrigger
// gsap.registerPlugin(ScrollTrigger);

// function initializeAnimation() {
//     gsap.from('header', {
//         opacity: 0,
//         delay: 1,
//         y:-20
//     })
// }

function initializeMenuToggle() {
    let menu = document.querySelector('#toggle_menu');
    let navbar = document.querySelector('.navbar');
  
    menu.onclick = () => {
        console.log('yawa')
            menu.classList.toggle('bx-x');
            navbar.classList.toggle('open');
    };
    
    window.onresize = () => {
        if (window.innerWidth > 1000 && navbar.classList.contains('open')) {
            menu.classList.toggle('bx-x');
           navbar.classList.remove('open');
        }
    }


    
  }
  

