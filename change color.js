
function setup() 
{
  createCanvas(400,400,400,400);
}


 


function draw() 
{
  background("blue");
  drawsprites;
  if(keyIsDown(UP_ARROW))
  {
   background ("green");
  
  }
  if(keyIsDown(DOWN_ARROW))
  {
   background ("pink");
  
  }

  if(keyIsDown(RIGHI_ARROW))
  {
   background ("yellow");

  }

  if(keyIsDown(LEFT_ARROW))
  {
   background ("skyBlue");

  }



}


