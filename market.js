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
  
  
  const canvas = document.querySelector("#canvasTwo");
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
  
../marketimg/video1.png
../marketimg/video2.png
../marketimg/video3.png
../marketimg/video4.png
../marketimg/video5.png
../marketimg/video6.png
../marketimg/video7.png
../marketimg/video8.png
../marketimg/video9.png
../marketimg/video10.png
../marketimg/video11.png
../marketimg/video12.png
../marketimg/video13.png
../marketimg/video14.png
../marketimg/video15.png
../marketimg/video16.png
../marketimg/video17.png
../marketimg/video18.png
../marketimg/video19.png
../marketimg/video20.png
../marketimg/video21.png
../marketimg/video22.png
../marketimg/video23.png
../marketimg/video24.png
../marketimg/video25.png
../marketimg/video26.png
../marketimg/video27.png
../marketimg/video28.png
../marketimg/video29.png
../marketimg/video30.png
../marketimg/video31.png
../marketimg/video32.png
../marketimg/video33.png
../marketimg/video34.png
../marketimg/video35.png
../marketimg/video36.png
../marketimg/video37.png
../marketimg/video38.png
../marketimg/video39.png
../marketimg/video40.png
../marketimg/video41.png
../marketimg/video42.png
../marketimg/video43.png
../marketimg/video44.png
../marketimg/video45.png
../marketimg/video46.png
../marketimg/video47.png
../marketimg/video48.png
../marketimg/video49.png
../marketimg/video50.png
../marketimg/video51.png
../marketimg/video52.png
../marketimg/video53.png
../marketimg/video54.png
../marketimg/video55.png
../marketimg/video56.png
../marketimg/video57.png
../marketimg/video58.png
../marketimg/video59.png
../marketimg/video60.png
../marketimg/video61.png
../marketimg/video62.png
../marketimg/video63.png
../marketimg/video64.png
../marketimg/video65.png
../marketimg/video66.png
../marketimg/video67.png
../marketimg/video68.png
../marketimg/video69.png
../marketimg/video70.png
../marketimg/video71.png
../marketimg/video72.png
../marketimg/video73.png
../marketimg/video74.png
../marketimg/video75.png
../marketimg/video76.png
../marketimg/video77.png
../marketimg/video78.png
../marketimg/video79.png
../marketimg/video80.png
../marketimg/video81.png
../marketimg/video82.png
../marketimg/video83.png
../marketimg/video84.png
../marketimg/video85.png
../marketimg/video86.png
../marketimg/video87.png
../marketimg/video88.png
../marketimg/video89.png
../marketimg/video90.png
../marketimg/video91.png
../marketimg/video92.png
../marketimg/video93.png
../marketimg/video94.png
../marketimg/video95.png
../marketimg/video96.png
../marketimg/video97.png
../marketimg/video98.png
../marketimg/video99.png
../marketimg/video100.png
../marketimg/video101.png
../marketimg/video102.png
../marketimg/video103.png
../marketimg/video104.png
../marketimg/video105.png
../marketimg/video106.png
../marketimg/video107.png
../marketimg/video108.png
../marketimg/video109.png
../marketimg/video110.png
../marketimg/video111.png
../marketimg/video112.png
../marketimg/video113.png
../marketimg/video114.png
../marketimg/video115.png
../marketimg/video116.png
../marketimg/video117.png
../marketimg/video118.png
../marketimg/video119.png
../marketimg/video120.png
../marketimg/video121.png
../marketimg/video122.png
../marketimg/video123.png
../marketimg/video124.png
../marketimg/video125.png
../marketimg/video126.png
../marketimg/video127.png
../marketimg/video128.png
../marketimg/video129.png
../marketimg/video130.png
../marketimg/video131.png
../marketimg/video132.png
../marketimg/video133.png
../marketimg/video134.png
../marketimg/video135.png
../marketimg/video136.png
../marketimg/video137.png
../marketimg/video138.png
../marketimg/video139.png
../marketimg/video140.png
../marketimg/video141.png
../marketimg/video142.png
../marketimg/video143.png
../marketimg/video144.png
../marketimg/video145.png
../marketimg/video146.png
../marketimg/video147.png
../marketimg/video148.png
../marketimg/video149.png
../marketimg/video150.png
../marketimg/video151.png
../marketimg/video152.png
../marketimg/video153.png
../marketimg/video154.png
../marketimg/video155.png
../marketimg/video156.png
../marketimg/video157.png
../marketimg/video158.png
../marketimg/video159.png
../marketimg/video160.png
../marketimg/video161.png
../marketimg/video162.png
../marketimg/video163.png
../marketimg/video164.png
../marketimg/video165.png
../marketimg/video166.png
../marketimg/video167.png
../marketimg/video168.png
../marketimg/video169.png
../marketimg/video170.png
../marketimg/video171.png
../marketimg/video172.png
../marketimg/video173.png
../marketimg/video174.png
../marketimg/video175.png
../marketimg/video176.png
../marketimg/video177.png
../marketimg/video178.png
../marketimg/video179.png
../marketimg/video180.png
../marketimg/video181.png
../marketimg/video182.png
../marketimg/video183.png
../marketimg/video184.png
../marketimg/video185.png
../marketimg/video186.png
../marketimg/video187.png
../marketimg/video188.png
../marketimg/video189.png
../marketimg/video190.png
../marketimg/video191.png
../marketimg/video192.png
../marketimg/video193.png
../marketimg/video194.png
../marketimg/video195.png
../marketimg/video196.png
../marketimg/video197.png
../marketimg/video198.png
../marketimg/video199.png
../marketimg/video200.png
../marketimg/video201.png
../marketimg/video202.png
../marketimg/video203.png
../marketimg/video204.png
../marketimg/video205.png
../marketimg/video206.png
../marketimg/video207.png
../marketimg/video208.png
../marketimg/video209.png
../marketimg/video210.png
../marketimg/video211.png
../marketimg/video212.png
../marketimg/video213.png
../marketimg/video214.png
../marketimg/video215.png
../marketimg/video216.png
../marketimg/video217.png
../marketimg/video218.png
../marketimg/video219.png
../marketimg/video220.png
../marketimg/video221.png
../marketimg/video222.png
../marketimg/video223.png
../marketimg/video224.png
../marketimg/video225.png
../marketimg/video226.png
../marketimg/video227.png
../marketimg/video228.png
../marketimg/video229.png
../marketimg/video230.png
../marketimg/video231.png
../marketimg/video232.png
../marketimg/video233.png
../marketimg/video234.png
../marketimg/video235.png
../marketimg/video236.png
../marketimg/video237.png
../marketimg/video238.png
../marketimg/video239.png
../marketimg/video240.png
../marketimg/video241.png
../marketimg/video242.png
../marketimg/video243.png
../marketimg/video244.png
../marketimg/video245.png
../marketimg/video246.png
../marketimg/video247.png
../marketimg/video248.png
../marketimg/video249.png
../marketimg/video250.png
../marketimg/video251.png
../marketimg/video252.png
../marketimg/video253.png
../marketimg/video254.png
../marketimg/video255.png
../marketimg/video256.png
../marketimg/video257.png
../marketimg/video258.png
../marketimg/video259.png
../marketimg/video260.png
../marketimg/video261.png
../marketimg/video262.png
../marketimg/video263.png
../marketimg/video264.png
../marketimg/video265.png
../marketimg/video266.png
../marketimg/video267.png
../marketimg/video268.png
../marketimg/video269.png
../marketimg/video270.png
../marketimg/video271.png
../marketimg/video272.png
../marketimg/video273.png
../marketimg/video274.png
../marketimg/video275.png
../marketimg/video276.png
../marketimg/video277.png
../marketimg/video278.png
../marketimg/video279.png
../marketimg/video280.png
../marketimg/video281.png
../marketimg/video282.png
../marketimg/video283.png
../marketimg/video284.png
../marketimg/video285.png
../marketimg/video286.png
../marketimg/video287.png
../marketimg/video288.png
../marketimg/video289.png
../marketimg/video290.png
../marketimg/video291.png
../marketimg/video292.png
../marketimg/video293.png
../marketimg/video294.png
../marketimg/video295.png
../marketimg/video296.png
../marketimg/video297.png
../marketimg/video298.png
../marketimg/video299.png
../marketimg/video300.png

      
     `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
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
      end: `600% top`,
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
    end: `600% top`,
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