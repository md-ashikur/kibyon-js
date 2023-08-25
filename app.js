function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
../img/planeVideo/plane1.jpg
../img/planeVideo/plane2.jpg
../img/planeVideo/plane3.jpg
../img/planeVideo/plane4.jpg
../img/planeVideo/plane5.jpg
../img/planeVideo/plane6.jpg
../img/planeVideo/plane7.jpg
../img/planeVideo/plane8.jpg
../img/planeVideo/plane9.jpg
../img/planeVideo/plane10.jpg
../img/planeVideo/plane11.jpg
../img/planeVideo/plane12.jpg
../img/planeVideo/plane13.jpg
../img/planeVideo/plane14.jpg
../img/planeVideo/plane15.jpg
../img/planeVideo/plane16.jpg
../img/planeVideo/plane17.jpg
../img/planeVideo/plane18.jpg
../img/planeVideo/plane19.jpg
../img/planeVideo/plane20.jpg
../img/planeVideo/plane21.jpg
../img/planeVideo/plane22.jpg
../img/planeVideo/plane23.jpg
../img/planeVideo/plane24.jpg
../img/planeVideo/plane25.jpg
../img/planeVideo/plane26.jpg
../img/planeVideo/plane27.jpg
../img/planeVideo/plane28.jpg
../img/planeVideo/plane29.jpg
../img/planeVideo/plane30.jpg
../img/planeVideo/plane31.jpg
../img/planeVideo/plane32.jpg
../img/planeVideo/plane33.jpg
../img/planeVideo/plane34.jpg
../img/planeVideo/plane35.jpg
../img/planeVideo/plane36.jpg
../img/planeVideo/plane37.jpg
../img/planeVideo/plane38.jpg
../img/planeVideo/plane39.jpg
../img/planeVideo/plane40.jpg
../img/planeVideo/plane41.jpg
../img/planeVideo/plane42.jpg
../img/planeVideo/plane43.jpg
../img/planeVideo/plane44.jpg
../img/planeVideo/plane45.jpg
../img/planeVideo/plane46.jpg
../img/planeVideo/plane47.jpg
../img/planeVideo/plane48.jpg
../img/planeVideo/plane49.jpg
../img/planeVideo/plane50.jpg
../img/planeVideo/plane51.jpg
../img/planeVideo/plane52.jpg
../img/planeVideo/plane53.jpg
../img/planeVideo/plane54.jpg
../img/planeVideo/plane55.jpg
../img/planeVideo/plane56.jpg
../img/planeVideo/plane57.jpg
../img/planeVideo/plane58.jpg
../img/planeVideo/plane59.jpg
../img/planeVideo/plane60.jpg
../img/planeVideo/plane61.jpg
../img/planeVideo/plane62.jpg
../img/planeVideo/plane63.jpg
../img/planeVideo/plane64.jpg
../img/planeVideo/plane65.jpg
../img/planeVideo/plane66.jpg
../img/planeVideo/plane67.jpg
../img/planeVideo/plane68.jpg
../img/planeVideo/plane69.jpg
../img/planeVideo/plane70.jpg
../img/planeVideo/plane71.jpg
../img/planeVideo/plane72.jpg
../img/planeVideo/plane73.jpg
../img/planeVideo/plane74.jpg
../img/planeVideo/plane75.jpg
../img/planeVideo/plane76.jpg
../img/planeVideo/plane77.jpg
../img/planeVideo/plane78.jpg
../img/planeVideo/plane79.jpg
../img/planeVideo/plane80.jpg
../img/planeVideo/plane81.jpg
../img/planeVideo/plane82.jpg
../img/planeVideo/plane83.jpg
../img/planeVideo/plane84.jpg
../img/planeVideo/plane85.jpg
../img/planeVideo/plane86.jpg
../img/planeVideo/plane87.jpg
../img/planeVideo/plane88.jpg
../img/planeVideo/plane89.jpg
../img/planeVideo/plane90.jpg
../img/planeVideo/plane91.jpg
../img/planeVideo/plane92.jpg
../img/planeVideo/plane93.jpg
../img/planeVideo/plane94.jpg
../img/planeVideo/plane95.jpg
../img/planeVideo/plane96.jpg
../img/planeVideo/plane97.jpg
../img/planeVideo/plane98.jpg
../img/planeVideo/plane99.jpg
../img/planeVideo/plane100.jpg
../img/planeVideo/plane101.jpg
../img/planeVideo/plane102.jpg
../img/planeVideo/plane103.jpg
../img/planeVideo/plane104.jpg
../img/planeVideo/plane105.jpg
../img/planeVideo/plane106.jpg
../img/planeVideo/plane107.jpg
../img/planeVideo/plane108.jpg
../img/planeVideo/plane109.jpg
../img/planeVideo/plane110.jpg
../img/planeVideo/plane111.jpg
../img/planeVideo/plane112.jpg
../img/planeVideo/plane113.jpg
../img/planeVideo/plane114.jpg
../img/planeVideo/plane115.jpg
../img/planeVideo/plane116.jpg
../img/planeVideo/plane117.jpg
../img/planeVideo/plane118.jpg
../img/planeVideo/plane119.jpg
../img/planeVideo/plane120.jpg
../img/planeVideo/plane121.jpg
../img/planeVideo/plane122.jpg
../img/planeVideo/plane123.jpg
../img/planeVideo/plane124.jpg
../img/planeVideo/plane125.jpg
../img/planeVideo/plane126.jpg
../img/planeVideo/plane127.jpg
../img/planeVideo/plane128.jpg
../img/planeVideo/plane129.jpg
../img/planeVideo/plane130.jpg
../img/planeVideo/plane131.jpg
../img/planeVideo/plane132.jpg
../img/planeVideo/plane133.jpg
../img/planeVideo/plane134.jpg
../img/planeVideo/plane135.jpg

    `;
    return data.split("\n")[index];
  }
  
  const frameCount = 1770;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `3800% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `3800% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  
  