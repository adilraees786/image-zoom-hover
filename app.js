var zoom = document.getElementById('img')

zoom.addEventListener("mouseenter" , function(){
    zoom.style.transform = "scale(1.1)";
    zoom.style.transform= "1s";

});

zoom.addEventListener("mouseleave", function(){
    zoom.style.transform = "scale(1)"
    zoom.style.transform = "1s"
});