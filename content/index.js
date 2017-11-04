
$('body').ready( function () {
  $('body').prepend('<p id="screen-reader-summary">This is placeholder screen-reader text which will be used to display the summary of the page.</p>');
  
  $('#screen-reader-summary').focus();
});
