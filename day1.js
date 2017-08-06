function main(){
 $('#greetings').hide();
 $('#greetings').fadeIn(1000);
}

function cat(){
 $('#cat').hide(2000);
 $('#cat').fadeIn(1000);
}

$(document).ready(main);
$(document).ready(cat);
