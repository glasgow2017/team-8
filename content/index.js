// Global config
var config = {
<<<<<<< HEAD
  enabled: true
=======
    enabled: true
>>>>>>> master
};

// Prefix of generated elements
var elPrefix = 't8-cfg_';

// Page structure definitions
var structureDefs = {
<<<<<<< HEAD
  header: [ 'header', '.header', 'div[role="banner"]' ],
  nav: [ 'nav', '.nav', 'div[role="navigation"]' ],
  footer: [ 'footer', '.footer', 'div[role="contentinfo"]' ]
=======
    header: ['header', '.header', 'div[role="banner"]'],
    nav: ['nav', '.nav', 'div[role="navigation"]'],
    footer: ['footer', '.footer', 'div[role="contentinfo"]']
>>>>>>> master
}

// Get the config
function getConfig() {
<<<<<<< HEAD
  chrome.storage.sync.get('t8-config', function(obj) {
    config = obj['t8-config'];
  }.bind(this));
}

function getPluginEl(name) {
  return $("#" + elPrefix + name);
=======
    chrome.storage.sync.get('t8-config', function(obj) {
        config = obj['t8-config'];
    }.bind(this));
}

function getPluginEl(name) {
    return $("#" + elPrefix + name);
>>>>>>> master
}

// Remove empty elements from array
Array.prototype.removeAllEmpty = function() {
<<<<<<< HEAD
  for (var i = 0; i < this.length; i++) {
    if (this[i] == undefined) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
=======
    for (var i = 0; i < this.length; i++) {
        if (this[i] == undefined) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
>>>>>>> master
}

// Get page elements from selectors
Array.prototype.toJQueryEntities = function() {
<<<<<<< HEAD
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
=======
    return this.map(function(x) {
        var c = $(x);
    }).removeAllEmpty();
}

$('body').ready(function() {
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
>>>>>>> master

});