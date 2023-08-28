//window.onload = () =>{
  export function mobile(){
    // Navbar Mobile and medium screen menu btn
    var one = document.querySelector('.one');
    var two = document.querySelector('.two');
    var three = document.querySelector('.three');
    var isClicked = false;
   // var isClosed = true;
    var main = document.querySelector('.mobile-nav-btn-cont');
    var mobileCollapseMenuCont = document.querySelector('.mobile-collapse-menu');
    var mobileCollapseMenuTitle = document.querySelectorAll('.mobile-collapse-menu h1');
    var mobileCollapseMenu = document.querySelectorAll('.mobile-collapse-menu div');
    var set1 = document.querySelectorAll('.set-1 p');
    var set2 = document.querySelectorAll('.set-2 p');
    var set3 = document.querySelectorAll('.set-3 p');
    var set4 = document.querySelectorAll('.set-4 p');

    // Close Mobile collapse menu when user clicks on page names

    var navMBs = document.querySelectorAll(".nav-btns-cont ul li");

    navMBs.forEach(item => {

      

      item.addEventListener("click", event => {
        isClicked = false;
        mobileCollapseMenuCont.style.left = '100%';
      var animeMD = 0.3;
      for(var i = 0; i < mobileCollapseMenuTitle.length; i++){
          animeMD = animeMD + 0.2;
       mobileCollapseMenuTitle[i].style.left = '-100px';
       mobileCollapseMenuTitle[i].style.opacity = '0';
       mobileCollapseMenuTitle[i].style.transitionDelay = `${animeMD}s`;
      }
        // Stage One
        setTimeout(() =>{
        one.style.transform = 'rotate(0deg)';
        three.style.transform = 'rotate(0deg)';
        three.style.top = '140%';
        two.style.top = '140%';
        one.style.top = '140%';
        two.style.opacity = '1';
        two.style.transitionDelay = '0.2s';
        }, 200);
        // Stage Two
        setTimeout(() =>{
        one.style.top = '-80%';
        two.style.top = '20%';
        three.style.top = '70%';
        three.style.transition = '0.3s ease-in-out';
        two.style.transition = '0.4s ease-in-out';
        one.style.transition = '0.5s ease-in-out';
        }, 500);
        // Stage Three
        setTimeout(() =>{
        one.style.top = '0%';
        two.style.top = '50%';
        three.style.top = '100%';
        three.style.transform = 'translateY(-100%)';
        two.style.transform = 'translateY(-50%)';
      //  one.style.transform = 'translateY(0%)';
        }, 900);
      })
    });

    // Menu Open
    main.addEventListener('click', ()=>{
        if(!isClicked){
          isClicked = true;
        //  isClosed = false;
          mobileCollapseMenuCont.style.left = '0px';
          var animeMD = 0.3;
          for(var i = 0; i < mobileCollapseMenuTitle.length; i++){
              animeMD = animeMD + 0.2;
           mobileCollapseMenuTitle[i].style.left = '0px';
           mobileCollapseMenuTitle[i].style.opacity = '1';
           mobileCollapseMenuTitle[i].style.transitionDelay = `${animeMD}s`;
          }
         // Stage One Animation
         setTimeout(()=>{
         three.style.top = '100%';
         two.style.top = '100%';
         one.style.top = '100%';
         three.style.transform = 'translateY(0%)';
         two.style.transform = 'translateY(0%)';
         one.style.transform = 'translateY(0%)';
         three.style.transition = '0.7s ease-in-out';
         two.style.transition = '0.6s ease-in-out';
         one.style.transition = '0.5s ease-in-out';
         }, 200);
         // Stage Two Animation
         setTimeout(() =>{
         one.style.top = '-80%';
         two.style.top = '20%';
         three.style.top = '70%';
         three.style.transition = '0.2s ease-in-out';
         two.style.transition = '0.3s ease-in-out';
         one.style.transition = '0.4s ease-in-out';
         }, 1000);
         // Stage Three Animation
         setTimeout(() =>{
         three.style.top = '120%';
         two.style.top = '120%';
         one.style.top = '120%';
         three.style.transform = 'translateY(0%)';
         two.style.transform = 'translateY(0%)';
         one.style.transform = 'translateY(0%)';
         three.style.transition = '0.7s ease-in-out';
         two.style.transition = '0.3s ease-in-out';
         one.style.transition = '0.5s ease-in-out';
         two.style.opacity = '0';
         }, 1400);
         // Stage Four Animation
          setTimeout(() =>{
            one.style.transform = 'rotate(-30deg)';
            three.style.transform = 'rotate(30deg)';
            one.style.transition = '0.3s ease-in-out';
            three.style.transition = '0.3s ease-in-out';
          }, 1900);
          setTimeout(() =>{
            one.style.top = '70%';
            three.style.top = '70%';
            one.style.transform = 'rotate(-45deg)';
            three.style.transform = 'rotate(45deg)';
          }, 2200);
          }
        // Menu Close
     else{
        isClicked = false;
      //  isClosed = true;
        mobileCollapseMenuCont.style.left = '100%';
      var animeMD = 0.3;
      for(var i = 0; i < mobileCollapseMenuTitle.length; i++){
          animeMD = animeMD + 0.2;
       mobileCollapseMenuTitle[i].style.left = '-100px';
       mobileCollapseMenuTitle[i].style.opacity = '0';
       mobileCollapseMenuTitle[i].style.transitionDelay = `${animeMD}s`;
      }
        // Stage One
        setTimeout(() =>{
        one.style.transform = 'rotate(0deg)';
        three.style.transform = 'rotate(0deg)';
        three.style.top = '140%';
        two.style.top = '140%';
        one.style.top = '140%';
        two.style.opacity = '1';
        two.style.transitionDelay = '0.2s';
        }, 200);
        // Stage Two
        setTimeout(() =>{
        one.style.top = '-80%';
        two.style.top = '20%';
        three.style.top = '70%';
        three.style.transition = '0.3s ease-in-out';
        two.style.transition = '0.4s ease-in-out';
        one.style.transition = '0.5s ease-in-out';
        }, 500);
        // Stage Three
        setTimeout(() =>{
        one.style.top = '0%';
        two.style.top = '50%';
        three.style.top = '100%';
        three.style.transform = 'translateY(-100%)';
        two.style.transform = 'translateY(-50%)';
      //  one.style.transform = 'translateY(0%)';
        }, 900);
      };
        })
      }
//}