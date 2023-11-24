
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});
gsap.to(".flelem",{
    scrollTrigger:{
    trigger:"#fimages",
    pin:true,
    start:"top top",
    end:"top top",
    endTrigger:".last",
    scrub:1
    },
    y:"-200%",
    ease:Power2
  
})
let sections = document.querySelectorAll(".flelem");
console.log(sections);
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});
