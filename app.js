console.log("connected to app.js");

$(document).ready(function(){
  // get initial value for each slider and set background
  function changeColor(){
    // console.log($(this));
    var red = $('#red').val();
    $('#redValue').text(red);
    var green = $('#green').val();
    $('#greenValue').text(green);
    var blue = $('#blue').val();
    $('#blueValue').text(blue);
    $('body').css('background-color', "rgb(" + red + "," + green + "," + blue +")");
  }
  changeColor();
  // change background color on change
  $('#red, #green, #blue').on('change', changeColor);

  // randomize
  $('button').on('click', function(){
    var red = Math.floor(Math.random()*255);
    $('#red').val(red);
    $('#redValue').text(red);
    var green = Math.floor(Math.random()*255);
    $('#green').val(green);
    $('#greenValue').text(green);
    var blue = Math.floor(Math.random()*255);
    $('#blue').val(blue);
    $('#blueValue').text(blue);
    $('body').css('background-color', "rgb(" + red + "," + green + "," + blue +")");

  });
});
