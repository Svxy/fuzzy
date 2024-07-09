document.addEventListener("DOMContentLoaded", () => {
    // GSAP animations
    gsap.from("header h1", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from("#obituary h2", { duration: 1.5, x: -50, opacity: 0, delay: 0.5, ease: "power2.out" });
    gsap.from(".photo-container img", { duration: 1.5, scale: 0.5, opacity: 0, delay: 1, ease: "elastic.out(1, 0.5)", onComplete: () => {
      gsap.set(".photo-container img", { scale: 1, opacity: 1 });
    }});
    gsap.from("#obituary p", {
      duration: 1.5,
      x: 50,
      opacity: 0,
      delay: 1.5,
      stagger: 0.3,
      ease: "power2.out"
    });
    gsap.from("footer", { duration: 1.5, y: 50, opacity: 0, delay: 2.5, ease: "power2.out" });
  
    // Easter egg
    const image = document.getElementById("fuzzy-image");
    let isFlipped = false;
  
    image.addEventListener("click", () => {
      gsap.to(image, { duration: 0.5, rotationY: "+=180", ease: "power2.inOut", onComplete: () => {
        isFlipped = !isFlipped;
        if (isFlipped) {
          image.style.transform = "scaleX(-1)";
        } else {
          image.style.transform = "scaleX(1)";
        }
      }});
      alert("You found an easter egg! Fuzzy Lumpkins is always in our hearts.");
    });
  });  