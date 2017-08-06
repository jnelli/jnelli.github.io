function main(){
 $('#greetings').hide();
 $('#cat').hide();
 $('#greetings').fadeIn(1000);
}
 
function cat(){
 $('#cat').delay(2000).fadeIn(1000);
}

$(document).ready(main);
$(document).ready(cat);
