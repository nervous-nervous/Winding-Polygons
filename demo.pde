
void setup(){
  println("Start now!");
  size(1920,1080);
  smooth();
  draw_button();
  textSize(100);
  textAlign(CENTER);
}

int i= 0;
int[] pos = new int[1000];


void draw(){
  
      //while(true){
        //print("111");
        int x, y;
      if(mousePressed){
        
          x = mouseX;
          y = mouseY;
          //println(x);println(y);
         
          if(i==0){
            pos[0] = x;
            pos[1] = y;
            i = i+2;
            ellipse(x,y,9,9);
          }
          else if(i!=0&&(abs(x-pos[i-2]))>5&&(abs(y-pos[i-1]))>5){
            //println(x+' '+y);
            pos[i] = x;
            pos[i+1]=y;
               //x, y x, y
            line(pos[i-2],pos[i-1],pos[i],pos[i+1]);
            i=i+2;
           ellipse(mouseX,mouseY,9,9);
        }
      }
      if(i!=0&&pos[i]==pos[0]&&pos[i+1]==pos[1]){
        //break;
        print(11);
      }
     draw_2();
     print(i);
      //print("333");
 // }
    
}

void draw_2(){
  print("**********************");
    for(int j=0;j<100;j=j+2){
      println(pos[j],pos[j+1]);
    }
}

void draw_button(){
// finish button: connect with the origin
fill(255,255,255);
// center(x, y), width, height
rect(width/2,50,200,100);
fill(0);
text("FINISH POLYGON",width/2,90);
// view point: set veiw point 
fill(255,255,255);
rect(width/2+300,50,200,100);
fill(0);
text("SET Viewpoint",width/2+300,90);
// start button: begin program
fill(255,255,255);
rect(width/2-300,50,200,100);
fill(0);
text("START",width/2-300,90);
}

void on_button(){

}
