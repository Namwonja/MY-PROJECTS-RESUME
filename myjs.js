function revealFunction() {
    window.sr = ScrollReveal({ 
        duration: 1350, 
        distance: '250px', 
        easing: 'ease-out' 
    });
    
    sr.reveal('.reveal-left', {
        origin: 'left', 
        reset: true
    });

    sr.reveal('.reveal-rotate', {
        origin: 'bottom', 
        rotate: { x: 1000, z: 1000 }, 
        reset: true 
    });

    sr.reveal('.reveal-right', {
        origin: 'right', 
        reset: true
    });

    sr.reveal('.reveal-top', {
        origin: 'top', 
        reset: true
    });

    sr.reveal('.reveal-top', {
        origin: 'top', 
        reset: true
    });

    sr.reveal('.reveal-top', {
        origin: 'top', 
        reset: true
    });


}

window.addEventListener('load', () => {
    revealFunction();
});
