random_number1 = Math.floor(Math.random() * 6)+1;
random_image1 = "dice"+random_number1+ ".png";
random_image_source1 = "images/"+ random_image1;
var image1 = document.querySelectorAll("img")[0].setAttribute("src",random_image_source1);

random_number2 = Math.floor(Math.random() * 6)+1;
random_image2 = "dice"+random_number2+ ".png";
random_image_source2 ="images/"+random_image2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src",random_image_source2);

if(random_number1 > random_number2){
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(random_number1 === random_number2){
  document.querySelector("h1").innerHTML = "Tie !!";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
