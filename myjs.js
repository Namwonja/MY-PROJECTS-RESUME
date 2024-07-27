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




        function revealFunction2() {
            window.sr = ScrollReveal({ 
                duration: 1350, 
                distance: '250px', 
                easing: 'ease-out' 
            });
            
            // Reveal line
            sr.reveal('.line', {
                origin: 'top',
                distance: '100%', // Make it appear as it grows in height
                scale: 1, // Scale to full height
                reset: true
            });

            // Reveal content
            sr.reveal('.reveal-left', {
                origin: 'left',
                reset: true
            });

            sr.reveal('.reveal-right', {
                origin: 'right',
                reset: true
            });
        }

        window.addEventListener('load', () => {
            revealFunction2();
        });
    