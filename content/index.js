// Global config
var config = {
  enabled: true
};

// Prefix of generated elements
var elPrefix = 't8-cfg_';

// Page structure definitions
var structureDefs = {
  header: [ 'header', '.header', 'div[role="banner"]' ],
  nav: [ 'nav', '.nav', 'div[role="navigation"]' ],
  footer: [ 'footer', '.footer', 'div[role="contentinfo"]' ]
}

// Get the config
function getConfig() {
  chrome.storage.sync.get('t8-config', function(obj) {
    config = obj['t8-config'];
  }.bind(this));
}

function getPluginEl(name) {
  return $("#" + elPrefix + name);
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
  }).removeAllEmpty();
}

$('body').ready( function () {
  // Populate structure
  var structure = {
    header: structureDefs.header.toJQueryEntities(),
    nav: structureDefs.header.toJQueryEntities(),
    footer: structureDefs.header.toJQueryEntities(),
  }

  // Add header section
  // $('body').prepend( '<div id="' + elPrefix + 'header" style="width: 100%; padding: 20px; text-align: center; background-color: #6ab7ff; color: #fff; position: fixed; z-index: 100000;"></div>' );
  //
  // var cfgHeader = getPluginEl('header');
  //
  //
  //
  // cfgHeader.append( '<h1>Code For Good</h1> ' )

});
