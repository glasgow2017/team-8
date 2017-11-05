const displayTopBanner = function fDisplayTopBanner() {
  // Global config
  const config = {
    enabled: true,
  };

  // Prefix of generated elements
  const elPrefix = 't8-cfg_';

  // Page structure definitions
  const structureDefs = {
    header: ['header', '.header', 'div[role="banner"]'],
    nav: ['nav', '.nav', 'div[role="navigation"]'],
    footer: ['footer', '.footer', 'div[role="contentinfo"]'],
  };

  // i18n support ;)
  const strings = {
    en: {
      widget_title: 'Quick access',
      summary: 'Summary',
      structure: 'Page structure',
    },
  };

  const styles = `<style>
    #t8-cfg_header {
      all:unset;
      width: 300px;
      padding: 0;
      text-align: center;
      background-color: #3949ab;
      color: #fff;
      position: fixed;
      z-index: 100000;
      left: 10px;
      top: 70px;
      border-radius: 5px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      padding: 20px;
    }

    .t8-cfg_padding-nobot {
      padding: 20px 20px 0px 20px;
    }

    #t8-cfg_header h3 {
      font-size: 33px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      color=#fff;
      font-weight: 100;
    }

    #t8-cfg_header h4 {
      font-size: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      color=#fff;
      font-weight: 100;
      padding: 10px;
    }

    #t8-cfg_header p {
      text-align: left;
    }

    #t8-cfg_summary {
      text-align: center;
    }

    .geniessen-anchor {
      overflow: hidden;
      height: 0;
      width: 0;
      display: inline-block;
      position: relative;
    }
  </style>`;

  // Get the config
  function getConfig(callback) {
    chrome.storage.sync.get('t8-config', function(obj) {
      config = obj['t8-config'];
      callback(config);
    }.bind(this));
  }

  function getPluginEl(name) {
    return $(`#${elPrefix}${name}`);
  }

  // Remove empty elements from array
  Array.prototype.removeAllEmpty = function () {
    for (let i = 0; i < this.length; i++) {
      if (this[i] == undefined) {
        this.splice(i, 1);
        i--;
      }
    }
    return this;
  };

  // Get page elements from selectors
  Array.prototype.toJQueryEntities = function () {
    return this.map((x) => {
      const c = $(x);
    }).removeAllEmpty();
  };

  function setSummary(text) {
    getPluginEl('summary').text(text);
  }

  function addNavigationItem(title, anchor) {
    getPluginEl('nav').append(`<a href="#${anchor}"><li>${title}</li></a>`);
  }

  function addAnchorToElement(name, el) {
    el.before(`<a name="${elPrefix}${name}" />`);
    return elPrefix + name;
  }

  $('body').ready(() => {
    if (config.enabled) {
      // Populate structure
      const structure = {
        header: structureDefs.header.toJQueryEntities(),
        nav: structureDefs.header.toJQueryEntities(),
        footer: structureDefs.header.toJQueryEntities(),
      };

      // Add header section
      $('body').prepend(`${styles}<div id="${elPrefix}header" tabindex="1"></div>`);

      $sections = getPageSections();
      $('#' + elPrefix + 'header').prepend('<ul id="geniessen-quick-access"></ul>');
      if (null !== $sections[0]) {
        if (undefined === $sections[0].attr('id')) {
          $sections[0].attr('id', 'geniessen-header');          
        }     
        $('#geniessen-quick-access').append('<li><a href="#' + $sections[0].attr('id') + '">Header</a></li>');
      }
      if (null !== $sections[1]) {
        if (undefined === $sections[1].attr('id')) {
          $sections[1].attr('id', 'geniessen-navbar');          
        }        
        $('#geniessen-quick-access').append('<li><a href="#' + $sections[1].attr('id') + '">Navigation Bar</a></li>');
      }
      if (null !== $sections[2]) {
        if (undefined === $sections[2].attr('id')) {
          $sections[2].attr('id', 'geniessen-main-content');          
        }         
        $('#geniessen-quick-access').append('<li><a href="#' + $sections[2].attr('id') + '">Main Content</a></li>');
      }
      if (null !== $sections[3]) {
        if (undefined === $sections[3].attr('id')) {
          $sections[3].attr('id', 'geniessen-footer');          
        }
        $('#geniessen-quick-access').append('<li><a href="#' + $sections[3].attr('id') + '">Footer</a></li>');
      }
    }
  });
};
