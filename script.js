for (let i = 0; i < 30; i++) { 
    addElement(i);
}




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function addElement(index) {
  let newSpan = document.createElement("span");
  newSpan.classList.add("brick"+getRandomInt(1,4));
 
  newSpan.setAttribute("id","id"+index);
  let container = document.getElementById('wrapper');
  
    container.appendChild(newSpan);  
  
}

//document.getElementById('id2').innerHTML += '2F';

$(document).ready(function(){
  $(document).mousemove(function(event){
     $("#light").css({"top": event.pageY - 250, "left": event.pageX - 250}); 
  }); 
});

