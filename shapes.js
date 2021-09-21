var clicks = 0;
var canvas; 
var ctx;
var number = 5; 
var squareInt;
var circleInt;
var done = 0;
var arrayX = [];
var arrayY = [];
var i = 0;
var j = 0;
var h = 0;
const maxClicks = 5;
var coords;
const currentShape = [];
const numberArray = [];
var createIt;
function showCoords(event) {
    
    j=0;
    if(i<maxClicks){
    arrayX[i] = event.clientX;
    arrayY[i] = event.clientY;
    coords = "X coordinate: " + arrayX[i] + ", Y coordinate: " + arrayY[i];
    document.getElementById("demo").innerHTML = coords;
    
   
    }
    i++;
   
    //event.stopPropagation();
   }
function shapeGenerator(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  
  while(j<maxClicks){
    number = Math.floor(Math.random()* 2)
       if(number==0){
        ctx.fillStyle = colorGenerator();
        ctx.fillRect((arrayX[j]-740), (arrayY[j]-260), Math.floor(Math.random()* 200), Math.floor(Math.random()* 200));
        ctx.lineWidth= 20;
        clicks++;
        numberArray[j] = 0;
        j++;
        
       } else if(number == 1){
        ctx.beginPath()
        ctx.arc((arrayX[j]-720), (arrayY[j]-240), Math.floor(Math.random()* 100), 0,2 * Math.PI);
        ctx.strokeStyle = colorGeneratortwo();
        ctx.fillStyle = colorGenerator();
        ctx.lineWidth = 5;
        ctx.fill();
        ctx.stroke();
        numberArray[j] = 1;
       
        clicks++;
        j++;
        
      } 
      
      
    }
    createIt = setInterval(shapeClear,2000);
  }
function shapeClear(){
  
    j = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapeLoop();  
    }
function shapeLoop(){
      canvas = document.getElementById('canvas');
      ctx = canvas.getContext('2d');
      
      while(j<maxClicks){
       
           if(numberArray[j]==0){
            ctx.fillStyle = colorGenerator();
            ctx.fillRect((arrayX[j]-740), (arrayY[j]-260), Math.floor(Math.random()* 200), Math.floor(Math.random()* 200));
            ctx.lineWidth= 20;
            clicks++;
            j++;
            
           } else if(numberArray[j] == 1){
            ctx.beginPath()
            ctx.arc((arrayX[j]-720), (arrayY[j]-240), Math.floor(Math.random()* 100), 0,2 * Math.PI);
            ctx.strokeStyle = colorGeneratortwo();
            ctx.fillStyle = colorGenerator();
            ctx.lineWidth = 5;
            ctx.fill();
            ctx.stroke();
            numberArray[j] = 1;
           
            clicks++;
            j++;
            
          } 
          
          
        }
        
      }

function alerted(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //clearInterval(createIt);
  clicks = 0;
  i = 0;
  h = 0;
  hideMe();
  arrayX[0] = 0;
  arrayX[1] = 0;
  arrayX[2] = 0;
  arrayX[3] = 0;
  arrayX[4] = 0;
  arrayY[0] = 0;
  arrayY[1] = 0;
  arrayY[2] = 0;
  arrayY[3] = 0;
  arrayY[4] = 0;
  location.reload();
 }

function colorGenerator(){

        var colors = 0;
        colors = Math.floor(Math.random()* 8)

        if(colors == 0){
        return "blue";
        }
        else if(colors == 1){
        return "yellow";
        }
        else if(colors == 2){
        return "purple";
        }
        else if(colors==4){
        return "red";
        }
        else if(colors==5){
        return "pink";
        }
        else if(colors==6){
        return "orange";
        }
        else if(colors==7){
        return "violet";
        }
    }
    
function colorGeneratortwo(){
            var colors = 0;
            colors = Math.floor(Math.random()* 8)
    
            if(colors == 0){
            return "grey";
            }
            else if(colors == 1){
            return "azure";
            }
            else if(colors == 2){
            return "cadetblue";
            }
            else if(colors==4){
            return "coral";
            }
            else if(colors==5){
            return "cyan";
            }
            else if(colors==6){
            return "burlywood";
            }
            else if(colors==7){
            return "charteuse";
            }
}

function hideMe(){
 if(done<1){
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
    done++;
  } else {
    x.style.display = "none";
    done++;
  }
}
}
  


