function normatize() {
  
  //menu buttons
  var $newButton = $('.new-image');
  
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
  
  function line(x, y, xx, yy, width, plus, color) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.moveTo(Number(x+plus), Number(y+plus));
  ctx.lineTo(Number(xx+plus), Number(yy+plus));
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();
}

function drawQuadricula() {
  width = 1;
  interval = 8;
  plus = ".5";
  color = "#3f3f3f";
  var yPosition = 0;
  var xPosition = 0;
  while (yPosition <= canvas.height) {
    new line(0, yPosition, canvas.width, yPosition, width, plus, color);
    yPosition += interval;
  }
  while (xPosition <= canvas.width) {
    new line(xPosition, 0, xPosition, canvas.height, width, plus, color);
    xPosition += interval;
  }
}
 
  function drawBackground() {
    ctx.beginPath();
    ctx.rect(0 , 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
  }
  
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground()
  }
  
  function drawRectangle(width, height) {
    clearCanvas();
    ctx.beginPath();
    ctx.rect(8 , 8, width, height);
    ctx.fillStyle = '#f1f1f1';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.closePath();
    drawQuadricula(); 
  }
  
  function houseSizes() {
    return {
    width: Number($('#width').val())*8,
    height: Number($('#height').val()*8)
    }
  }
  function generateRect() {
    if ($('#width').val().length > 0 && $('#height').val().length > 0) {
      drawRectangle(houseSizes().width, houseSizes().height);
    }
  }
  
  
  function init() {
    eventsHandler();
    clearCanvas();
    drawQuadricula(1, 10, ".5", "#ccc");  
  }
  
  function eventsHandler() {
    $('.generate').off('click');
    $('.generate').on('click', function(e) {
      e.preventDefault();
      generateRect()
    })
    
    $('#width, #height').off('keyup')
    $('#width, #height').on('keyup', function() {
      generateRect()
    })
    
    $('#width, #height').off('mouseup')
    $('#width, #height').on('mouseup', function() {
      generateRect()
    })
    
    $newButton.off('click');
    $newButton.on('click', function(e) {
      e.preventDefault();
      clearCanvas();
    })
  }
  
  init();
}
$(function() {
  normatize();
})
