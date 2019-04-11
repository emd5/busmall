# BusMall

BusMall is a market analysis on proposed products to test their potential customer interest... before actually putting them into the catalog and getting the manufacturing wheels in motion.

## Author

Liz Mahoney

## Changelog

### 4-10-19

- [x] Refactor app.js to create and retrieve local storage.
- [x] More styling on intro div

### 4-9-19

- [x] Added functions to render ChartJS.
- [x] Applied more styling to display the results list.

### 4-8-19

- [x] Create a new repo for this weekly project called bus-mall at the root level of the ~/CF/201 directory.
- [x] Scaffold the repo with the usual README, CSS, JS, and HTML files, plus a `img/ ` directory.
- [x] Include in repository a `.eslintrc.json` file whose contents are copied from the `eslintrc.json` file in the class repository.
- [x] Retrieve the assets from the assets/ directory and place them in the image directory.
- [x] Write each user stories as described above and place them in a file called `user_stories.md` in the repo. 
- [x] The build today will select three random photos from the image directory and display them side-by-side-by-side in the browser window.
- [x] In addition, want to be able to receive clicks on those displayed images, and track those clicks for each image. Also want to track how many times each image is displayed, for statistical purposes.
- [x] Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that displayed immediately before.
- [x] Create a constructor function that creates an object associated with each image, and has (at a minimum) properties for the name of the image (to be used for display purposes), its file-path, the number of times it has been shown, and the number of times it has been clicked. Hint: it is useful to create a property that contains a text string to use as an ID in HTML.
- [x] After 25 selections have been made, turn off the event listeners on the images (to prevent additional voting) and also display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".
