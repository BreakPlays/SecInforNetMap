let img;

function preload() {
    img = loadImage('imgs/map.png')
}
            
function setup() {
    canvas = createCanvas(img.width/2, img.height/2);
    imageMode(CENTER);
    background(50);

    image(img, 0, 0);
    
    
    textSize(50)
} 

function draw(){

}