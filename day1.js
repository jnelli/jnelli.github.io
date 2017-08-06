function main(){
 $('#greetings').hide();
 $('#greetings').fadeIn(1000);
}

function cat(){
 $('#cat').hide();
 $('#cat').fadeIn();
}

$(document).ready(main);
$(document).ready(cat);
