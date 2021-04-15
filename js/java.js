
document.querySelector("#mainImg").addEventListener("click", function(){
	console.log("clicked");
	var img = document.getElementById("#mainImg");
	function enlargeImg() {
        // Set image size to 1.5 times original
        img.style.transform = "scale(1.5)";
        // Animation effect 
        img.style.transition = "transform 0.25s ease";
      }
});