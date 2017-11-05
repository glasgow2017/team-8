Code for Good hackaton by 

Solution to make web pages more accessible for people with visual disablities.

# Don't forget to do that once
 - npm install -g eslint-cli
 - npm install -g grunt-cli
 - npm install -g browserify

# Don't forget to do that after each pull / clone requests
To access the "Read from the start of the page" button, do CTRL+Y.
After every pull or clone, run:
 - npm install
 - browserify content/add_top_banner.raw.js -o content/index.js
 - browserify content/extract_important_sentence.raw.js -o content/extract_important_sentence.js
 - build.bat

# TODO
 - Improve navigation using anchors
 - Extend the soluctions to work with Safari and Firefox
 - apply AirBnb's JavaScript coding style
 - if API doesn't return anything, revert back to extract_important_sentence.js