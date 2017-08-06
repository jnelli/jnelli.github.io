var paused = true;

function main(){
 var paused = true;
 $('#greetings').hide();
 $('#greetings').fadeIn(1000);
 var paused = false;
}


function cat(){
 var paused = false;
 if (paused === false){
 $('#cat').hide();
 $('#cat').fadeIn(1000);
 } 
}

$(document).ready(main);
$(document).ready(cat);
