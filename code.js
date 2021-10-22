var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var ball = createSprite(200, 200, 20, 20);
ball.shapeColor = "blue";
var player = createSprite(200, 320, 80, 20);
player.shapeColor = "blue";
var square1 = createSprite(25, 75, 50, 50);
square1.shapeColor = "red";
var square2 = createSprite(75, 75, 50, 50);
square2.shapeColor = "black";
var square3 = createSprite(125, 75, 50, 50);
square3.shapeColor = "purple";
var square4 = createSprite(175, 75, 50, 50);
square4.shapeColor = "yellow";
var square5 = createSprite(225, 75, 50, 50);
square5.shapeColor = "black";
var square6 = createSprite(275, 75, 50, 50);
square6.shapeColor = "black";
var square7 = createSprite(325, 75, 50, 50);
square7.shapeColor = "purple";
var square8 = createSprite(375, 75, 50, 50);
square8.shapeColor = "yellow";
var square9 = createSprite(25, 125, 50, 50);
square9.shapeColor = "red";
var square10 = createSprite(75, 125, 50, 50);
square10.shapeColor = "purple";
var square11 = createSprite(125, 125, 50, 50);
square11.shapeColor = "yellow";
var square12 = createSprite(175, 125, 50, 50);
square12.shapeColor = "black";
var square13 = createSprite(225, 125, 50, 50);
square13.shapeColor = "black";
var square14 = createSprite(275, 125, 50, 50);
square14.shapeColor = "yellow";
var square15 = createSprite(325, 125, 50, 50);
square15.shapeColor = "black";
var square16 = createSprite(375, 125, 50, 50);
square16.shapeColor = "purple";
var score = 0;
var gamestate = "beggining";
function draw() {
  background("gray");
  if (gamestate == "beggining") {
    fill("yellow");
  textSize(30);
  text("press space", 120, 250);
  }
  fill("black");
  textSize(12);
  text("score:" + score, 200, 15);
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(player);
  playerplay();
  if (ball.isTouching(square1)) {
    square1.destroy();
    score = score+1;
  }
  if (ball.isTouching(square2)) {
    square2.destroy();
    score = score+1;
  }
  if (ball.isTouching(square3)) {
    square3.destroy();
    score = score+1;
  }
  if (ball.isTouching(square4)) {
    square4.destroy();
    score = score+1;
  }
  if (ball.isTouching(square5)) {
    square5.destroy();
    score = score+1;
  }
  if (ball.isTouching(square6)) {
    square6.destroy();
    score = score+1;
  }
  if (ball.isTouching(square7)) {
    square7.destroy();
    score = score+1;
  }
  if (ball.isTouching(square8)) {
    square8.destroy();
    score = score+1;
  }
  if (ball.isTouching(square9)) {
    square9.destroy();
    score = score+1;
  }
  if (ball.isTouching(square10)) {
    square10.destroy();
    score = score+1;
  }
  if (ball.isTouching(square11)) {
    square11.destroy();
    score = score+1;
  }
  if (ball.isTouching(square12)) {
    square12.destroy();
    score = score+1;
  }
  if (ball.isTouching(square13)) {
    square13.destroy();
    score = score+1;
  }
  if (ball.isTouching(square14)) {
    square14.destroy();
    score = score+1;
  }
  if (ball.isTouching(square15)) {
    square15.destroy();
    score = score+1;
  }
  if (ball.isTouching(square16)) {
    square16.destroy();
    score = score+1;
  }
  if (keyDown("space") && gamestate== "beggining") {
    begingame();
    gamestate = "play";
  }
  if (score == 16) {
    gamestate = "end";
    textSize(30);
    text("you win", 120, 250);
  }
  drawSprites();
}
function playerplay() {
  player.x = World.mouseX;
}
function begingame() {
  ball.velocityX = 10;
  ball.velocityY = 12;
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
