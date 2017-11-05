Code for Good hackaton by JP Morgan

Solution to make web pages more accessible for people with visual disablities. 

Key aspects:

1. The program will read the text on the web page and summarize it into and a smaller pharagraph of text. This allows the user to get a feel for what the webpage is about without having to tab through the every element.

2. We decided to remove the top nav bar as this causes the user to tab serval times before even getting to the main content. 

3. A small section will appear in the top right hand side of the screen containing links to the most important sections within the web page, this again removes the need for additional tabs through the page.

4. Makes live chat accessible to the user. Currently messages recieveed by the user cannot be read out by the screen readers. We have added this functionality by taking the message that is received and turning it into something which the screen reader has access to.

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
 - Extend the soluctions to work with Safari and Firefox
 - apply ESLint
 - Test on Windows & on more websites