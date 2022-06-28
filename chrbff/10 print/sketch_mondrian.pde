
    int y = 1;
    void draw() {
      int x = frameCount%20*5;
      int c = int(random(2))*5;
     
     if (y==1){
      fill(255,255*int(random(1)),0);
     }
     
     if(y==2){
      fill(255*int(random(1)),0,255);
     }
     if(y==3){
      fill(255,255,255*int(random(1)));
     }
     
     if(int(random(6))>=1){
       fill(255,255,255);
     }
     
      rect(x+c,89,x+5-c,94);
      if (x==95) set(0,0,get(0,5,100,x));
      y = int(random(4));
    }
