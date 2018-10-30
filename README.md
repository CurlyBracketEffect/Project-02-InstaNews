# Project-02-InstaNews
Second Project at RED

In this project I continued to improve my HTML, CSS and JS skills. I began learning some new skills with shorthand JS (jQuery), API calls as well as CSS animations.

Version 1
Things that work:
- The neccessary Gulp plugins are fully functional and are appropriately triggered using Gulp Watch
- I utilized SCSS formatting for my style files, and took advantage of nesting and variables to make my code more readable and editable
- I successfully used flex box and flex grid in order to format my page
- I have set breakpoints to keep my page reactive across devices
- I also implemented a function that acts a JS media query that applies new styling to the header as the articles are being loaded
- My jQuery uses AJAX to fetch data from the NYT API while loading the page
- My jQuery then listens for the user to select a section and will then pull the appropriate articles out of the the data returned by the API
- The function that populates my page with articles will automatically skip articles that do not have a picture
    - This function also automatically picks the highest quality image
- My page will only display the first 12 articles that qualify 
- While the articles are loading the user is informed through the display of a “loading gif”
- I was able to add custom styling to my select box
- I added dynamic header movement through jQuery and CSS
- I was able to add dynamic movement to the abstract’s appearance while hovering over the articles

Things that I would like to improve:
- I would like to update my JS to comply with ES6, but in order to do so I need to add the gulp plugin that supports that
- I would like to implement a Mixin and/or a Partial to further my understanding of them
- There is some weird behaviour when resizing the viewport after the page has been populated with articles that I would like to address
- I would like to go through and clean up my code by simplifying some steps, and removing some code.
- Im getting a non-critical error when loading the Open Sans Bold font that I would like to solve
