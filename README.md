# Tower Defense HTML5 Game

A simple tower defense HTML5 Game made with phaser.

**Demo:** http://towerdefense.leandrocurioso.com

![alt Demo](https://raw.githubusercontent.com/leandrocurioso/tower-defense-html5-game/master/demo.png)

### Structure
The code must be written is ES6 then Webpack will automatically transpile it to ES5 to ensure browser compatibility.

### Installation
````
npm install
````

### How to run in development mode

To run in development mode type in the terminal:
````
npm run watch
````
The command above will automatically start a webpack dev server at port 3000 and will restart everytime a code file is saved, automatically minifiying the css file.

### Build for production

To build for production type in the terminal:
````
npm run build
````
The command above will automatically minify the script files and css file into one. 

You can see the transpiled files in: 
<br/>
**./public/css/style.min.css** and **./public/js/bundle.min.js**
