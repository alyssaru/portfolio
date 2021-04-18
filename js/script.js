
const change = src => {
  document.getElementById('mainImg').src = src;
  document.getElementById('download').href = document.getElementById('mainImg').src;
};


document.querySelector("#coachArrow").addEventListener("click", function() {
  console.log("clicked");
  toChange = document.querySelector(".coaches");
  if(toChange.style.visibility=='hidden'){
    toChange.style.visibility='visible';
    toChange.style.height='initial';
    document.querySelector("#coachArrow").src="imgs/uArrow.png"
  }else{
    toChange.style.visibility='hidden'; 
    toChange.style.height=0;
    document.querySelector("#coachArrow").src="imgs/dArrow.png"}
});

document.querySelector("#maizeArrow").addEventListener("click", function() {
  console.log("clicked");
  toChange = document.querySelector(".maize");
  if(toChange.style.visibility=='hidden'){
    toChange.style.visibility='visible';
    toChange.style.height='initial';
    document.querySelector("#maizeArrow").src="imgs/uArrow.png"
  }else{
    toChange.style.visibility='hidden'; 
    toChange.style.height=0;
    document.querySelector("#maizeArrow").src="imgs/dArrow.png"}
});

document.querySelector("#blueArrow").addEventListener("click", function() {
  console.log("clicked");
  toChange = document.querySelector(".blue");
  if(toChange.style.visibility=='hidden'){
    toChange.style.visibility='visible';
    toChange.style.height='initial';
    document.querySelector("#blueArrow").src="imgs/uArrow.png";
  }else{
    toChange.style.visibility='hidden'; 
    toChange.style.height=0;
    document.querySelector("#blueArrow").src="imgs/dArrow.png"}
});
