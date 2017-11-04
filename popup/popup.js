var config;

chrome.storage.sync.get('t8-config', function(obj) {
  config = obj['t8-config'] || { enabled: false };
  $('#enabled-checkbox').prop('checked', config.enabled);
}.bind(this));

$('#enabled-checkbox').click(function() {
    config.enabled = $('#enabled-checkbox').is(':checked');
    chrome.storage.sync.set({ 't8-config': config });
}.bind(this));
