const tl = gsap.timeline({
    defaults: {
        duration: 1
    }
});

tl.fromTo('.reveal',

    {
    opacity:0,
    y: 25
    },
    {
        opacity: 1,
        y:0
    }
)