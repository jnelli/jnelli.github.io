
$.when(main()).done(function cat(){
 $('#cat').hide();
 $('#cat').fadeIn(1000);
});

function main(){
 $('#greetings').hide();
 $('#greetings').fadeIn(1000);
}


$(document).ready(main);
