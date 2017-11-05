// Adding accessibility to livechat

var baseTabIndex = 9001; // ITS OVER 9000!
var conversation; // active conversation

class Conversation {

  constructor(conv_html) {
    // Start at the message index
    this.nMessageIndex = conv_html.length;

    for (var i = 0; i < conv_html.length; i++) {
      conv_html[i].before( '<input type="text" readonly style="height: 0; width: 0;" tabindex="' + baseTabIndex + this.messageIndex + '" aria-label="' + x.text() + '" />' );
    }
  }

  addMessage(message) {
    message.before( '<input type="text" readonly style="height: 0; width: 0;" tabindex="' + baseTabIndex + this.messageIndex + '" aria-label="' + x.text() + '" />' );
  }

}

function update(conv_html) {

}

$('body').ready( function() {
  // www.intercom.com
  if ($('iframe[name=intercom-messenger-frame]') != undefined) {
    // Supports live chat! Lets make this accessible!

    // Get the conversation
    $('div[data-reactroot]').change(function() {
      // Check if iFrame is open
      var content = $('iframe[name=intercom-messenger-frame]').contents();

      if ($('.intercom-launcher', content) != null) {
        // This is the button not the main stuff
        return; // ain't nobody got time for that
      } else {
        // All messages
        var msgs = $('.intercom-conversation-part', content);
        // Init conversation if it doesn't exist
        if (conversation == null) {
          conversation = new Conversation(msgs);
          return;
        }
        if (conversation.nMessageIndex <= msgs.length) return;
        while (conversation.nMessageIndex < msgs.length) {
          conversation.addMessage(msgs[conversation.nMessageIndex + 1]);
        }
      }
    }.bind(this));
  }

}.bind(this));
