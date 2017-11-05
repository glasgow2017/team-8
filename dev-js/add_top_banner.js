const displayTopBanner = function fDisplayTopBanner() {
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
  
  // i18n support ;)
  var strings = {
    en: {
      widget_title: 'Quick access',
      summary: 'Summary',
      structure: 'Page structure',
    }
  }
  
  var styles =`<style>
    #t8-cfg_header {
      width: 300px;
      padding: 20px;
      text-align: center;
      background-color: #3949ab;
      color: #fff;
      position: fixed;
      z-index: 100000;
      left: 10px;
      top: 70px;
      border-radius: 5px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      opacity: 0.2; /* TMP */
    }
  
    #t8-cfg_header h3 {
      font-size: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      color=#fff;
      font-weight: 100;
    }
  
    #t8-cfg_header h4 {
      font-size: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      color=#fff;
      font-weight: 100;
    }
  </style>`;
  
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
  
  function setSummary(text) {
    getPluginEl('summary').text(text);
  }
  
  function addNavigationItem(title, anchor) {
    getPluginEl('nav').append( '<a href="#' + anchor + '"><li>' + title + '</li></a>' );
  }
  
  function addAnchorToElement(name, el) {
    el.before( '<a name="' + elPrefix + name + '" />' );
    return elPrefix + name;
  }
  
  $('body').ready( function () {
    if (config.enabled) {
      // Populate structure
      var structure = {
        header: structureDefs.header.toJQueryEntities(),
        nav: structureDefs.header.toJQueryEntities(),
        footer: structureDefs.header.toJQueryEntities(),
      }
  
      // Add header section
      $('body').prepend( styles + '<div id="' + elPrefix + 'header" tabindex="1"></div>' );
  
      var cfgHeader = getPluginEl('header');
      cfgHeader.append( '<h3>' + strings.en.widget_title + '</h3> ' );
      cfgHeader.append( '<h4>' + strings.en.summary + '</h4><p id="' + elPrefix + 'summary"></p>' );
      cfgHeader.append( '<h4>' + strings.en.structure + '</h4><ul id="' + elPrefix + 'nav"></ul>' );
  
      if (structure.header.length > 0)
        addNavigationItem('Jump to Header', addAnchorToElement(structure.header[0]));
  
      if (structure.nav.length > 0)
        addNavigationItem('Jump to Navigation', addAnchorToElement(structure.nav[0]));
  
      if (structure.footer.length > 0)
        addNavigationItem('Jump to Footer', addAnchorToElement(structure.footer[0]));
    }
  });
}
