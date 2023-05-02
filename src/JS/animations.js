gsap.registerPlugin(ScrollTrigger);

function animateReveal() {
    gsap.utils.toArray('.reveal-1').forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 93%'
        },
        y: 20,
        opacity: 0,
        duration: 1
      });
    });
    gsap.utils.toArray('.reveal-2').forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: 'top 93%'
            },
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.2  
        });
    })
    gsap.utils.toArray('.reveal-3').forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: 'top 93%'
            },
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.4  
        });
    })
    gsap.utils.toArray('.reveal-4').forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: 'top 93%'
            },
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.6  
        });
    })
    gsap.utils.toArray('.reveal-5').forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: 'top 93%'
            },
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.8  
        });
    })
    gsap.from('.red-border', {
        scrollTrigger: {
          trigger: '.red-border',
          start: 'top 93%'
        },
        width: 0,
        origin: 'center',
        duration: 1, 
    });
  }
  

  function animateLogos(element) {
    const logo = element.closest('.card').querySelector('.card--logo');
    gsap.set(logo, {rotateY: 0});
    gsap.to(logo, {
      rotateY: '360deg',
      duration: 2
    });
  }




document.querySelectorAll('.card button').forEach(function(button) {
    button.addEventListener('mouseover', function() {
        animateLogos(this);
    });
});


animateReveal();