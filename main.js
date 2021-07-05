function preload() {
    
}
function setup() {
    canvas=createCanvas(600,600);
    canvas.position(150,150);

   video= createCapture(VIDEO);
   video.hide();
   color="";
   }
  function draw() {
    
    image(video,150,150,300,300); 

     tint(color);
    circle(150,150,50);
    circle(450,450,50);
    
    fill(0,128,0);
    stroke(0,256,0);
    square(150,150,50,50);
    square(450,450,50,50); 
}
function take_snapshot() {
    save('result.png');
    }
    function add() {
        color=document.getElementById("ps5").value;
    } 