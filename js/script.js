
// preloader
let preloader =document.getElementById('preload');

function prel() {
    preloader.style.display ="none";
}



// scroll to top button
let totop = document.querySelector('.totop i');

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 300 ){
        totop.style.display ="block";
    }else {
        totop.style.display ="none";
    }
})

    // toggle menu
        const toggle = document.getElementById('toggle');
        const nav = document.querySelector('.nav ul');

        toggle.addEventListener('click', () => {
            if (toggle.classList.contains('fa-bars')) {
                toggle.classList.remove('fa-bars');
                toggle.classList.add('fa-xmark');
                nav.classList.toggle('show');
            } else {
                toggle.classList.remove('fa-xmark');
                toggle.classList.add('fa-bars');
                nav.classList.remove('show');
            }
            
        });


        // for contrast mode
        const contrast = document.getElementById('contrast');
        let logo = document.querySelector('.logo img');
        contrast.addEventListener('click', () => {
            if (contrast.classList.contains('fa-moon')) {
                contrast.classList.remove('fa-moon');
                contrast.classList.add('fa-sun');
                document.body.classList.add('dark-mode');
                logo.src = 'images/logo-light.svg';
            } else {
                contrast.classList.remove('fa-sun');
                contrast.classList.add('fa-moon');
                document.body.classList.remove('dark-mode');
                logo.src = 'images/logo.svg';
            }
        });
