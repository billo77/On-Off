/* ----------------hide--show----------  
  function hideShow(){
    var getElement=document.querySelector('#picture');
    if(getElement.style.display=="none"){
        getElement.style.display="block";
    }else{
        getElement.style.display="none";
    }
} ----------------------------*/

function openLight() {
  document.getElementById('picture').src = "on.png", width = "110", height = "180";
}
function closeLight() {
  document.getElementById('picture').src = "off.png", width = "110", height = "180";
}