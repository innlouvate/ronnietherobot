// When eyes button is clicked, toggle laser class on brain
$('.flash').click(function() {
  $('.brain').toggleClass('laser');
});

// When color button is clicked...
$('.color').click(function() {
  // assign each named color a random number 0-255
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  //combine colours
  var randomRGBA = 'rgba('+red+', '+green+', '+blue+', 1)';
  $('body').css('background', randomRGBA);
  //Display the three values in an alert window
  //alert(randomRGBA);
});

//When dance button it clicked, toggle dancing class on robot
$('.moves').click(function() {
  $('.allmoves').toggleClass('dancing');
});

//function to create random dialogue
$('.robot').click(function() {
  //create choice of comments
  var caption = ['Why are you hitting me?', 'What did I do?', 'Stop that!', 'Oi!!!', 'I am going to get angry'];
  //generate random array index
  var captionChoice = Math.floor(Math.random() * 5);
  //get comment and display
  $('.talk').html(caption[captionChoice];

});
