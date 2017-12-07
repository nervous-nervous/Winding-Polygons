var x = new Array();
var y = new Array();
var ax;
var ay;
var n = 0;
var flag = 0;
var left = new Array();
var pick_point = 0 ;
function setup() {
  // put setup code here
  var canvas2 = createCanvas(1000, 800);
  canvas2.parent('sketch-holder2');
//v1 = createVector(40, 50);
 //v2 = createVector(100, 50);

}
function resetSketch(){
  x = [];
  y= [];
  flag = 0;
  n = 0;
  pick_point = 0 
 }

function resetWatcher(){
    flag = 1;
  }
 function keyTyped() {
   if (key === 'a') {
     resetSketch();
   }
   if (key === 'b') {
     resetWatcher();
   }
   // uncomment to prevent any default behavior
   // return false;
 }

function draw(){
  background(220);
  line(0,100,width,100)
  text("1.draw", 10,height/10)
  text("Restart : a ", 10,height/10-20)
  text("winding number: ", 7*(width/8)-200, height/10);

  fill(0);
    if(pick_point == 1)
    {
      text("-> 2. pick any point ", 50, height/10);
    }
  //keyIsDown(e);
    //button.mouseClicked(changeBG);
  if (n != 0){
	  ellipse(x[0], y[0], 10, 10)
	  for (var i = 1; i < n; i++){
		ellipse(x[i], y[i], 10, 10);
		line(x[i-1], y[i-1], x[i], y[i]);
	   }
	}
  if (flag>1){
	  ellipse(ax, ay, 10, 10);
	  //textAlign(CENTER);
	  //textSize(32);
    //var angle = angle_sum (ax, ay, x, y, n)
    text(parseInt(angle_sum(ax, ay, x, y, n)/359), 7*(width/8)-100, height/10);
  }
  //text(angle,200,200);
}

function mouseClicked(){
	if(flag == 0){
	 if ( abs(mouseX-x[0])<=5&&abs(mouseY-y[0])<=5){
		 flag = 1;
		 x[n] = x[0];
		 y[n] = y[0];
     text(n, x[0], y[0]);
		 n++
     pick_point++;
	 }
	 else{
		x[n] = mouseX;
		y[n] = mouseY;
    text(n, x[n], y[n]);
		n++;
	 }
	}
	else if(flag == 1){
		flag = 2;
		ax = mouseX;
		ay = mouseY;
	}
	else{
		flag = 0;
		n = 0;

	}
}
// function angle_alc(ax,ay,x1,y1,x2,y2){
//
//     var v1_pre = createVector(x1,y1);
//     var v2_pre = createVector(x2,y2);
//     var  watcher = createVector(ax,ay);
//     var v1 = v1_pre.sub(watcher);
//     var v2 = v2_pre.sub(watcher);
//     var angle_pre = v1.angleBetween(v2);
//     // var lengthAB = Math.sqrt( Math.pow(ax - x1, 2) +Math.pow(ay - y1, 2));
//     // var lengthAC = Math.sqrt( Math.pow(ax - x2, 2) +Math.pow(ay - y2, 2));
//     // var lengthBC = Math.sqrt( Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
//     // var cosA = (Math.pow(lengthAB, 2) + Math.pow(lengthAC, 2) - Math.pow(lengthBC, 2)) /
//     //             (2 * lengthAB * lengthAC);
//     // var angle_pre = Math.round( Math.acos(cosA) * 180 / Math.PI );
//
//     if(isLeft(ax,ay,x1,y1,x2,y2)>0){
//       angle_pre = abs(angle_pre);
//     }else {
//       angle_pre = abs(angle_pre);
//     }
//     //console.log(n);
//     //print_array(x,y,n);
// return angle_pre;
// }

function angle_calc(ax,ay,x1,y1,x2,y2){
  var lengthAB = Math.sqrt( Math.pow(ax - x1, 2) +Math.pow(ay - y1, 2));
  var lengthAC = Math.sqrt( Math.pow(ax - x2, 2) +Math.pow(ay - y2, 2));
  var lengthBC = Math.sqrt( Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  var cosA = (Math.pow(lengthAB, 2) + Math.pow(lengthAC, 2) - Math.pow(lengthBC, 2)) /
              (2 * lengthAB * lengthAC);
  var angle_pre = Math.round( Math.acos(cosA) * 180 / Math.PI );
  return angle_pre;
}



function print_array(x,y,n){
  for(var j=0; j<n; j++){
    console.log(j);
    console.log(x[j]);
    console.log(y[j]);
  }
}
function angle_sum(ax,ay,x,y,n){
  var angle_sum = 0;
  var angle_pre = 0;
  for(var k=0; k<(n-1); k++){
    angle_pre = angle_calc(ax,ay,x[k],y[k],x[k+1],y[k+1]);

    console.log(k);
    console.log(angle_pre);
    fill(255,0,0);
    line(ax,ay,x[k],y[k]);
    angle_sum = angle_sum + angle_pre;
  }
  //angle_sum = angle_sum + angle_alc(ax,ay,x[n-1],y[n-1],x[0],y[0]);
  return angle_sum;
}
