
    int s=40;
    void setup() {
      size(640,480);
      background(255);
     
      colorMode(HSB);
    }
    void draw() {
      filter(ERODE);filter(ERODE);
      tint(230);
      image(get(),0,5);
     
      strokeWeight(15);
      strokeCap(PROJECT);
     
      for(int x=0; x < width; x+=s) {
        for(int y=0; y < height; y+=s) {
          stroke(map(y,0,height,90,120),255,200);
          if(noise(x/50f,y/50f,frameCount/100f)>0.5) {
            line(x,y,x+s,y+s);
          } else {
            line(x+s,y,x,y+s);
          }
        }
      }
    }
