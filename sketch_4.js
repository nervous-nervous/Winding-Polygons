//algorithm 1
var a1 = function( p ){

    var x = new Array();
    var y = new Array();
    var ax;
    var ay;
    var n = 0;
    var flag = 0;
    var left = new Array();
    var pick_point = 0 ;
    p.setup = function() {
    // put setup code here
    p.createCanvas(1000, 800);
    //canvas2.parent('sketch-holder2');
    //v1 = createVector(40, 50);
    //v2 = createVector(100, 50);

    }
    p.resetSketch = function(){
        x = [];
        y= [];
        flag = 0;
        n = 0;
        pick_point = 0 
    }
    p.resetWatcher= function(){
        flag = 1;
    }
    p.keyTyped = function() {
    if (p.key == 'a') {
        p.resetSketch();
    }
    if (p.key == 'b') {
        p.resetWatcher();
    }
    // uncomment to prevent any default behavior
    // return false;
    }

    p.draw = function(){
    p.background(220);
    p.line(0,100,p.width,100)
    p.text("1.draw", 10,p.height/10)
    p.text("Restart : a ", 10,p.height/10-20)
    p.text("winding number: ", 7*(p.width/8)-200, p.height/10);

    p.fill(0);
        if(pick_point == 1)
        {
            p.text(" -> 2. pick any point ", 50, p.height/10);
        }
    //keyIsDown(e);
        //button.mouseClicked(changeBG);
    if (n != 0){
        p.ellipse(x[0], y[0], 10, 10)
        for (var i = 1; i < n; i++){
            p.ellipse(x[i], y[i], 10, 10);

            p.line(x[i-1], y[i-1], x[i], y[i]);
        }
        }
    if (flag>1){
        p.fill(255,0,0)
        p.ellipse(ax, ay, 10, 10);
        p.fill(0,0,0)
        //textAlign(CENTER);
        //textSize(32);
        //var angle = angle_sum (ax, ay, x, y, n)
        p.textSize(32);
        p.text(parseInt(p.angle_sum(ax, ay, x, y, n)/359), 7*(p.width/8)-100, p.height/10);
        p.textSize(12);
    }
    //text(angle,200,200);
    }

    p.mouseClicked = function(){
        if(flag == 0){
        if ( p.abs(p.mouseX-x[0])<=5&& p.abs(p.mouseY-y[0])<=5){
            flag = 1;
            x[n] = x[0];
            y[n] = y[0];
        p.text(n, x[0], y[0]);
            n++
        pick_point++;
        }
        else{
            x[n] = p.mouseX;
            y[n] = p.mouseY;
        p.text(n, x[n], y[n]);
            n++;
        }
        }
        else if(flag == 1){
            flag = 2;
            ax = p.mouseX;
            ay = p.mouseY;
        }
        else{
            flag = 0;
            n = 0;

        }
    }

    p.ccw = function(x0, y0, x1, y1, x2, y2){
        return ( (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0) );
    }

    p.angle_calc = function(ax,ay,x1,y1,x2,y2){
    var lengthAB = Math.sqrt( Math.pow(ax - x1, 2) +Math.pow(ay - y1, 2));
    var lengthAC = Math.sqrt( Math.pow(ax - x2, 2) +Math.pow(ay - y2, 2));
    var lengthBC = Math.sqrt( Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    var cosA = (Math.pow(lengthAB, 2) + Math.pow(lengthAC, 2) - Math.pow(lengthBC, 2)) /
                (2 * lengthAB * lengthAC);
    var angle_pre = Math.round( Math.acos(cosA) * 180 / Math.PI );
    if(p.ccw(x1,y1,x2,y2,ax,ay)>0)
        return angle_pre;
    else
        return(-angle_pre);

    }



    p.print_array = function(x,y,n){
    for(var j=0; j<n; j++){
        console.log(j);
        console.log(x[j]);
        console.log(y[j]);
        }
    }
    p.angle_sum = function(ax,ay,x,y,n){
    var angle_sum = 0;
    var angle_pre = 0;
    for(var k=0; k<(n-1); k++){
        angle_pre = p.angle_calc(ax,ay,x[k],y[k],x[k+1],y[k+1]);

        console.log(k);
        console.log(angle_pre);
        // p.fill(255,0,0);
        p.line(ax,ay,x[k],y[k]);
        angle_sum = angle_sum + angle_pre;
    }
    //angle_sum = angle_sum + angle_alc(ax,ay,x[n-1],y[n-1],x[0],y[0]);
    return p.abs(angle_sum);
    }

}

var myp5 = new p5(a1, 'c1');



// algroithm 2
var a2 = function( p )
{
    var x = new Array();
    var y = new Array();
    var ax;
    var ay;
    var n = 0;
    var flag = 0;
    var pick_point = 0 ;
    var Wn;

    p.setup = function()
    {
    // put setup code here
        p.createCanvas(900, 900);
    //canvas.parent('sketch-holder');
    //button = createButton('reset');
    //button.position(400, 300);
    //resetSketch();
    //

    }

    p.resetSketch=function(){
        x = [];
        y= [];
        flag = 0;
        n = 0;
        pick_point = 0 ;

    }

    p.resetWatcher = function(){
        flag = 1;
    }

    p.keyTyped = function() {

    if (p.key == 'a') {
        p.resetSketch();
    }
    if (p.key == 'b') {
        p.resetWatcher();
    }
    // uncomment to prevent any default behavior
    // return false;
    }


    p.draw = function () {
    // put drawing code here
        p.background(220);
        p.line(0,100,p.width,100)
        p.text("1.draw", 10,p.height/10)
        p.text("Restart : a ", 10,p.height/10-20)
        p.text("winding number: ", 7*(p.width/8)-200, p.height/10);
    
        p.fill(0);
    if(pick_point == 1)
        {
            p.text("-> 2. pick any point ", 50, p.height/10);
        }
    //keyIsDown(e);
        //button.mouseClicked(changeBG);
    if (n != 0){
        p.ellipse(x[0], y[0], 10, 10)
        for (var i = 1; i < n; i++){
            p.ellipse(x[i], y[i], 10, 10);
            p.line(x[i-1], y[i-1], x[i], y[i]);
        }
        }
    if (flag>1){
        p.fill(255,0,0)
        p.ellipse(ax, ay, 10, 10);
        p.fill(0,0,0)
        //textAlign(CENTER);
            if (Wn == 0.5){

            p.text("Don't put the point on a line! Please choose a new point.", p.width/2, p.height/2);
            flag = 3;
        }
        else
            p.textSize(32);
            p.text( Wn, 7*(p.width/8)-100, p.height/10);
            p.textSize(12);
    }


    }

    p.mouseClicked=function(){
        if (p.mouseX > 0 && p.mouseX < 900 && p.mouseY > 0 && p.mouseY < 900){
            if (flag == 0){
                if ( p.abs(p.mouseX-x[0])<=5&&p.abs(p.mouseY-y[0])<=5){
                    flag = 1;
                    x[n] = x[0];
                    y[n] = y[0];
                    n++
                    pick_point++;
                }
                else{
                    x[n] = p.mouseX;
                    y[n] = p.mouseY;
                    n++;
                }
            }
            else if (flag == 1 || flag == 3){
                flag = 2;
                ax = p.mouseX;
                ay = p.mouseY;
    /* 			ax = 100;
                ay = 100;
                x[0]=150;
                y[0]=50;
                x[1]=50;
                y[1]=100;
                x[2]=150;
                y[2]=100;
                x[3]=150;
                y[3]=50;
                n=4 */
                Wn = p.WindingNumber(ax, ay, x, y, n)
            }
            else{
                flag = 0;
                n = 0;
            
            }
        }
    }

    p.ccw = function(x0, y0, x1, y1, x2, y2){
        return ( (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0) );
    }
    p.WindingNumber = function(ax, ay, x, y, n){
        var wn = 0;
        for (var j = 0; j < n-1; j++){
            if (p.ccw(x[j], y[j], x[j+1], y[j+1], ax, ay) == 0 && ((x[j] >= ax && x[j+1] < ax) || (x[j] < ax && x[j+1] >= ax))){
                wn = 0.5;
                break;
            }
            if (y[j] < ay) {
                if(y[j+1]>=ay){
                    if (p.ccw(x[j], y[j], x[j+1], y[j+1], ax, ay) > 0)
                        wn++;
                }
                
            }
            else{
                if (y[j+1] < ay){
                    if (p.ccw(x[j], y[j], x[j+1], y[j+1], ax, ay) < 0)
                        wn--;
                }
            }
        }
        return p.abs(wn);
    }
}


var myp5 = new p5(a2, 'c2');

