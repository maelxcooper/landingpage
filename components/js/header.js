function initializeMenuToggle() {
    let menu = document.querySelector('#toggle_menu');
    let navbar = document.querySelector('.navbar');
    let overLay = document.querySelector('.overlay');
    let bodyCon = document.body;
    let htmlCon = document.documentElement;
  
    menu.onclick = () => {
        console.log('yawa');
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
        overLay.classList.toggle('mob');
        bodyCon.classList.toggle('blur');
        htmlCon.classList.toggle('blur');
    };
    
    window.onresize = () => {
        if (window.innerWidth >= 1000 && navbar.classList.contains('open')) {
            console.log('animal')
            menu.classList.remove('bx-x');
           navbar.classList.remove('open');
           overLay.classList.remove('mob');
           bodyCon.classList.remove('blur');
           htmlCon.classList.remove('blur');
           
        }
    }

        
  }
  

