gsap.to("#nav", {
    backgroundColor : "#000",
    height:"120px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers : true,
        start:"top -10%",
        end:"top -11%",

    }
})