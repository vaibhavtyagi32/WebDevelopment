// gsap.from("#box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     scale:1.5,
//     backgroundColor:"blue",
//     borderRadius:"50%"
// })


// gsap.from("h1",{
//     opacity:0,
//     duration:2,
//     delay:1,
//     repeat:4,
//     y:-30
// })

// gsap.to("#box",{
//     x:1000,
//     duration:1,
//     delay:1,
//     rotate:360,
//     repeat:4,
//     yoyo:true,
//     backgroundColor:"purple"
// })

var tl=gsap.timeline()

tl.from("h3",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3

})