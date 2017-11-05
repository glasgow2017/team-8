// Adding accessibility to livechat

var baseTabIndex = 9001; // ITS OVER 9000!
var conversation; // active conversation
var nMessageIndex = 0;

$('body').ready( function() {
  // www.intercom.com
  setTimeout(function() {
    if ($('iframe[name=intercom-messenger-frame]') != undefined) {
      // Supports live chat! Lets make this accessible!

      // Get the conversation
      $('div[data-reactroot]').bind("DOMSubtreeModified", function() {
        // Check if iFrame is open
        var content = $('iframe[name=intercom-messenger-frame]').contents();
        setTimeout(function() { $('.intercom-conversation-summary', content).click();
          setTimeout(function() {
            var textarea = $('textarea[placeholder^="Write a reply');
            textarea.attr('aria-label', 'Write a live chat message');
            textarea.focus();

            // All messages
            var msgs = $('.intercom-conversation-part', content);
            // Init conversation if it doesn't exist
            if (nMessageIndex == 0) {
              nMessageIndex = msgs.length;
              for (var i = 0; i < msgs.length; i++) {
                var itm = $(msgs[i]);
                var aria = '';
                if (itm.hasClass('intercom-conversation-part-user')) {
                  aria = 'You said ' + itm.find('.intercom-comment').text() + ' at ' + $('.intercom-conversation-part-metadata-save-state', itm).text().replace('h', ' hours');
                } else {
                  aria = 'Live chat response: ' + itm.text() + '.';
                }
                itm.before( '<input type="text" id="cfg-t8_' + i + '" readonly style="height: 0; width: 0;" tabindex="' + baseTabIndex + i + '" aria-label="' + aria + '" />' );
              }
              setInterval(function() { checkForUpdates(msg); }.bind(this), 3000);
              return;
            }
            if (nMessageIndex <= msgs.length) return;
            while (nMessageIndex < msgs.length) {
              var message = $(msgs[nMessageIndex + 1])
              message.before( '<input type="text" id="cfg-t8_' + nMessageIndex + '" readonly style="height: 0; width: 0;" tabindex="' + baseTabIndex + nMessageIndex + '" aria-label="' + message.text() + '" />' );
              nMessageIndex++;
              addMessage().bind(this);
              $('cfg-t8_' + (nMessageIndex-1), content).focus();
            }
          }.bind(this), 1000);
        }.bind(this), 2000);
      }.bind(this));
    }
  }.bind(this), 1000);
}.bind(this));
