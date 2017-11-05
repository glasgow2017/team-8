// Adding accessibility to livechat

var baseTabIndex = 9001; // ITS OVER 9000!
var conversation; // active conversation
var nMessageIndex = 0;

function addMessage(message) {
  message = $(message)
  message.before( '<input type="text" readonly style="height: 0; width: 0;" tabindex="' + baseTabIndex + nMessageIndex + '" aria-label="' + message.text() + '" />' );
  nMessageIndex++;
}

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
            // All messages
            var msgs = $('.intercom-conversation-part', content);
            // Init conversation if it doesn't exist
            if (nMessageIndex == 0) {
              nMessageIndex = msgs.length;

              for (var i = 0; i < msgs.length; i++) {
                var itm = $(msgs[i]);
                itm.before( '<input type="text" readonly style="height: 0; width: 0;" tabindex="' + baseTabIndex + i + '" aria-label="' + itm.text() + '" />' );
              }
              return;
            }
            if (nMessageIndex <= msgs.length) return;
            while (nMessageIndex < msgs.length) {
              addMessage(msgs[nMessageIndex + 1]).bind(this);
            }
          }.bind(this), 1000);
        }.bind(this), 2000);
      }.bind(this));
    }
  }.bind(this), 1000);
}.bind(this));
