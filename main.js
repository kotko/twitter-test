$(document).ready(function () {
  jQuery('body').on('submit', '.form-login', function(e){
     e.preventDefault();
     var form = $(this).serialize();
       jQuery.ajax({
         type: 'POST',
         url: 'https://kotko.github.io/login-test/',
         data: {
           action:  'login',
           data: form
         },
         beforeSend: function() {
         },
         success: function(response) {
         }
       });
   });
})
