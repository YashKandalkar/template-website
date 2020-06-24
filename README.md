# Instructions for using this template with github pages

1. Download this repository
2. Open a terminal in the downloaded folder and enter the command `npm install` (You must have [npm](https://nodejs.org/en/download) installed on your device)
3. Run `npm start` to start the server and view your website on [http://localhost:3000](http://localhost:3000)
4. Change about me in `src/Components/Main/Main.js`
5. Change or add projects in `src/Components/Projects/Projects.js`
6. Add your social media links in `src/Components/ContactMe/ContactMe.js`
7. Change website's title in `public/index.html`
8. Go to `package.json` and change the "homepage" to the site you're going to deploy this website on.
9. In `package.json`, inside the `scripts` array, change the `deploy` to `gh-pages -b master -d build` if you are going to deploy this on the root of your GitHub Pages (on \<UserName>.github.io/)
10. After making all the changes, close the development server with `ctrl+c`
11. Run `git init` to start a local repo.
12. Run `git remote add origin <remote-url>` where url is https or ssh url of your remote repo
13. Run `npm run deploy` to deploy your site 
14. Hopefully you will have your site deployed and visible at your GitHub Page!


### Note: More instruction on how to make the changes are available in the files mentioned above.
