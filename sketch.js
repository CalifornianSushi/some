
var canvas,backgroundImg; 
var together; 
var mouse, mouseImg1,mouseImg2; 
var cat, catImg1,catImg2; 
function preload() { 
    backgroundImg = loadImage("garden.png"); 
    mouseImg1= loadAnimation("mouseOne.png"); 
    mouseImg2=loadAnimation("mouseTwo.png","mouseThree.png"); 
    mouseImg3= loadAnimation("mouseFour.png"); 
    catImg1=loadAnimation("catOne.png"); 
    catImg2= loadAnimation("catTwo.png","catThree.png"); 
    catImg3=loadAnimation("catFour.png"); } 
    function setup(){ canvas = createCanvas(1000,800); 
    mouse = createSprite(870, 600); 
    mouse.addAnimation("mouseSleeping", mouseImg1); 
    mouse.scale = 0.2; cat = createSprite(200, 600); 
    cat.addAnimation("catStanding", catImg1); cat.scale = 0.15; } 
    
    function draw() { 
        background(backgroundImg); 
        if(mouse.x - cat.x < (mouse.width - cat.width)/2) 
        { 
            mouse.velocityX=0; 
            mouse.addAnimation("mouseLastImage", mouseImg3); 
            mouse.x =300; mouse.scale=0.2; 
            cat.changeAnimation("mouseLastImage"); 
            cat.addAnimation("catLastImage", catImg3); 
            cat.scale=0.15; cat.changeAnimation("catLastImage"); 
        } 
        drawSprites(); 
    }
        function keyPressed(){ 
            if(keyCode === LEFT_ARROW){ 
                mouse.velocityX = -5; 
                mouse.addAnimation("mouseRunning", mouseImg2); 
                mouse.changeAnimation("mouseRunning"); 
                cat.addAnimation("catTeasing", catImg2); 
                cat.frameDelay = 25; cat.changeAnimation("catTeasing"); } }