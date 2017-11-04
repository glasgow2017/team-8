(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @todo fix not working when focus in text field
 * @todo fix some elements having higher tabbing priority than button (e.g. GitHub)
 */
$('body').ready( function () {
  $('body').prepend('<div id="screen-reader-summary"><a href="#scb-end" id="gsw17-8-sr-read">Read page from the start</a></div><div id="scb-end"></div>');
  
  $('#screen-reader-summary').focus();

  $(document).bind('keyup', 'ctrl+y', function () {
    $('#gsw17-8-sr-read').focus();
  });
});
},{}]},{},[1]);
