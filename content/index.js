/**
 * @todo fix not working when focus in text field
 * @todo fix some elements having higher tabbing priority than button
 */
$('body').ready( function () {
  $('body').prepend('<div id="screen-reader-summary"><button id="gsw17-8-sr-read">Start reading</button></div>');
  
  $('#screen-reader-summary').focus();

  $(document).bind('keyup', 'ctrl+y', function () {
    $('#gsw17-8-sr-read').focus();
  });
});
