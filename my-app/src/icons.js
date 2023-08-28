export default class Drop {
    constructor(p5, imageUrl){
        this.p5 = p5;
        this.imageUrl = imageUrl;
        this.loaded = false;
        this.randomX = Math.floor(Math.random()*p5.windowWidth);
        this.y = -60;
    
     
        p5.loadImage(this.imageUrl, (img)=>{
            this.loaded = true;
            this.img = img;
        })
    }
    
draw(){
 // Draw!
 if(this.loaded){
 this.p5.image(this.img, this.randomX, this.y, 60, 60);
 }
}

update(){
if(this.loaded){
  // Update!  
  this.randomX += this.p5.random(-3, 3);
  this.y++;
}
}


}