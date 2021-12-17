let containers = document.getElementsByClassName('wrapper');

for (let i = 0; i < containers.length; i++) { 
    //addElement(i);
    if(i == 0|i == 2| i == 4){
      for(let j = 0; j<5; j++){
        addElement(i,j);
      }    
    } else {
      for(let j = 0; j<6; j++){
        addElement(i,j);
      }   
    }
    
}




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function addElement(row,index) {
  let newSpan = document.createElement("span");
  newSpan.classList.add("brick"+getRandomInt(1,4));
  newSpan.setAttribute("id","id"+row+"_"+index);
  containers[row].appendChild(newSpan); 
}

//document.getElementById('id2').innerHTML += '2F';

$(document).ready(function(){
  $(document).mousemove(function(event){
     $("#light").css({"top": event.pageY - 250, "left": event.pageX - 250}); 
  }); 
});

