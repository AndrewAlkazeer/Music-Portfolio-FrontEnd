import { mobile } from './mobile.js';
window.onload = ()=>{

mobile();
var aboutPageBtn = document.querySelector('.about-page-cont button');
var orange = document.querySelector('.coral');
var lightBlue = document.querySelector('.lightblue');
var lightGreen = document.querySelector('.lightgreen');
var red = document.querySelector('.red');
var purple = document.querySelector('.purple');
//Nav
var about = document.querySelector('nav ul li:nth-child(1) a');
var work = document.querySelector('nav ul li:nth-child(2) a');
var services = document.querySelector('nav ul li:nth-child(3) a');
var contact = document.querySelector('nav ul li:nth-child(4) a');
var title = document.querySelector('.about-page-cont span');
// Nav - Social Media
var sMedia = document.querySelectorAll('.social-media-cont i');
// Project Buttons
var projectBtn = document.querySelectorAll('.projects-cont button');
var projectTitle = document.querySelectorAll('.projects-cont h1');
// Services page
var servicesCont = document.querySelectorAll('.service-cont');
var barD = document.querySelectorAll('.barD');
var dividerBar = document.querySelectorAll('.divider');
var serviceI = document.querySelectorAll('.service i');
var bar = document.querySelectorAll('.bar');
var serviceTitle = document.querySelectorAll('.service h1');
// Lets Talk Section
var talkBtn = document.querySelector('.talk-section-cont button');
var talkBlock1 = document.querySelector('.talk-section-cont button .block-1');
// Visitors List
var globeI = document.querySelector('.visitors-menu-cont i');
var visitorsCount = document.querySelectorAll('.visitors-count');
// Nav Elements
var nav = document.querySelector('nav');
var navSvg = document.querySelector('nav svg');
var navSvgR7 = document.querySelector('nav svg #Rectangle_7');
var footSvg = document.querySelector('footer svg #Rectangle_7');
var navA = document.querySelectorAll('nav ul li a');
// 4 page locations
var page1 = document.querySelector("#about-page-cont");
var page2 = document.querySelector("#page-2");
var page3 = document.querySelector("#page-3");
var page4 = document.querySelector("#page-4");
// Nav Desktop Elements
var about = document.querySelector("#about");
var work = document.querySelector("#work");
var services = document.querySelector("#services");
var contact = document.querySelector("#contact");
// Contact elements
var contactP = document.querySelectorAll(".contact p");
var contactBtn = document.querySelector(".contact button");
// Music Equalizer
var musicEQ = document.querySelectorAll(".music-eq");
var music = document.querySelector("audio");
var mainEQ = document.querySelector(".music-equalizer-cont");
var isPlaying = true;
// Turn on and off the interval function to run the Music Equalizer
var playEQ;
// Play Music automaticaly when page loads

setTimeout(()=>{
    music.load();
    music.play();
    music.volume = 0.1;
    playEQ = setInterval(startEQ, 100);
}, 300);


function startEQ(){
    for(var i = 0; i < musicEQ.length; i++){
        var rand = Math.floor(Math.random()*100);
        musicEQ[i].style.height = `${rand}%`;
    }
}

mainEQ.addEventListener("click", ()=>{

// Set interval randomly selected height between 1 and 100 with for loop

if(isPlaying){
    isPlaying = false;
    music.pause();
    clearInterval(playEQ);
    setTimeout(()=>{
        for(var i = 0; i < musicEQ.length; i++){
            musicEQ[i].style.height = "0px";
        }
    }, 3000);
} else if(!isPlaying){
    isPlaying = true;
    playEQ = setInterval(startEQ, 100);
    music.play();
}
})

// Nav Mobile elements
var navMobileA = document.querySelectorAll(".nav-btns-cont ul li a");
var navMobileI = document.querySelectorAll(".social-media-cont-mobile i");
var navMobileHiddenM = document.querySelector(".mobile-collapse-menu");
// Looping through Nav Mobile A and I Elements to change the color
for(var i=0; i < navMobileA.length; i++){
    navMobileA[i].setAttribute("color-theme", "red");
    navMobileI[i].setAttribute("color-theme", "red");
    /*
    navMobileA[i].addEventListener("click", ()=>{
        navMobileHiddenM.style.left = "100%";
    })
    */
}

// 1
navMobileI[0].addEventListener("mouseover", ()=>{
    navMobileI[0].style.background = "#dd2020";
    navMobileI[0].style.color = "#fff";
    navMobileI[0].style.border = "1px solid #dd2020";
   })

   navMobileI[0].addEventListener("mouseleave", ()=>{
    navMobileI[0].style.background = "none";
    navMobileI[0].style.color = "#dd2020";
    navMobileI[0].style.border = "1px solid grey";
   })
// 2
navMobileI[1].addEventListener("mouseover", ()=>{
    navMobileI[1].style.background = "#dd2020";
    navMobileI[1].style.color = "#fff";
    navMobileI[1].style.border = "1px solid #dd2020";
   })

   navMobileI[1].addEventListener("mouseleave", ()=>{
    navMobileI[1].style.background = "none";
    navMobileI[1].style.color = "#dd2020";
    navMobileI[1].style.border = "1px solid grey";
   })
// 3
navMobileI[2].addEventListener("mouseover", ()=>{
    navMobileI[2].style.background = "#dd2020";
    navMobileI[2].style.color = "#fff";
    navMobileI[2].style.border = "1px solid #dd2020";
   })

   navMobileI[2].addEventListener("mouseleave", ()=>{
    navMobileI[2].style.background = "none";
    navMobileI[2].style.color = "#dd2020";
    navMobileI[2].style.border = "1px solid grey";
   })
// 4
navMobileI[3].addEventListener("mouseover", ()=>{
    navMobileI[3].style.background = "#dd2020";
    navMobileI[3].style.color = "#fff";
    navMobileI[3].style.border = "1px solid #dd2020";
   })

   navMobileI[3].addEventListener("mouseleave", ()=>{
    navMobileI[3].style.background = "none";
    navMobileI[3].style.color = "#dd2020";
    navMobileI[3].style.border = "1px solid grey";
   })

// Nav change on page scroll
// Change Nav A color based on the scrollY Position
window.addEventListener("scroll", ()=>{
   // Nav Change color and height based on scroll
    if(window.scrollY >= 169){
      nav.style.height = "5vh";
      nav.style.background = "white";
      navSvg.style.height = "100%";
    }
    if (window.scrollY < 169){
      nav.style.height = "11vh";
      nav.style.background = "transparent";
      navSvg.style.height = "50%";
    }
    // -------------------------------------

// PROBLEM HERE TRYING TO FIGUE WHERE THE SCROLL FUNCITON TO FIRE UP

// from start to work page - 200
    if(window.scrollY < page2.offsetTop-200 && window.scrollY < page2.offsetTop-200){
   for(var i = 0; i < navA.length; i++){
    navA[i].setAttribute("color-theme", "black");
}
about.setAttribute("color-theme", "red");
    }
//  from work page2 -200 and less than services page4
    if(window.scrollY >= page2.offsetTop-200 && window.scrollY < page3.offsetTop-200){
        for(var i = 0; i < navA.length; i++){
         navA[i].setAttribute("color-theme", "black"); 
     }
     work.setAttribute("color-theme", "red");
         }
//  from services page3 -200 and less than contact page4
    if(window.scrollY >= page3.offsetTop-200 && window.scrollY < page4.offsetTop-200){
        for(var i = 0; i < navA.length; i++){
         navA[i].setAttribute("color-theme", "black"); 
     }
     services.setAttribute("color-theme", "red");
         }
//  from services page3 -200 and less than contact page4
if(window.scrollY >= page4.offsetTop-200){
    for(var i = 0; i < navA.length; i++){
     navA[i].setAttribute("color-theme", "black"); 
 }
 contact.setAttribute("color-theme", "red");
     }
})

about.addEventListener("mouseover", ()=>{
        about.style.color = "#dd2020";
    })
    about.addEventListener("mouseleave", ()=>{
        about.style.color = "";
    })

    work.addEventListener("mouseover", ()=>{
        work.style.color = "#dd2020";
    })
    work.addEventListener("mouseleave", ()=>{
        work.style.color = "";
    })

    services.addEventListener("mouseover", ()=>{
        services.style.color = "#dd2020";
    })
    services.addEventListener("mouseleave", ()=>{
        services.style.color = "";
    })

    contact.addEventListener("mouseover", ()=>{
        contact.style.color = "#dd2020";
    })
    contact.addEventListener("mouseleave", ()=>{
        contact.style.color = "";
    })

// Color Change On Hover
// Orange
orange.addEventListener('click', ()=>{

    for(var color = 0; color < visitorsCount.length ; color++){
        visitorsCount[color].setAttribute("color-theme", "orange");
    }
    globeI.setAttribute("color-theme", "orange");

// Looping through Nav Mobile A and I Elements to change the color
for(var i=0; i < navMobileA.length; i++){
    navMobileA[i].setAttribute("color-theme", "orange");
    navMobileI[i].style.color = "#f89d36";
}

// 1
navMobileI[0].addEventListener("mouseover", ()=>{
    navMobileI[0].style.background = "#f89d36";
    navMobileI[0].style.color = "#fff";
    navMobileI[0].style.border = "1px solid #f89d36";
    navMobileI[0].removeAttribute("color-theme");
   })

   navMobileI[0].addEventListener("mouseleave", ()=>{
    navMobileI[0].style.background = "none";
    navMobileI[0].style.color = "#f89d36";
    navMobileI[0].style.border = "1px solid grey";
   })
// 2
navMobileI[1].addEventListener("mouseover", ()=>{
    navMobileI[1].style.background = "#f89d36";
    navMobileI[1].style.color = "#fff";
    navMobileI[1].style.border = "1px solid #f89d36";
    navMobileI[0].removeAttribute("color-theme");
   })

   navMobileI[1].addEventListener("mouseleave", ()=>{
    navMobileI[1].style.background = "none";
    navMobileI[1].style.color = "#f89d36";
    navMobileI[1].style.border = "1px solid grey";
   })
// 3
navMobileI[2].addEventListener("mouseover", ()=>{
    navMobileI[2].style.background = "#f89d36";
    navMobileI[2].style.color = "#fff";
    navMobileI[2].style.border = "1px solid #f89d36";
    navMobileI[0].removeAttribute("color-theme");
   })

   navMobileI[2].addEventListener("mouseleave", ()=>{
    navMobileI[2].style.background = "none";
    navMobileI[2].style.color = "#f89d36";
    navMobileI[2].style.border = "1px solid grey";
   })
// 4
navMobileI[3].addEventListener("mouseover", ()=>{
    navMobileI[3].style.background = "#f89d36";
    navMobileI[3].style.color = "#fff";
    navMobileI[3].style.border = "1px solid #f89d36";
    navMobileI[0].removeAttribute("color-theme");
   })

   navMobileI[3].addEventListener("mouseleave", ()=>{
    navMobileI[3].style.background = "none";
    navMobileI[3].style.color = "#f89d36";
    navMobileI[3].style.border = "1px solid grey";
   })

// Change SVG fill color based on current theme
navSvgR7.setAttribute("svg-color-change", "orange");
footSvg.setAttribute("svg-color-change", "orange");

// Change Nav A color based on the scrollY Position
window.addEventListener("scroll", ()=>{
    
// -------------------------------------
 
 // from start to work page - 200
     if(window.scrollY < page2.offsetTop-200 && window.scrollY < page2.offsetTop-200){
    for(var i = 0; i < navA.length; i++){
     navA[i].setAttribute("color-theme", "black"); 
 }
 about.setAttribute("color-theme", "orange");
     }
 //  from work page2 -200 and less than services page4
     if(window.scrollY >= page2.offsetTop-200 && window.scrollY < page3.offsetTop-200){
         for(var i = 0; i < navA.length; i++){
          navA[i].setAttribute("color-theme", "black"); 
      }
      work.setAttribute("color-theme", "orange");
          }
 //  from services page3 -200 and less than contact page4
     if(window.scrollY >= page3.offsetTop-200 && window.scrollY < page4.offsetTop-200){
         for(var i = 0; i < navA.length; i++){
          navA[i].setAttribute("color-theme", "black"); 
      }
      services.setAttribute("color-theme", "orange");
          }
 //  from services page3 -200 and less than contact page4
 if(window.scrollY >= page4.offsetTop-200){
     for(var i = 0; i < navA.length; i++){
      navA[i].setAttribute("color-theme", "black"); 
  }
  contact.setAttribute("color-theme", "orange");
      }
 })

// HERE

   for(var i = 0; i<sMedia.length; i++){
       sMedia[i].style.color = "#f89d36";
   }
// 1
   sMedia[0].addEventListener("mouseover", ()=>{
    sMedia[0].style.background = "#f89d36";
    sMedia[0].style.color = "#fff";
    sMedia[0].style.border = "1px solid #f89d36";
   })

   sMedia[0].addEventListener("mouseleave", ()=>{
    sMedia[0].style.background = "none";
    sMedia[0].style.color = "#f89d36";
    sMedia[0].style.border = "1px solid grey";
   })
// 2
   sMedia[1].addEventListener("mouseover", ()=>{
    sMedia[1].style.background = "#f89d36";
    sMedia[1].style.color = "#fff";
    sMedia[1].style.border = "1px solid #f89d36";
   })

   sMedia[1].addEventListener("mouseleave", ()=>{
    sMedia[1].style.background = "none";
    sMedia[1].style.color = "#f89d36";
    sMedia[1].style.border = "1px solid grey";
   })
// 3
sMedia[2].addEventListener("mouseover", ()=>{
    sMedia[2].style.background = "#f89d36";
    sMedia[2].style.color = "#fff";
    sMedia[2].style.border = "1px solid #f89d36";
   })

   sMedia[2].addEventListener("mouseleave", ()=>{
    sMedia[2].style.background = "none";
    sMedia[2].style.color = "#f89d36";
    sMedia[2].style.border = "1px solid grey";
   })
// 4
sMedia[3].addEventListener("mouseover", ()=>{
    sMedia[3].style.background = "#f89d36";
    sMedia[3].style.color = "#fff";
    sMedia[3].style.border = "1px solid #f89d36";
   })

   sMedia[3].addEventListener("mouseleave", ()=>{
    sMedia[3].style.background = "none";
    sMedia[3].style.color = "#f89d36";
    sMedia[3].style.border = "1px solid grey";
   })

    about.setAttribute("color-theme", "orange");   // construction here
    title.style.color = "#f89d36";
    aboutPageBtn.style.border = "1px solid #f89d36";
    aboutPageBtn.style.color = "#f89d36";
    
    about.addEventListener("mouseover", ()=>{
    about.style.color = "#f89d36";
    })
    about.addEventListener("mouseleave", ()=>{
        about.style.color = "";
    })
    work.addEventListener("mouseover", ()=>{
        work.style.color = "#f89d36";
    })
    work.addEventListener("mouseleave", ()=>{
        work.style.color = "";
    })
    services.addEventListener("mouseover", ()=>{
        services.style.color = "#f89d36";
    })
    services.addEventListener("mouseleave", ()=>{
        services.style.color = "";
    })

    contact.addEventListener("mouseover", ()=>{
        contact.style.color = "#f89d36";
    })
    contact.addEventListener("mouseleave", ()=>{
        contact.style.color = "";
    })

    aboutPageBtn.addEventListener("mouseover", ()=>{
        aboutPageBtn.style.background = "#f89d36";
        aboutPageBtn.style.color = "#fff";
    })
    aboutPageBtn.addEventListener("mouseleave", ()=>{
        aboutPageBtn.style.background = "none";
        aboutPageBtn.style.color = "#f89d36";
    })
    for(var j = 0; j < projectBtn.length; j++){
        projectBtn[j].setAttribute("btn-hover-color", "orange")
    }
    for(var c = 0; c<projectTitle.length; c++){
        projectTitle[c].setAttribute("color-theme", "orange");
    }
    for(var b = 0; b < barD.length; b++){
        barD[b].setAttribute("bg-color-theme", "orange");
        dividerBar[b].setAttribute("bg-color-theme", "orange");
    }
    for(var v = 0; v < serviceI.length; v++){
    serviceI[v].setAttribute("color-theme", "orange");
    bar[v].setAttribute("bg-color-theme", "orange");
    }
    /*
    for(var o = 0; o < serviceTitle.length; o++){
        serviceTitle[o].addEventListener('mouseover', ()=>{
           // console.log(serviceTitle[0].id);
            if(serviceTitle[o].id == "s1"){
                serviceTitle[0].style.color = "#f89d36";
            } if(serviceTitle[o].id == "s2"){
                serviceTitle[1].style.color = "#f89d36";
            } if(serviceTitle[o].id == "s3"){
                serviceTitle[2].style.color = "#f89d36";
            } if(serviceTitle[o].id == "s4"){
                serviceTitle[3].style.color = "#f89d36";
            } if(serviceTitle[o].id == "s5"){
                serviceTitle[4].style.color = "#f89d36";
            }if(serviceTitle[o].id == "s6"){
                serviceTitle[5].style.color = "#f89d36";
            }
        })
    }
    */
   /* Change services title color on hover */
    servicesCont.forEach(item =>{
        var child = item.children;

        if(child.item(2).id == "s1"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#f89d36";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s2"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#f89d36";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s3"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#f89d36";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s4"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#f89d36";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s5"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#f89d36";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s6"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#f89d36";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
    })
    talkBtn.setAttribute("color-theme", "orange");
    talkBlock1.setAttribute("bg-color-theme", "orange");

    for(var g=0; g < contactP.length; g++){
        contactP[g].setAttribute("color-theme", "orange");
    }
    contactBtn.setAttribute("bg-color-theme", "orange");
})

// Light Blue

lightBlue.addEventListener('click', ()=>{

    for(var color = 0; color < visitorsCount.length ; color++){
        visitorsCount[color].setAttribute("color-theme", "lightblue");
    }
    globeI.setAttribute("color-theme", "lightblue");

// Looping through Nav Mobile A and I Elements to change the color
for(var i=0; i < navMobileA.length; i++){
    navMobileA[i].setAttribute("color-theme", "lightblue");
    navMobileI[i].style.color = "#2d84fb";
}

// 1
navMobileI[0].addEventListener("mouseover", ()=>{
    navMobileI[0].style.background = "#2d84fb";
    navMobileI[0].style.color = "#fff";
    navMobileI[0].style.border = "1px solid #2d84fb";
   })

   navMobileI[0].addEventListener("mouseleave", ()=>{
    navMobileI[0].style.background = "none";
    navMobileI[0].style.color = "#2d84fb";
    navMobileI[0].style.border = "1px solid grey";
   })
// 2
navMobileI[1].addEventListener("mouseover", ()=>{
    navMobileI[1].style.background = "#2d84fb";
    navMobileI[1].style.color = "#fff";
    navMobileI[1].style.border = "1px solid #2d84fb";
   })

   navMobileI[1].addEventListener("mouseleave", ()=>{
    navMobileI[1].style.background = "none";
    navMobileI[1].style.color = "#2d84fb";
    navMobileI[1].style.border = "1px solid grey";
   })
// 3
navMobileI[2].addEventListener("mouseover", ()=>{
    navMobileI[2].style.background = "#2d84fb";
    navMobileI[2].style.color = "#fff";
    navMobileI[2].style.border = "1px solid #2d84fb";
   })

   navMobileI[2].addEventListener("mouseleave", ()=>{
    navMobileI[2].style.background = "none";
    navMobileI[2].style.color = "#2d84fb";
    navMobileI[2].style.border = "1px solid grey";
   })
// 4
navMobileI[3].addEventListener("mouseover", ()=>{
    navMobileI[3].style.background = "#2d84fb";
    navMobileI[3].style.color = "#fff";
    navMobileI[3].style.border = "1px solid #2d84fb";
   })

   navMobileI[3].addEventListener("mouseleave", ()=>{
    navMobileI[3].style.background = "none";
    navMobileI[3].style.color = "#2d84fb";
    navMobileI[3].style.border = "1px solid grey";
   })

    // Change SVG fill color based on current theme
navSvgR7.setAttribute("svg-color-change", "lightblue");
footSvg.setAttribute("svg-color-change", "lightblue");

    // Change Nav A color based on the scrollY Position
window.addEventListener("scroll", ()=>{
    
    // -------------------------------------
     
     // from start to work page - 200
         if(window.scrollY < page2.offsetTop-200 && window.scrollY < page2.offsetTop-200){
        for(var i = 0; i < navA.length; i++){
         navA[i].setAttribute("color-theme", "black"); 
     }
     about.setAttribute("color-theme", "lightblue");
         }
     //  from work page2 -200 and less than services page4
         if(window.scrollY >= page2.offsetTop-200 && window.scrollY < page3.offsetTop-200){
             for(var i = 0; i < navA.length; i++){
              navA[i].setAttribute("color-theme", "black"); 
          }
          work.setAttribute("color-theme", "lightblue");
              }
     //  from services page3 -200 and less than contact page4
         if(window.scrollY >= page3.offsetTop-200 && window.scrollY < page4.offsetTop-200){
             for(var i = 0; i < navA.length; i++){
              navA[i].setAttribute("color-theme", "black"); 
          }
          services.setAttribute("color-theme", "lightblue");
              }
     //  from services page3 -200 and less than contact page4
     if(window.scrollY >= page4.offsetTop-200){
         for(var i = 0; i < navA.length; i++){
          navA[i].setAttribute("color-theme", "black"); 
      }
      contact.setAttribute("color-theme", "lightblue");
          }
     })

    for(var i = 0; i<sMedia.length; i++){
        sMedia[i].style.color = "#2d84fb";
    }
 // 1
    sMedia[0].addEventListener("mouseover", ()=>{
     sMedia[0].style.background = "#2d84fb";
     sMedia[0].style.color = "#fff";
     sMedia[0].style.border = "1px solid #2d84fb";
    })
 
    sMedia[0].addEventListener("mouseleave", ()=>{
     sMedia[0].style.background = "none";
     sMedia[0].style.color = "#2d84fb";
     sMedia[0].style.border = "1px solid grey";
    })
 // 2
    sMedia[1].addEventListener("mouseover", ()=>{
     sMedia[1].style.background = "#2d84fb";
     sMedia[1].style.color = "#fff";
     sMedia[1].style.border = "1px solid #2d84fb";
    })
 
    sMedia[1].addEventListener("mouseleave", ()=>{
     sMedia[1].style.background = "none";
     sMedia[1].style.color = "#2d84fb";
     sMedia[1].style.border = "1px solid grey";
    })
 // 3
 sMedia[2].addEventListener("mouseover", ()=>{
     sMedia[2].style.background = "#2d84fb";
     sMedia[2].style.color = "#fff";
     sMedia[2].style.border = "1px solid #2d84fb";
    })
 
    sMedia[2].addEventListener("mouseleave", ()=>{
     sMedia[2].style.background = "none";
     sMedia[2].style.color = "#2d84fb";
     sMedia[2].style.border = "1px solid grey";
    })
 // 4
 sMedia[3].addEventListener("mouseover", ()=>{
     sMedia[3].style.background = "#2d84fb";
     sMedia[3].style.color = "#fff";
     sMedia[3].style.border = "1px solid #2d84fb";
    })
 
    sMedia[3].addEventListener("mouseleave", ()=>{
     sMedia[3].style.background = "none";
     sMedia[3].style.color = "#2d84fb";
     sMedia[3].style.border = "1px solid grey";
    })

    about.setAttribute("color-theme", "lightblue");
    title.style.color = "#2d84fb";
    aboutPageBtn.style.border = "1px solid #2d84fb";
    aboutPageBtn.style.color = "#2d84fb";
    
    about.addEventListener("mouseover", ()=>{
        about.style.color = "#2d84fb";
    })
    about.addEventListener("mouseleave", ()=>{
        about.style.color = "";
    })

    work.addEventListener("mouseover", ()=>{
        work.style.color = "#2d84fb";
    })
    work.addEventListener("mouseleave", ()=>{
        work.style.color = "";
    })

    services.addEventListener("mouseover", ()=>{
        services.style.color = "#2d84fb";
    })
    services.addEventListener("mouseleave", ()=>{
        services.style.color = "";
    })

    contact.addEventListener("mouseover", ()=>{
        contact.style.color = "#2d84fb";
    })
    contact.addEventListener("mouseleave", ()=>{
        contact.style.color = "";
    })

    aboutPageBtn.addEventListener("mouseover", ()=>{
        aboutPageBtn.style.background = "#2d84fb";
        aboutPageBtn.style.color = "#fff";
    })
    aboutPageBtn.addEventListener("mouseleave", ()=>{
        aboutPageBtn.style.background = "none";
        aboutPageBtn.style.color = "#2d84fb";
    })
    for(var j = 0; j < projectBtn.length; j++){
        projectBtn[j].setAttribute("btn-hover-color", "lightblue")
    }
    for(var c = 0; c<projectTitle.length; c++){
        projectTitle[c].setAttribute("color-theme", "lightblue");
    }
    for(var b = 0; b < barD.length; b++){
        barD[b].setAttribute("bg-color-theme", "lightblue");
        dividerBar[b].setAttribute("bg-color-theme", "lightblue");
    }
    for(var v = 0; v < serviceI.length; v++){
    serviceI[v].setAttribute("color-theme", "lightblue");
    bar[v].setAttribute("bg-color-theme", "lightblue");
    }
    /* Change services title color on hover */
    servicesCont.forEach(item =>{
        var child = item.children;

        if(child.item(2).id == "s1"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#2d84fb";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s2"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#2d84fb";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s3"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#2d84fb";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s4"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#2d84fb";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s5"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#2d84fb";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s6"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#2d84fb";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
    })
    talkBtn.setAttribute("color-theme", "lightblue");
    talkBlock1.setAttribute("bg-color-theme", "lightblue");

    for(var g=0; g < contactP.length; g++){
        contactP[g].setAttribute("color-theme", "lightblue");
    }
    contactBtn.setAttribute("bg-color-theme", "lightblue");
})

// Light Green

lightGreen.addEventListener('click', ()=>{

    for(var color = 0; color < visitorsCount.length ; color++){
        visitorsCount[color].setAttribute("color-theme", "lightgreen");
    }
    globeI.setAttribute("color-theme", "lightgreen");

// Looping through Nav Mobile A and I Elements to change the color
for(var i=0; i < navMobileA.length; i++){
    navMobileA[i].setAttribute("color-theme", "lightgreen");
    navMobileI[i].style.color = "#67c56e";
}

// 1
navMobileI[0].addEventListener("mouseover", ()=>{
    navMobileI[0].style.background = "#67c56e";
    navMobileI[0].style.color = "#fff";
    navMobileI[0].style.border = "1px solid #67c56e";
   })

   navMobileI[0].addEventListener("mouseleave", ()=>{
    navMobileI[0].style.background = "none";
    navMobileI[0].style.color = "#67c56e";
    navMobileI[0].style.border = "1px solid grey";
   })
// 2
navMobileI[1].addEventListener("mouseover", ()=>{
    navMobileI[1].style.background = "#67c56e";
    navMobileI[1].style.color = "#fff";
    navMobileI[1].style.border = "1px solid #67c56e";
   })

   navMobileI[1].addEventListener("mouseleave", ()=>{
    navMobileI[1].style.background = "none";
    navMobileI[1].style.color = "#67c56e";
    navMobileI[1].style.border = "1px solid grey";
   })
// 3
navMobileI[2].addEventListener("mouseover", ()=>{
    navMobileI[2].style.background = "#67c56e";
    navMobileI[2].style.color = "#fff";
    navMobileI[2].style.border = "1px solid #67c56e";
   })

   navMobileI[2].addEventListener("mouseleave", ()=>{
    navMobileI[2].style.background = "none";
    navMobileI[2].style.color = "#67c56e";
    navMobileI[2].style.border = "1px solid grey";
   })
// 4
navMobileI[3].addEventListener("mouseover", ()=>{
    navMobileI[3].style.background = "#67c56e";
    navMobileI[3].style.color = "#fff";
    navMobileI[3].style.border = "1px solid #67c56e";
   })

   navMobileI[3].addEventListener("mouseleave", ()=>{
    navMobileI[3].style.background = "none";
    navMobileI[3].style.color = "#67c56e";
    navMobileI[3].style.border = "1px solid grey";
   })    

// Change SVG fill color based on current theme
navSvgR7.setAttribute("svg-color-change", "lightgreen");
footSvg.setAttribute("svg-color-change", "lightgreen");

        // Change Nav A color based on the scrollY Position
window.addEventListener("scroll", ()=>{
    
    // -------------------------------------
     
     // from start to work page - 200
         if(window.scrollY < page2.offsetTop-200 && window.scrollY < page2.offsetTop-200){
        for(var i = 0; i < navA.length; i++){
         navA[i].setAttribute("color-theme", "black"); 
     }
     about.setAttribute("color-theme", "lightgreen");
         }
     //  from work page2 -200 and less than services page4
         if(window.scrollY >= page2.offsetTop-200 && window.scrollY < page3.offsetTop-200){
             for(var i = 0; i < navA.length; i++){
              navA[i].setAttribute("color-theme", "black"); 
          }
          work.setAttribute("color-theme", "lightgreen");
              }
     //  from services page3 -200 and less than contact page4
         if(window.scrollY >= page3.offsetTop-200 && window.scrollY < page4.offsetTop-200){
             for(var i = 0; i < navA.length; i++){
              navA[i].setAttribute("color-theme", "black"); 
          }
          services.setAttribute("color-theme", "lightgreen");
              }
     //  from services page3 -200 and less than contact page4
     if(window.scrollY >= page4.offsetTop-200){
         for(var i = 0; i < navA.length; i++){
          navA[i].setAttribute("color-theme", "black"); 
      }
      contact.setAttribute("color-theme", "lightgreen");
          }
     })

    for(var i = 0; i<sMedia.length; i++){
        sMedia[i].style.color = "#67c56e";
    }
 // 1
    sMedia[0].addEventListener("mouseover", ()=>{
     sMedia[0].style.background = "#67c56e";
     sMedia[0].style.color = "#fff";
     sMedia[0].style.border = "1px solid #67c56e";
    })
 
    sMedia[0].addEventListener("mouseleave", ()=>{
     sMedia[0].style.background = "none";
     sMedia[0].style.color = "#67c56e";
     sMedia[0].style.border = "1px solid grey";
    })
 // 2
    sMedia[1].addEventListener("mouseover", ()=>{
     sMedia[1].style.background = "#67c56e";
     sMedia[1].style.color = "#fff";
     sMedia[1].style.border = "1px solid #67c56e";
    })
 
    sMedia[1].addEventListener("mouseleave", ()=>{
     sMedia[1].style.background = "none";
     sMedia[1].style.color = "#67c56e";
     sMedia[1].style.border = "1px solid grey";
    })
 // 3
 sMedia[2].addEventListener("mouseover", ()=>{
     sMedia[2].style.background = "#67c56e";
     sMedia[2].style.color = "#fff";
     sMedia[2].style.border = "1px solid #67c56e";
    })
 
    sMedia[2].addEventListener("mouseleave", ()=>{
     sMedia[2].style.background = "none";
     sMedia[2].style.color = "#67c56e";
     sMedia[2].style.border = "1px solid grey";
    })
 // 4
 sMedia[3].addEventListener("mouseover", ()=>{
     sMedia[3].style.background = "#67c56e";
     sMedia[3].style.color = "#fff";
     sMedia[3].style.border = "1px solid #67c56e";
    })
 
    sMedia[3].addEventListener("mouseleave", ()=>{
     sMedia[3].style.background = "none";
     sMedia[3].style.color = "#67c56e";
     sMedia[3].style.border = "1px solid grey";
    })

    about.setAttribute("color-theme", "lightgreen");
    title.style.color = "#67c56e";
    aboutPageBtn.style.border = "1px solid #67c56e";
    aboutPageBtn.style.color = "#67c56e";
    
    about.addEventListener("mouseover", ()=>{
        about.style.color = "#67c56e";
    })
    about.addEventListener("mouseleave", ()=>{
        about.style.color = "";
    })

    work.addEventListener("mouseover", ()=>{
        work.style.color = "#67c56e";
    })
    work.addEventListener("mouseleave", ()=>{
        work.style.color = "";
    })

    services.addEventListener("mouseover", ()=>{
        services.style.color = "#67c56e";
    })
    services.addEventListener("mouseleave", ()=>{
        services.style.color = "";
    })

    contact.addEventListener("mouseover", ()=>{
        contact.style.color = "#67c56e";
    })
    contact.addEventListener("mouseleave", ()=>{
        contact.style.color = "";
    })

    aboutPageBtn.addEventListener("mouseover", ()=>{
        aboutPageBtn.style.background = "#67c56e";
        aboutPageBtn.style.color = "#fff";
    })
    aboutPageBtn.addEventListener("mouseleave", ()=>{
        aboutPageBtn.style.background = "none";
        aboutPageBtn.style.color = "#67c56e";
    })
    for(var j = 0; j < projectBtn.length; j++){
        projectBtn[j].setAttribute("btn-hover-color", "lightgreen")
    }
    for(var c = 0; c<projectTitle.length; c++){
        projectTitle[c].setAttribute("color-theme", "lightgreen");
    }
    for(var b = 0; b < barD.length; b++){
        barD[b].setAttribute("bg-color-theme", "lightgreen");
        dividerBar[b].setAttribute("bg-color-theme", "lightgreen");
    }
    for(var v = 0; v < serviceI.length; v++){
    serviceI[v].setAttribute("color-theme", "lightgreen");
    bar[v].setAttribute("bg-color-theme", "lightgreen");
    }
    /* Change services title color on hover */
    servicesCont.forEach(item =>{
        var child = item.children;

        if(child.item(2).id == "s1"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#67c56e";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s2"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#67c56e";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s3"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#67c56e";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s4"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#67c56e";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s5"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#67c56e";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s6"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#67c56e";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
    })
    talkBtn.setAttribute("color-theme", "lightgreen");
    talkBlock1.setAttribute("bg-color-theme", "lightgreen");

    for(var g=0; g < contactP.length; g++){
        contactP[g].setAttribute("color-theme", "lightgreen");
    }
    contactBtn.setAttribute("bg-color-theme", "lightgreen");
})

// Red

red.addEventListener('click', ()=>{

    for(var color = 0; color < visitorsCount.length ; color++){
        visitorsCount[color].setAttribute("color-theme", "red");
    }
    globeI.setAttribute("color-theme", "red");

// Looping through Nav Mobile A and I Elements to change the color
for(var i=0; i < navMobileA.length; i++){
    navMobileA[i].setAttribute("color-theme", "red");
    navMobileI[i].style.color = "#dd2020";
}

// 1
navMobileI[0].addEventListener("mouseover", ()=>{
    navMobileI[0].style.background = "#dd2020";
    navMobileI[0].style.color = "#fff";
    navMobileI[0].style.border = "1px solid #dd2020";
   })

   navMobileI[0].addEventListener("mouseleave", ()=>{
    navMobileI[0].style.background = "none";
    navMobileI[0].style.color = "#dd2020";
    navMobileI[0].style.border = "1px solid grey";
   })
// 2
navMobileI[1].addEventListener("mouseover", ()=>{
    navMobileI[1].style.background = "#dd2020";
    navMobileI[1].style.color = "#fff";
    navMobileI[1].style.border = "1px solid #dd2020";
   })

   navMobileI[1].addEventListener("mouseleave", ()=>{
    navMobileI[1].style.background = "none";
    navMobileI[1].style.color = "#dd2020";
    navMobileI[1].style.border = "1px solid grey";
   })
// 3
navMobileI[2].addEventListener("mouseover", ()=>{
    navMobileI[2].style.background = "#dd2020";
    navMobileI[2].style.color = "#fff";
    navMobileI[2].style.border = "1px solid #dd2020";
   })

   navMobileI[2].addEventListener("mouseleave", ()=>{
    navMobileI[2].style.background = "none";
    navMobileI[2].style.color = "#dd2020";
    navMobileI[2].style.border = "1px solid grey";
   })
// 4
navMobileI[3].addEventListener("mouseover", ()=>{
    navMobileI[3].style.background = "#dd2020";
    navMobileI[3].style.color = "#fff";
    navMobileI[3].style.border = "1px solid #dd2020";
   })

   navMobileI[3].addEventListener("mouseleave", ()=>{
    navMobileI[3].style.background = "none";
    navMobileI[3].style.color = "#dd2020";
    navMobileI[3].style.border = "1px solid grey";
   })    

// Change SVG fill color based on current theme
navSvgR7.setAttribute("svg-color-change", "red");
footSvg.setAttribute("svg-color-change", "red");

// Change Nav A color based on the scrollY Position
window.addEventListener("scroll", ()=>{
    
    // -------------------------------------
     
     // from start to work page - 200
         if(window.scrollY < page2.offsetTop-200 && window.scrollY < page2.offsetTop-200){
        for(var i = 0; i < navA.length; i++){
         navA[i].setAttribute("color-theme", "black"); 
     }
     about.setAttribute("color-theme", "red");
         }
     //  from work page2 -200 and less than services page4
         if(window.scrollY >= page2.offsetTop-200 && window.scrollY < page3.offsetTop-200){
             for(var i = 0; i < navA.length; i++){
              navA[i].setAttribute("color-theme", "black"); 
          }
          work.setAttribute("color-theme", "red");
              }
     //  from services page3 -200 and less than contact page4
         if(window.scrollY >= page3.offsetTop-200 && window.scrollY < page4.offsetTop-200){
             for(var i = 0; i < navA.length; i++){
              navA[i].setAttribute("color-theme", "black"); 
          }
          services.setAttribute("color-theme", "red");
              }
     //  from services page3 -200 and less than contact page4
     if(window.scrollY >= page4.offsetTop-200){
         for(var i = 0; i < navA.length; i++){
          navA[i].setAttribute("color-theme", "black"); 
      }
      contact.setAttribute("color-theme", "red");
          }
     })

    for(var i = 0; i<sMedia.length; i++){
        sMedia[i].style.color = "#dd2020";
    }
 // 1
    sMedia[0].addEventListener("mouseover", ()=>{
     sMedia[0].style.background = "#dd2020";
     sMedia[0].style.color = "#fff";
     sMedia[0].style.border = "1px solid #dd2020";
    })
 
    sMedia[0].addEventListener("mouseleave", ()=>{
     sMedia[0].style.background = "none";
     sMedia[0].style.color = "#dd2020";
     sMedia[0].style.border = "1px solid grey";
    })
 // 2
    sMedia[1].addEventListener("mouseover", ()=>{
     sMedia[1].style.background = "#dd2020";
     sMedia[1].style.color = "#fff";
     sMedia[1].style.border = "1px solid #dd2020";
    })
 
    sMedia[1].addEventListener("mouseleave", ()=>{
     sMedia[1].style.background = "none";
     sMedia[1].style.color = "#dd2020";
     sMedia[1].style.border = "1px solid grey";
    })
 // 3
 sMedia[2].addEventListener("mouseover", ()=>{
     sMedia[2].style.background = "#dd2020";
     sMedia[2].style.color = "#fff";
     sMedia[2].style.border = "1px solid #dd2020";
    })
 
    sMedia[2].addEventListener("mouseleave", ()=>{
     sMedia[2].style.background = "none";
     sMedia[2].style.color = "#dd2020";
     sMedia[2].style.border = "1px solid grey";
    })
 // 4
 sMedia[3].addEventListener("mouseover", ()=>{
     sMedia[3].style.background = "#dd2020";
     sMedia[3].style.color = "#fff";
     sMedia[3].style.border = "1px solid #dd2020";
    })
 
    sMedia[3].addEventListener("mouseleave", ()=>{
     sMedia[3].style.background = "none";
     sMedia[3].style.color = "#dd2020";
     sMedia[3].style.border = "1px solid grey";
    })

    about.setAttribute("color-theme", "red");
    title.style.color = "#dd2020";
    aboutPageBtn.style.border = "1px solid #dd2020";
    aboutPageBtn.style.color = "#dd2020";
    
    about.addEventListener("mouseover", ()=>{
        about.style.color = "#dd2020";
    })
    about.addEventListener("mouseleave", ()=>{
        about.style.color = "";
    })

    work.addEventListener("mouseover", ()=>{
        work.style.color = "#dd2020";
    })
    work.addEventListener("mouseleave", ()=>{
        work.style.color = "";
    })

    services.addEventListener("mouseover", ()=>{
        services.style.color = "#dd2020";
    })
    services.addEventListener("mouseleave", ()=>{
        services.style.color = "";
    })

    contact.addEventListener("mouseover", ()=>{
        contact.style.color = "#dd2020";
    })
    contact.addEventListener("mouseleave", ()=>{
        contact.style.color = "";
    })

    aboutPageBtn.addEventListener("mouseover", ()=>{
        aboutPageBtn.style.background = "#dd2020";
        aboutPageBtn.style.color = "#fff";
    })
    aboutPageBtn.addEventListener("mouseleave", ()=>{
        aboutPageBtn.style.background = "none";
        aboutPageBtn.style.color = "#dd2020";
    })
    for(var j = 0; j < projectBtn.length; j++){
        projectBtn[j].setAttribute("btn-hover-color", "red")
    }
    for(var c = 0; c<projectTitle.length; c++){
        projectTitle[c].setAttribute("color-theme", "red");
    }
    for(var b = 0; b < barD.length; b++){
        barD[b].setAttribute("bg-color-theme", "red");
        dividerBar[b].setAttribute("bg-color-theme", "red");
    }
    for(var v = 0; v < serviceI.length; v++){
    serviceI[v].setAttribute("color-theme", "red");
    bar[v].setAttribute("bg-color-theme", "red");
    }
    /* Change services title color on hover */
    servicesCont.forEach(item =>{
        var child = item.children;

        if(child.item(2).id == "s1"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#dd2020";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s2"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#dd2020";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s3"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#dd2020";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s4"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#dd2020";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s5"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#dd2020";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s6"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#dd2020";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
    })
    talkBtn.setAttribute("color-theme", "red");
    talkBlock1.setAttribute("bg-color-theme", "red");

    for(var g=0; g < contactP.length; g++){
        contactP[g].setAttribute("color-theme", "red");
    }
    contactBtn.setAttribute("bg-color-theme", "red");
})

// Purple

purple.addEventListener('click', ()=>{

    for(var color = 0; color < visitorsCount.length ; color++){
        visitorsCount[color].setAttribute("color-theme", "purple");
    }
    globeI.setAttribute("color-theme", "purple");

// Looping through Nav Mobile A and I Elements to change the color
for(var i=0; i < navMobileA.length; i++){
    navMobileA[i].setAttribute("color-theme", "purple");
    navMobileI[i].style.color = "#662e9b";
}

// 1
navMobileI[0].addEventListener("mouseover", ()=>{
    navMobileI[0].style.background = "#662e9b";
    navMobileI[0].style.color = "#fff";
    navMobileI[0].style.border = "1px solid #662e9b";
   })

   navMobileI[0].addEventListener("mouseleave", ()=>{
    navMobileI[0].style.background = "none";
    navMobileI[0].style.color = "#662e9b";
    navMobileI[0].style.border = "1px solid grey";
   })
// 2
navMobileI[1].addEventListener("mouseover", ()=>{
    navMobileI[1].style.background = "#662e9b";
    navMobileI[1].style.color = "#fff";
    navMobileI[1].style.border = "1px solid #662e9b";
   })

   navMobileI[1].addEventListener("mouseleave", ()=>{
    navMobileI[1].style.background = "none";
    navMobileI[1].style.color = "#662e9b";
    navMobileI[1].style.border = "1px solid grey";
   })
// 3
navMobileI[2].addEventListener("mouseover", ()=>{
    navMobileI[2].style.background = "#662e9b";
    navMobileI[2].style.color = "#fff";
    navMobileI[2].style.border = "1px solid #662e9b";
   })

   navMobileI[2].addEventListener("mouseleave", ()=>{
    navMobileI[2].style.background = "none";
    navMobileI[2].style.color = "#662e9b";
    navMobileI[2].style.border = "1px solid grey";
   })
// 4
navMobileI[3].addEventListener("mouseover", ()=>{
    navMobileI[3].style.background = "#662e9b";
    navMobileI[3].style.color = "#fff";
    navMobileI[3].style.border = "1px solid #662e9b";
   })

   navMobileI[3].addEventListener("mouseleave", ()=>{
    navMobileI[3].style.background = "none";
    navMobileI[3].style.color = "#662e9b";
    navMobileI[3].style.border = "1px solid grey";
   })    

// Change SVG fill color based on current theme
navSvgR7.setAttribute("svg-color-change", "purple");
footSvg.setAttribute("svg-color-change", "purple");    

    // Change Nav A color based on the scrollY Position
window.addEventListener("scroll", ()=>{
    
    // -------------------------------------
     
     // from start to work page - 200
         if(window.scrollY < page2.offsetTop-200 && window.scrollY < page2.offsetTop-200){
        for(var i = 0; i < navA.length; i++){
         navA[i].setAttribute("color-theme", "black"); 
     }
     about.setAttribute("color-theme", "purple");
         }
     //  from work page2 -200 and less than services page4
         if(window.scrollY >= page2.offsetTop-200 && window.scrollY < page3.offsetTop-200){
             for(var i = 0; i < navA.length; i++){
              navA[i].setAttribute("color-theme", "black"); 
          }
          work.setAttribute("color-theme", "purple");
              }
     //  from services page3 -200 and less than contact page4
         if(window.scrollY >= page3.offsetTop-200 && window.scrollY < page4.offsetTop-200){
             for(var i = 0; i < navA.length; i++){
              navA[i].setAttribute("color-theme", "black"); 
          }
          services.setAttribute("color-theme", "purple");
              }
     //  from services page3 -200 and less than contact page4
     if(window.scrollY >= page4.offsetTop-200){
         for(var i = 0; i < navA.length; i++){
          navA[i].setAttribute("color-theme", "black"); 
      }
      contact.setAttribute("color-theme", "purple");
          }
     })

    for(var i = 0; i<sMedia.length; i++){
        sMedia[i].style.color = "#662e9b";
    }
 // 1
    sMedia[0].addEventListener("mouseover", ()=>{
     sMedia[0].style.background = "#662e9b";
     sMedia[0].style.color = "#fff";
     sMedia[0].style.border = "1px solid #662e9b";
    })
 
    sMedia[0].addEventListener("mouseleave", ()=>{
     sMedia[0].style.background = "none";
     sMedia[0].style.color = "#662e9b";
     sMedia[0].style.border = "1px solid grey";
    })
 // 2
    sMedia[1].addEventListener("mouseover", ()=>{
     sMedia[1].style.background = "#662e9b";
     sMedia[1].style.color = "#fff";
     sMedia[1].style.border = "1px solid #662e9b";
    })
 
    sMedia[1].addEventListener("mouseleave", ()=>{
     sMedia[1].style.background = "none";
     sMedia[1].style.color = "#662e9b";
     sMedia[1].style.border = "1px solid grey";
    })
 // 3
 sMedia[2].addEventListener("mouseover", ()=>{
     sMedia[2].style.background = "#662e9b";
     sMedia[2].style.color = "#fff";
     sMedia[2].style.border = "1px solid #662e9b";
    })
 
    sMedia[2].addEventListener("mouseleave", ()=>{
     sMedia[2].style.background = "none";
     sMedia[2].style.color = "#662e9b";
     sMedia[2].style.border = "1px solid grey";
    })
 // 4
 sMedia[3].addEventListener("mouseover", ()=>{
     sMedia[3].style.background = "#662e9b";
     sMedia[3].style.color = "#fff";
     sMedia[3].style.border = "1px solid #662e9b";
    })
 
    sMedia[3].addEventListener("mouseleave", ()=>{
     sMedia[3].style.background = "none";
     sMedia[3].style.color = "#662e9b";
     sMedia[3].style.border = "1px solid grey";
    })

    about.setAttribute("color-theme", "purple");
    title.style.color = "#662e9b";
    aboutPageBtn.style.border = "1px solid #662e9b";
    aboutPageBtn.style.color = "#662e9b";
    
    about.addEventListener("mouseover", ()=>{
        about.style.color = "#662e9b";
    })
    about.addEventListener("mouseleave", ()=>{
        about.style.color = "";
    })

    work.addEventListener("mouseover", ()=>{
        work.style.color = "#662e9b";
    })
    work.addEventListener("mouseleave", ()=>{
        work.style.color = "";
    })

    services.addEventListener("mouseover", ()=>{
        services.style.color = "#662e9b";
    })
    services.addEventListener("mouseleave", ()=>{
        services.style.color = "";
    })

    contact.addEventListener("mouseover", ()=>{
        contact.style.color = "#662e9b";
    })
    contact.addEventListener("mouseleave", ()=>{
        contact.style.color = "";
    })

    aboutPageBtn.addEventListener("mouseover", ()=>{
        aboutPageBtn.style.background = "#662e9b";
        aboutPageBtn.style.color = "#fff";
    })
    aboutPageBtn.addEventListener("mouseleave", ()=>{
        aboutPageBtn.style.background = "none";
        aboutPageBtn.style.color = "#662e9b";
    }) 
    for(var j = 0; j < projectBtn.length; j++){
        projectBtn[j].setAttribute("btn-hover-color", "purple")
    }
    for(var c = 0; c<projectTitle.length; c++){
        projectTitle[c].setAttribute("color-theme", "purple");
    }
    for(var b = 0; b < barD.length; b++){
        barD[b].setAttribute("bg-color-theme", "purple");
        dividerBar[b].setAttribute("bg-color-theme", "purple");
    }
    for(var v = 0; v < serviceI.length; v++){
    serviceI[v].setAttribute("color-theme", "purple");
    bar[v].setAttribute("bg-color-theme", "purple");
    }
    /* Change services title color on hover */
    servicesCont.forEach(item =>{
        var child = item.children;

        if(child.item(2).id == "s1"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#662e9b";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s2"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#662e9b";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s3"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#662e9b";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s4"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#662e9b";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s5"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#662e9b";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
        if(child.item(2).id == "s6"){
            item.addEventListener("mouseover", ()=>{
                child.item(2).style.color = "#662e9b";
            })
            item.addEventListener("mouseleave", ()=>{
                child.item(2).style.color = "#000";
            })
        }
    })
    talkBtn.setAttribute("color-theme", "purple");
    talkBlock1.setAttribute("bg-color-theme", "purple");

    for(var g=0; g < contactP.length; g++){
        contactP[g].setAttribute("color-theme", "purple");
    }
    contactBtn.setAttribute("bg-color-theme", "purple");
})

}