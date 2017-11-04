// Global config
var config = {
  enabled: true
};

// Page structure definitions
var structureDefs = {
  header: [ 'header', '.header', 'div[role="banner"]' ],
  nav: [ 'nav', '.nav', 'div[role="navigation"]' ],
  footer: [ 'footer', '.footer', 'div[role="contentinfo"]' ]
}

// Get the config
function getConfig() {
  chrome.storage.sync.get('t8-config', function(obj) {
    config = obj;
  }.bind(this));
}

// Remove empty elements from array
Array.prototype.removeAllEmpty = function() {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == undefined) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
}

// Get page elements from selectors
Array.prototype.toJQueryEntities = function() {
  return this.map(function (x) {
    var c = $(x);
    c.removeAllEmpty(); // Remove empty
  });
}

$('body').ready( function () {
  //$('body').prepend('<p id="screen-reader-summary">This is placeholder screen-reader text which will be used to display the summary of the page.</p>');

  $('#screen-reader-summary').focus();

  // Header management
  var headerSelectors = ['header', 'div[role="banner"]'];
  // Find a header to prepend
  var header = $(headerSelectors[0]);
  for (var i = 0; i < headerSelectors.length; i++) {
    if (header == undefined) {
      header = headerSelectors[i];
    } else {
      break;
    }
  }

  hideHeaders();

  // Select a header
  header.before( '<div id="header-show" style="width: 100%; padding: 20px; text-align: center; background-color: #6ab7ff"><button id="header-show-btn" style="padding: 20px; background-color: #1e88e5; color: #fff; font-size: 0.875rem; font-weight: 700; display: inline-block; min-width: 200px; text-transform: uppercase; border-radius: 9999em; font-family: Helvetica, Arial, sans-serif; text-align: center; vertical-align: middle; border: 0 none; outline: none;">Display header</button></div>' );

  $('#header-show-btn').click(showHeaders);
});
