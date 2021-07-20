var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","4cea0ccc-718d-4be7-9fc4-6322e04cac7e","22a64d03-1c3e-4071-8828-b76cd58d7b97","92b83555-36cd-4963-92c3-af79107a3a61"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"vsm35_K9hPr99Q2YaZd.byqHlV772MYb","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"eEr7XTwqZbPLKjNTsW4CmVsikIFnbJWJ","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"HZb7KU3bm7XIqUVmesc9s4da5iwtad_o","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"4cea0ccc-718d-4be7-9fc4-6322e04cac7e":{"name":"soccer_bw_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"22a64d03-1c3e-4071-8828-b76cd58d7b97":{"name":"robot_31_1","sourceUrl":"assets/api/v1/animation-library/gamelab/cI6imfxnuMCdD.5eCI6xlHBZdgBMxYRF/category_robots/robot_31.png","frameSize":{"x":322,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"cI6imfxnuMCdD.5eCI6xlHBZdgBMxYRF","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":322,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/cI6imfxnuMCdD.5eCI6xlHBZdgBMxYRF/category_robots/robot_31.png"},"92b83555-36cd-4963-92c3-af79107a3a61":{"name":"blue_hanbok_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Y9W1buVxqSA0MQdQvJOZmb2LYwFcmuZX/category_people/blue_hanbok.png","frameSize":{"x":167,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"Y9W1buVxqSA0MQdQvJOZmb2LYwFcmuZX","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Y9W1buVxqSA0MQdQvJOZmb2LYwFcmuZX/category_people/blue_hanbok.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating objects and giving them colours
var soccer_bw_1=createSprite(200,200);
soccer_bw_1.setAnimation("soccer_bw_1");
soccer_bw_1.scale=0.1;
var blue_hanbok_1 =createSprite(200,50);
blue_hanbok_1.setAnimation("blue_hanbok_1");
blue_hanbok_1.scale=0.2;
var robot_31_1=createSprite(200,350);
robot_31_1.setAnimation("robot_31_1");
robot_31_1.scale=0.2;


// making court
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "red";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "red";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "green";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "green";
soccer_bw_1.bounceOff(boundary3);
  soccer_bw_1.bounceOff(boundary4);
  
//score variables
var playerScore=0;
var compScore=0;
var gameState="serve";

function draw() {
  //clear the screen
 background("blue");
  //display the blue_hanbok_1Score  and robot_31_1Score
  textSize(20);
  stroke("silver");
  fill("red");
  text(compScore,25,225);
  text(playerScore,25,185);

  //   function serve() {
  //variable to store different states of game
  
   if(gameState == "serve"){
   //display welcome text
    stroke("blue");
    fill("gold");
    textSize(25);
    text("Welcome! Press Enter to Start.",20,150);
   
    
    //start the game when enter is pressed
  if(keyDown("enter")){
  soccer_bw_1.velocityX = -10;
  soccer_bw_1.velocityY = 10;
  gameState="play";
  }
 


  } 
  
  
    

  
 if (gameState=="play") {
    
    //make the blue_hanbok_1 move with the Arrow keys
  
  if(keyDown("left")){
    blue_hanbok_1.x = blue_hanbok_1.x-10;
    
  }
 
 if(keyDown("right")){
    blue_hanbok_1.x= blue_hanbok_1.x+10;
  }
 
  
      //add the condition to check  either of the player’s score reaches 5
       if(playerScore==1||compScore==1){
   gameState="end";}
 }
if (gameState=="end") {
    stroke("purple");
        fill("violet");
        textSize(30);
        //add the text for GameOver
        text("Game Over!  ",120,200);
 }
  
  if(soccer_bw_1.isTouching(boundary2))
      {      playerScore =playerScore+1;
        playSound("assets/category_hits/retro_game_hit_block_3.mp3", false);
  
        //Reset the soccer_bw_1 by adding center value of x and y
        
        soccer_bw_1.x=200;
        soccer_bw_1.y=200;
        soccer_bw_1.velocityX=0;
        soccer_bw_1.velocityY=0;
      }
      
   if(soccer_bw_1.isTouching(boundary1))
      {
         compScore =compScore+1;
         playSound("assets/category_hits/retro_game_hit_block_3.mp3", false);
    
        //Reset the soccer_bw_1 by adding center value of x and y 
        soccer_bw_1.x=200;
        soccer_bw_1.y=200;
        soccer_bw_1.velocityX=0;
        soccer_bw_1.velocityY=0;
      }
      
   
  
      
    
 
   
  
  
  
      
     
 
  
  
  

  
  //AI for the robot_31_1
  //make it move with the striker's x and y position
  robot_31_1.x = soccer_bw_1.x;
  
  //draw line at the centre
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  //create edge boundaries
  //make the striker bounce with the top and the bottom edges
  createEdgeSprites();
  
  soccer_bw_1.bounceOff(edges);
    if (soccer_bw_1.bounceOff(blue_hanbok_1)) {
    playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
  if (  soccer_bw_1.bounceOff(robot_31_1)) {
    playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
  blue_hanbok_1.bounceOff(edges);
  robot_31_1.bounceOff(edges);
 
  drawSprites(); 
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
