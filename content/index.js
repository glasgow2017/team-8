/**
 * @todo fix not working when focus in text field
 * @todo fix some elements having higher tabbing priority than button (e.g. GitHub)
 */
$('body').ready( function () {
  $('body').prepend('<div id="screen-reader-summary"><a href="#scb-end" id="gsw17-8-sr-read">Read page from the start</a></div><div id="scb-end"></div>');
  
  $('#screen-reader-summary').focus();

  $(document).bind('keyup', 'ctrl+y', function () {
    $('#gsw17-8-sr-read').focus();
  });
});
