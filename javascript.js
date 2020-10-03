var numsquares = 6;
var colors = generateRandomColors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected"); 
  easyBtn.classList.add("selected");
  numsquares = 3;
  colors = generateRandomColors(numsquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
    if(colors[i]){
        squares[i].style.background = colors[i];
    }
    else{
        squares[i].style.display = "none";
    }
}
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numsquares = 6;
    colors = generateRandomColors(numsquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    
}
});

resetButton.addEventListener("click" , function(){
   // generate all new colors
   colors = generateRandomColors(numsquares);
   //pick a new color from array
   pickedColor = pickColor();
   //change color display to match picked color
   colorDisplay.textContent = pickedColor;
   this.textContent = "New Colors";
   messageDisplay.textContent = "";
   //change colors of squares
   for(var i=0;i<squares.length;i++){
       squares[i].style.background=colors[i];
   }
   h1.style.backgroundColor = "steelblue"; 
})



colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
     var clickedColor=this.style.background;
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "PLAY AGAIN?";
			for(var i = 0; i < squares.length; i++) {
                //change each color to match given color
                squares[i].style.background = clickedColor;
                h1.style.background = clickedColor;
		
         }
        }
        
         else{
         this.style.backgroundColor= "#232323";
         messageDisplay.textContent="Try Again";
        }
               
     });

    }
    function pickColor(){
      var random = Math.floor(Math.random() * colors.length);
      return colors[random];
    }

    function generateRandomColors(num) {
        var arr=[];
        for(var i=0; i<num; i++){
            arr.push(randomColor());
        }
        return arr;
    }

    function randomColor() {
        var r=Math.floor(Math.random() * 256);
        var g=Math.floor(Math.random() * 256);
        var b=Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " +g + ", " + b + ")";
    }





