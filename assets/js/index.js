// let carousel = document.querySelector("#cstm-carousel-btn").children;
// let carouselContent = document.querySelector("#cstm-carousel-content").children;
// console.log(carousel)
// let hostName = window.location.hostname;
// Array.from(carousel).forEach(element=>{
//     element.addEventListener("click",changeImage);
// })
// function changeImage(e){
//     let clickedButton = e.target;
//     let id = clickedButton.getAttribute("class");
//     Array.from(carouselContent).forEach(e=>{
//         if(e.style.display == "block"){
//             e.style.display="none";
//         }else{
//             if(id == e.getAttribute("id") && id == "one"){
//                 e.style.display="block";
//                 document.getElementById("cstm-carousel-image").style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(${hostName}assets/images/hero-influencers1.png)`;
//             }else if(id == e.getAttribute("id") && id == "two"){
//                 document.getElementById("cstm-carousel-image").style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(${hostName}assets/images/hero-4.png)`;
//                 e.style.display="block";
//             }else if(id == e.getAttribute("id") && id == "three"){
//                 document.getElementById("cstm-carousel-image").style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(${hostName}assets/images/hero-hackathon.png)`;
//                 e.style.display="block";
//             }
//         }
//     })
// }

$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:1,
          // nav:true
      },
      600:{
          items:2,
          // nav:false
      },
      1000:{
          items:4,
      }
    }
});


});

