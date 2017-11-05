// Adding accessibility to livechat

const baseTabIndex = 9001; // ITS OVER 9000!
let conversation; // active conversation
let nMessageIndex = 0;

function addMessage(message) {
  message = $(message);
  message.before(`<input type="text" readonly style="height: 0; width: 0;" tabindex="${baseTabIndex}${nMessageIndex}" aria-label="${message.text()}" />`);
  nMessageIndex++;
}

$('body').ready(() => {
  // www.intercom.com
  setTimeout(() => {
    if ($('iframe[name=intercom-messenger-frame]') != undefined) {
      // Supports live chat! Lets make this accessible!

      // Get the conversation
      $('div[data-reactroot]').bind('DOMSubtreeModified', () => {
        // Check if iFrame is open
        const content = $('iframe[name=intercom-messenger-frame]').contents();
        setTimeout(() => {
          $('.intercom-conversation-summary', content).click();
          setTimeout(() => {
            // All messages
            const msgs = $('.intercom-conversation-part', content);
            // Init conversation if it doesn't exist
            if (nMessageIndex == 0) {
              nMessageIndex = msgs.length;

              for (let i = 0; i < msgs.length; i++) {
                const itm = $(msgs[i]);
                itm.before(`<input type="text" readonly style="height: 0; width: 0;" tabindex="${baseTabIndex}${i}" aria-label="${itm.text()}" />`);
              }
              return;
            }
            if (nMessageIndex <= msgs.length) return;
            while (nMessageIndex < msgs.length) {
              addMessage(msgs[nMessageIndex + 1]).bind(this);
            }
          }, 1000);
        }, 2000);
      });
    }
  }, 1000);
});
