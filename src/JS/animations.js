gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({defaults: {duration:1}});

tl.to('.reveal-1',
    {
        
        startAt: { y:10, opacity:0},
        y:0,
        opacity:1,
        scrollTrigger: {
            trigger:'.reveal-1',
            start: 'top 80%',
            markers: true
        }
    }
)