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

var styles =
`<style>

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color:
</style>`;

var styles = {
  fontFamily: 'font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Helvetica, Arial, sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\';',
  textColor: 'color=#fff;',
  fontWeight: 'font-weight: 100;',
}
styles.font = styles.fontFamily + styles.textColor + styles.fontWeight;

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

$('body').ready( function () {
  if (config.enabled) {
    // Populate structure
    var structure = {
      header: structureDefs.header.toJQueryEntities(),
      nav: structureDefs.header.toJQueryEntities(),
      footer: structureDefs.header.toJQueryEntities(),
    }

    // Add header section
    $('body').prepend( '<div id="' + elPrefix + 'header" style="width: 300px; padding: 20px; text-align: center; background-color: #3949ab; color: #fff; position: fixed; z-index: 100000; left: 10px; top: 70px; border-radius: 5px; box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);" tabindex="1"></div>' );

    var cfgHeader = getPluginEl('header');
    cfgHeader.append( '<h3 style="font-size: 20px;' + styles.font + '">' + strings.en.widget_title + '</h3> ' );
    cfgHeader.append( '<h4 style="font-size: 16px;' + styles.font + '">' + strings.en.summary + '</h4><p style="' + styles.font + '" id="' + elPrefix + 'summary"></p>' );
    cfgHeader.append( '<h4 style="font-size: 16px;' + styles.font + '">' + strings.en.structure + '</h4><ul style="' + styles.font + '" id="' + elPrefix + 'nav"></ul>' );
  }

 });
