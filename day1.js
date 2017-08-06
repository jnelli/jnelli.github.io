function main(){
 $('#greetings').hide();
 $('#greetings').fadeIn(1000);
}

$('#cat').hide();

$.when(main).then(function cat(){
 $('#cat').fadeIn(1000);
});


$(document).ready(main);
