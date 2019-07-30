/* eslint-env browser, mocha*/
var slideIndex = 1;
showSlides(slideIndex);
                    
function plusSlides(n){
    showSlides(slideIndex += n);
}
                    
function currentSlide(n){
    showSlides(slideIndex = n);
}
                    
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if(n > slides.length)
        {
            slideIndex=1;
        }
    if(n < 1)
        {
            slideIndex = slides.length;
        }
    for(i=0; i < slides.length; i++)
        {
            slides[i].style.display = "none";
        }
    for(i=0; i <dots.length; i++)
        {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex -1].className += " active";
}

//poem modal script
var poemModal = document.getElementById("poemModal");
var poemLink = document.getElementById("poemLink");
var poemText = document.getElementById("poemText");

poemLink.onclick = function(){
    poemModal.style.display = "block";
}

var span = document.getElementsByClassName("closePoem")[0];
span.onclick = function(){
    poemModal.style.display = "none";
}
