$('body').ready(function () {
  displayTopBanner();
  
  const strPageText = extractTextFromPage($('body'));

  // const sentences = getSummary(strPageText, 'Page text', 4); // TMP
  const sentences = ["US President Donald Trump has arrived in Japan at …ietnam and the Philippines also on his itinerary.", "President Trump arrived at the Yokota US Air Force base west of Tokyo on Sunday morning.", "Bilateral meetings with Mr Abe↵↵Tuesday, 7 Novembe…South Korea for talks with President Moon Jae-in.", "Mr Trump will also address the National Assembly↵↵… gathering that includes the US, India and Russia"]; // TMP
  console.log(sentences);

  var html = '<ul>';
  for (var i = 0; i < sentences.length; i++) {
    html += '<li>' + sentences[i] + '</li>';
  }
  html += '</ul>';
  
  $(document).ready(function () {
    // $('#t8-cfg_header').prepend(html);

    });

});