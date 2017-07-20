//define functions here

function getIt(){
  $('p').on("click", function(){
    alert('pressed');
  })
}

function frameIt(){
  $('img').addClass('tasty');
}

function submitIt(){
  $('form').on("submit", function(){
    console.log('Your form is going to be submitted now.')
    alert('Your form is going to be submitted now.')
  })
}
function pressIt(){
  $(document).on('keydown', function(key){
    if(key.which === 71){
      alert('pressed G');
    }
  })
}


$(document).ready(function(){

// call functions here
getIt
frameIt
submitIt
});
