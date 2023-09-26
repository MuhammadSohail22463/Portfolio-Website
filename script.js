//function for smooth scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//special function for making circle chapta

function chapta() {
    var timeout;
    var xscale = 1;
    var yscale = 1;
    let xprev = 0;
    let yprev = 0;

    window.addEventListener('mousemove', function (dets) {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
        xprev = dets.clientX;
        yprev = dets.clientY;
    
        mousemovekaro(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
            
        },100)
    
    })
    }
    

  chapta();

//function for making mini circle move to mouse movement
function mousemovekaro(xscale,yscale) {
    window.addEventListener('mousemove', function (dets) {
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    }
    )
}
mousemovekaro();


//how to animate words

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from('#nav', {
        y: '-10',
        opacity : 0,
        duration : 1,
        ease: Expo.easeInOut
    })
    tl.from('.me', {
        y: '100',
        opacity: 0,
        duration: .5,
        stagger:.2,
        ease: Expo.easeInOut
    })
    tl.from('#chotiheadings', {
        y: '-10',
        opacity: 0,
        duration: .4,
        ease:Expo.easeInOut
    })
    tl.from('#herofooter', {
        x: '10',
        opacity: 0,
        duration: .3,
        ease:Expo.easeInOut
    })
}
firstPageAnim();

//function for inner div moving objects

document.querySelectorAll('.elem').forEach(function (elem) {

    var rotate = 0;
    var diffrot = 0;


    elem.addEventListener('mouseleave', function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        })
    })




    elem.addEventListener('mousemove', function (dets) {
        var diff =elem.getBoundingClientRect().top - dets.clientY ;
        diffrot = dets.clientX -  rotate ;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top : diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot),
        })
    })
})


//date


document.getElementById('date').innerHTML = new Date().toDateString();



