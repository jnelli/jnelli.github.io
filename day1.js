var catTimer = scope.setTimeout(cat()[, 3000]);

function main(){
 $('#greetings').hide();
 $('#greetings').fadeIn(1000);
}

function cat(){
 $('#cat').hide();
 $('#cat').fadeIn(1000);
}

$(document).ready(main);
$(document).ready(cat);
