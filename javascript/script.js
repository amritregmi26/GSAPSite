!(function(d) {

    gsap.registerPlugin(ScrollTrigger);

    // Top Image container Fade In Effect
    gsap.to("#image-container", {
        scrollTrigger:
        {
            trigger: "#logo-design",
            toggleActions: "restart none none none"
        },
        opacity: 1,
        duration: 2
    });

    // Welcome Text Slide in effect
    gsap.to("#welcome-text", {
        scrollTrigger: {
            trigger: "#welcome-text",
            toggleActions: "restart restart restart none"
        },
        x: 150,
        duration: 2
    });

    //Representation card animation
    gsap.to("#representation",{
        scrollTrigger: {
            trigger:"#representation",
            toggleActions: "restart restart restart none"
        },
        opacity: 1,
        duration: 2
    });


}) (document);
