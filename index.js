// canvas
var canvas = document.getElementById("canvas");
canvas.height = 300;
canvas.width = 300;
var ctx = canvas.getContext("2d");

// declaring objects
var content = {
  run : false
}

var element = {
  start : document.getElementById("start"),
  stop: document.getElementById("stop"),
  reset: document.getElementById("reset"),
  pi : document.getElementById("pi"),
  inside: document.getElementById("inside"),
  outside: document.getElementById("outside"),
  total: document.getElementById("total")
};

var circle = {
  x : canvas.height/2,
  y : canvas.height/2,
  r : canvas.height/2
};

var points = {
  pIn : 0,
  pOut : 0,
  pTotal : 0,
  pi : 0
};

// drawing circle
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI, false);
ctx.stroke();

// sleep function
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// function that draws points on canvas
async function draw(){
  for(var i=0; i<10000; i++){
    let x = Math.floor(Math.random() * (canvas.height + 1));
    let y = Math.floor(Math.random()*(canvas.height + 1));

    let dist = Math.sqrt((x - circle.x)*(x - circle.x) + (y - circle.y)*(y - circle.y));

    if(dist < circle.r){
      points.pIn++;
      element.inside.innerHTML = points.pIn;
      ctx.fillStyle = "red";
    }
    else{
      points.pOut++;

      element.outside.innerHTML = points.pOut;
      ctx.fillStyle = "green";
    }

    points.pTotal++;
    element.total.innerHTML = points.pTotal;

    points.pi = 4*(points.pIn/points.pTotal);

    element.pi.innerHTML = points.pi;

    ctx.fillRect(x, y, 2, 2);

    await sleep(10);

    if(content.run == false){
      break;
    }
  }

}

function start(){
  content.run = true;
  draw();
}

function stop(){
  content.run = false;
}

function reset(){
  content.run = false;

  points.pIn = 0;
  points.pOut = 0;
  points.pTotal = 0;
  points.pi = 0;

  ctx.clearRect(0, 0, canvas.height, canvas.height);
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI);
  ctx.stroke();

  element.inside.innerHTML = points.pIn;
  element.outside.innerHTML = points.pOut;
  element.total.innerHTML = points.pTotal;
  element.pi.innerHTML = points.pi;
}

element.start.onclick = function (){
  start();
}

element.stop.onclick = function(){
  stop();
}

element.reset.onclick = function(){
  reset();
}
