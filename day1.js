 function main(){
  $('#greetings').hide();
  $('#greetings').fadeIn(1000);
 }
   
  function cat(){
   $('#cat').hide();
  $('#cat').fadeIn(1000);
  $('#cat').delay(2000).fadeIn(1000);
  }
  
  $(document).ready(main);
  $(document).ready(cat);

