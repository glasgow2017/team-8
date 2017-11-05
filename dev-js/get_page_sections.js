const getElement = function fGetElement(strParentSelector, strElementSelector, intDepth) {
  for (var i = 0; i < intDepth; i++) {
    var finalSelector = strParentSelector;
    for (var j = 0; j <= i; j++) {
      finalSelector += ' > ';
    }
    finalSelector += strElementSelector;
    $element = $(finalSelector);
    if (0 !== $element.length) {
      return $element;
    }
  }
  return null;
};

/**
 * @todo to improve  
 */
const getNavigationRating = function fGetNavigationRating($element) {
  const intNLinks = $element.find('a').length;
  const intNElements = $element.find('*:not(:contains(a))').length;
  return intNLinks / intNElements;
}

const numberOfIn = function fNumberOfIn(value, arrayOfValues) {
  var intCount = 0;
  for (var i = 0; i < arrayOfValues.length; i++) {
    if (value === arrayOfValues[i]) {
      intCount++;
    }
  }
  return intCount;
}

const getPageSections = function fGetPageSections() {

  // HTML5
  var $header = getElement('body', 'header', 3);
  var $nav = getElement('body', 'nav', 3);
  var $main = getElement('body', 'main', 3);
  var $footer = getElement('body', 'footer', 3);

  if (numberOfIn(null, [$header, $nav, $main, $footer]) <= 2) {
    return [$header, $nav, $main, $footer];
  }
  $header = null;
  $nav = null;
  $main = null;
  $footer = null;

  // ARIA
  $header = getElement('body', '*[role="heading"]', 3);
  $nav = getElement('body', '*[role="navigation"]', 3);
  $main = getElement('body', '*[role="main"]', 3);
  $footer = getElement('body', '*[role="contentinfo"]', 3);

  if (numberOfIn(null, [$header, $nav, $main, $footer]) <= 2) {
    return [$header, $nav, $main, $footer];
  }
  $header = null;
  $nav = null;
  $main = null;
  $footer = null;

  // DIV
  var $elements = null;
  if ($('body').children().length >= 2) {
    $elements = $('body').children();
  } else if ($('body').children().children().length >= 2) {
    $elements = $('body').children().children();
  } else if ($('body').children().children().children().length >= 2) {
    $elements = $('body').children().children().children();
  }
  for (var i = 0; i < $elements.length; i++) {
    var $element = $($elements[i]);
    if (null === $header && getNavigationRating($element) > 1.2) {
      $header = $element;
    }
    else if (null === $main && getNavigationRating($element) < 1.2) {
      $main = $element;
    }
  }
  return [$header, null, $main, null];
};