window.addEventListener('load', () => {
    let controler = new ScrollMagic.Controller();
    let timeline = new TimelineMax();
    const navLinks = document.querySelectorAll('.nav--link');
    const skill = document.querySelectorAll('.skill');
    const social = document.querySelectorAll('.social--links');

    timeline
    .to('.loader', 1, {
        y: '-100%',
        ease: Power3.ease
    })

    .from('.logo', 0.5, {
        opacity: 0,
        y: '10%',
        ease: Power3.ease
    })

    .staggerFrom(['.nav--link'], 0.5, {
        opacity: 0,
        y: '10px',
        ease: Power3.ease,
    }, .15)

    .staggerFrom(['.hero--heading'], 0.5, {
        opacity: 0,
        y: '50px',
        ease: Power3.ease
    }, 0.5)

    .from('.hero--p', 0.5, {
        opacity: 0,
        ease: Power3.ease
    })

    let scene = new ScrollMagic.Scene({
        triggerHook: 0
    })

    .setTween(timeline)
    .addTo(controler)

    //timeline 2

    let timeline2 = new TimelineMax();

    timeline2
    .from('.about h1', 0.5, {
        opacity: 0,
        y: '75px',
        ease: Power3.ease
    })

    .from('#aboutText', 0.5, {
        opacity: 0,
        y: '50px',
        ease: Power3.ease
    })

    .from('#aboutCta', 0.5, {
        opacity: 0,
        ease: Power3.ease
    })

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.hero--p',
        triggerHook: 0
    })

    .setTween(timeline2)
    .addTo(controler);

    //timeline3 

    let timeline3 = new TimelineMax();

    timeline3
    .from('#educationHFirst', 0.5, {
        opacity: 0,
        y: '25px',
        ease: Power3.ease
    })

    .from('#educationPFirst', 0.5, {
        opacity: 0,
        ease: Power3.ease
    })

    .from('#educationHSecond', 0.5, {
        opacity: 0,
        y: '25px',
        ease: Power3.ease
    })

    .from('#educationPSecond', 0.5, {
        opacity: 0,
        ease: Power3.ease
    })


    let scene3 = new ScrollMagic.Scene({
        triggerElement: '#aboutText',
        triggerHook: 0
    })

    .setTween(timeline3)
    .addTo(controler);

    //timeline 4

    let timeline4 = new TimelineMax();

    timeline4
    .from('#workHeading', 0.5, {
        opacity: 0,
        y: '100px',
        ease: Power3.ease
    })

    .to('.overlay--1', 0.5, {
        x: '100%',
        ease: Power3.ease
    })

    .to('.overlay--2', 0.5, {
        x: '-100%',
        ease: Power3.ease
    })

    .to('.overlay--3', 0.5, {
        y: '-100%',
        ease: Power3.ease
    })

    .to('.overlay--4', 0.5, {
        x: '-100%',
        ease: Power3.ease
    })

    .to('.overlay--5', 0.5, {
        x: '100%',
        ease: Power3.ease
    })

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '#educationPSecond',
        triggerHook: 0
    })

    .setTween(timeline4)
    .addTo(controler);

    //Timeline 5

    let timeline5 = new TimelineMax();

    timeline5
    .from('#skillsHeading', 0.5, {
        opacity: 0,
        y: '100px',
        ease: Power3.ease
    })

    .staggerFrom([skill], 0.15, {
        y: '10px',
        opacity: 0,
        ease: Power3.ease
    }, 0.15)

    let scene5 = new ScrollMagic.Scene({
        triggerElement: '.work--trigger',
        triggerHook: 0
    })

    .setTween(timeline5)
    .addTo(controler);

    //Timeline 6 

    let timeline6 = new TimelineMax();

    timeline6
    .from('.social--heading', .5, {
        opacity: 0,
        y: '100px',
        ease: Power3.ease
    })

    .staggerFrom([social], 0.15, {
        opacity: 0,
        y: '20px',
        ease: Power3.ease
    }, 0.15)
    let scene6 = new ScrollMagic.Scene({
        triggerElement: '.social--trigger',
        triggerHook: 0,
    })

    .setTween(timeline6)
    .addTo(controler);

    //Timeline 7
    let timeline7 = new TimelineMax();

    timeline7
    .from('#contactHeading', 0.5, {
        opacity: 0,
        y: '100px',
        ease: Power3.ease
    })

    .from('.contact--heading', 0.5, {
        opacity: 0,
        y: '50px',
        ease: Power3.ease
    })

    .from('.email', 0.5, {
        opacity: 0,
        ease: Power3.easeIn
    })

    let scene7 = new ScrollMagic.Scene({
        triggerElement: '#socialGrid',
        triggerHook: 0
    })

    .setTween(timeline7)
    .addTo(controler);
});