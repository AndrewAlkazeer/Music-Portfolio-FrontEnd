import React, { Component } from "react";
import Sketch from "react-p5";
import ReactJS from './images/Icons/React.png';
import Python from './images/Icons/Python.png';
import Angular from './images/Icons/Angular.png';
import Bootstrap from './images/Icons/Bootstrap.png';
import CSS from './images/Icons/CSS.png';
import Firebase from './images/Icons/Firebase.png';
import Git from './images/Icons/Git.png';
import HTML from './images/Icons/HTML.png';
import jQuery from './images/Icons/jQuery.png';
import JS from './images/Icons/JS.png';
import Linux from './images/Icons/Linux.png';
import MongoDB from './images/Icons/MongoDB.png';
import Node from './images/Icons/Node.png';
import Node2 from './images/Icons/Node2.png';
import Redux from './images/Icons/Redux.png';
import Vue from './images/Icons/Vue.png';
import Drop from './icons.js'
let IconsArray;
let screenWidth;
let reachedLimit = false;
let icon1 = 0;
let icon2 = 1;
let icon3 = 2;
let icon4 = 3;
let icon5 = 4;
let icon6 = 5;
let icon7 = 6;
let icon8 = 7;
let icon9 = 8;
let icon10 = 9;
let icon11 = 10;
let icon12 = 11;
let icon13 = 12;
let icon14 = 13;
let icon15 = 14;
let icon16 = 15;
let ran1;
let ran2;
let ran3;
let ran4;
let ran5;
let ran6;
let ran7;
let ran8;
let ran9;
let ran10;
let ran11;
let ran12;
let ran13;
let ran14;
let ran15;
let ran16;
let test = [];
export default class Sket extends Component {
  constructor(props){
    super(props);

    this.x = 50;
    this.y = 1;
    this.rp = Math.floor(Math.random()*600);
    this.r = Math.floor(Math.random()*16);
  }

 async setup(p5, parent){ // window width is still not optimized for extra large screen
    screenWidth = p5.windowWidth;
    var sket = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(parent);
    sket.position(0, 0);
    
    this.p5 = p5;
    
for(var i = 0; i < 50; i++){
  test.push(new Drop(p5, JS));
  
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, Vue));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, Angular));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, Python));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, Linux));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, HTML));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, CSS));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, jQuery));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, Firebase));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, Git));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, JS));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, MongoDB));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, Node));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, ReactJS));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, Redux));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, Node2));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  test.push(new Drop(p5, Bootstrap));
  await new Promise((resolve) => setTimeout(resolve, 1500));
}


/*

    /* Loading all icons in setup */
    /* Angular */
    p5.loadImage(Angular, an =>{
      this.an = an;
    })
/* Bootstrap */
p5.loadImage(Bootstrap, bo =>{
  this.bo = bo;
})
/* CSS */
p5.loadImage(CSS, cs =>{
  this.cs = cs;
})
/* Firebase */
p5.loadImage(Firebase, fi =>{
  this.fi = fi;
})
/* Git */
p5.loadImage(Git, gi =>{
  this.gi = gi;
})
/* HTML */
p5.loadImage(HTML, ht =>{
  this.ht = ht;
})
/* jQuery */
p5.loadImage(jQuery, jq =>{
  this.jq = jq;
})
/* JS */
p5.loadImage(JS, js =>{
  this.js = js;
})
/* Linux */
p5.loadImage(Linux, li =>{
  this.li = li;
})
/* MongoDB */
p5.loadImage(MongoDB, mo =>{
  this.mo = mo;
})
/* Node */
p5.loadImage(Node, no =>{
  this.no = no;
})
/* Node */
p5.loadImage(Node2, no2 =>{
  this.no2 = no2;
})
    /* Python */
    p5.loadImage(Python, py =>{
      this.py = py;
    })
    /* React */
    p5.loadImage(ReactJS, re =>{
      this.re = re;
    })
    /* Redux */
p5.loadImage(Redux, red =>{
  this.red = red;
})

    /* Vue */
    p5.loadImage(Vue, vu =>{
      this.vu = vu;
    })


    
   // rp = Math.floor(Math.random()*screenWidth);
  // random = Math.floor(Math.random()*16);
  // test = Math.floor(Math.random()*16);
  // ran1 = Math.floor(Math.random()*parent.offsetWidth-50);
  // ran2 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran1 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran2 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran3 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran4 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran5 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran6 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran7 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran8 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran9 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran10 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran11 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran12 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran13 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran14 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran15 = Math.floor(Math.random()*parent.offsetWidth-50);
 ran16 = Math.floor(Math.random()*parent.offsetWidth-50);


  }
  draw(p5){
    p5 = this.p5;
    p5.background(248,249,250);
   if(this.py && this.re && this.an && this.bo && this.cs && this.fi && this.gi && this.ht && this.jq && this.js && this.li && this.mo && this.no && this.no2 && this.red && this.vu){
    IconsArray = [this.py, this.re, this.an, this.bo, this.cs, this.fi, this.gi, this.ht, this.jq, this.js, this.li, this.mo, this.no, this.no2, this.red, this.vu];
     /*
     p5.image(this.py, this.x, this.y, 50, 50);
     p5.image(this.re, this.x+100, this.y, 50, 50);
     this.x++;
     this.y++;
*/
this.y++;
// this.rp++;
//random2++;
 // test2++;
 if(ran1 < screenWidth-50 && !reachedLimit){

  ran1++;
 }
 else if(ran1 > screenWidth-50){
  reachedLimit = true;
    ran1--;
  }
 
 ran2++;
 ran3++;
 ran4++;
 ran5++;
 ran6++;
 ran7++;
 ran8++;
 ran9--;
 ran10--;
 ran11--;
 ran12--;
 ran13--;
 ran14--;
 ran15--;
 ran16--;

  /*
  p5.image(IconsArray[icon1], ran1, this.y, 50, 50);
  p5.image(IconsArray[icon2], ran2, this.y, 50, 50);
  p5.image(IconsArray[icon3], ran3, this.y, 50, 50);
  p5.image(IconsArray[icon4], ran4, this.y, 50, 50);
  p5.image(IconsArray[icon5], ran5, this.y, 50, 50);
  p5.image(IconsArray[icon6], ran6, this.y, 50, 50);
  p5.image(IconsArray[icon7], ran7, this.y, 50, 50);
  p5.image(IconsArray[icon8], ran8, this.y, 50, 50);
  p5.image(IconsArray[icon9], ran9, this.y, 50, 50);
  p5.image(IconsArray[icon10], ran10, this.y, 50, 50);
  p5.image(IconsArray[icon11], ran11, this.y, 50, 50);
  p5.image(IconsArray[icon12], ran12, this.y, 50, 50);
  p5.image(IconsArray[icon13], ran13, this.y, 50, 50);
  p5.image(IconsArray[icon14], ran14, this.y, 50, 50);
  p5.image(IconsArray[icon15], ran15, this.y, 50, 50);
  p5.image(IconsArray[icon16], ran16, this.y, 50, 50);
//  await new Promise((resolve) => setTimeout(resolve, 500));
*/

    
}
  //  p5.image(test, 50, 50)
  
  /*
test[0].draw();
test[0].update();
*/

test.forEach(icon =>{
  icon.draw();
  icon.update();
})

  }

  render() {
    return <Sketch setup={(...args) => this.setup(...args)} draw={() => this.draw()} />;
  }
}