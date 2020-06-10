# Blaine's Bread Store

## A Simple React App

This project is meant to show off simple ways to use React. On this
branch, the `blaines-bread-store` branch, you can see some easy
ways to use props, local state, and parent/child state interaction.

`package.json` has been updated with `homepage` set to `./` instead
of `/`. This means that you can simply run `npm run build` and open
`build/index.html` in the browser without needing to serve it out
with a web server. `./` means that the javascript and css files are
located in the same folder as the `index.html`, not at the root path
on the web server (which wont work if you are just opening up the
`index.html` file in a local web browser to view).

The `build/` folder must be built on your machine as it is not checked
into the repo. Simply run `npm run build` or `yarn build` to generate
the `build/` folder. This folder represents the final output of the
webpack frontend pipeline. It contains simple static files, images,
and assets that can be uploaded to a web server as a self-contained
javascript client application!

## Code

index.html:
``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />  
    <!-- 
      webpack will replace %PUBLIC_URL% with the proper setting 
      during run or build time
    -->  
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <title>Hello World</title>
    <!-- 
      look ma, no css or js sourcing! 
      webpack does this for us at run/build time 
    -->
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>

    <!-- react will mount to these divs, similar to jQuery append() -->
    <div id="root1"></div>    
    <div id="root2"></div>
    <div id="root3"></div>

  </body>
</html>
```

index.js:
``` javascript
import React from 'react';
import ReactDOM from 'react-dom';

// CSS files are referenced here but not directly used in this code
// Webpack (magic) sees that we import the css file and takes care
// of bringing it into the html for us! Webpack is magic.
import './index.css';

// Just an element in a variable (nothing special)
const elem1 = <h1 id='two'>Hello World 2</h1>;

// A real react component: a function that returns an element! 
// Can now reference this using JSX Syntax: <Elem 2/>
const Elem2 = () => <h1 id='three'>Hello World 3</h1>;

// We can also just straight up mount an inline element to the DOM:
ReactDOM.render(<h1 id='one'>Hello World 1</h1>, document.getElementById('root1'));

// Mount an element that's just stored in a variable:
ReactDOM.render(elem1, document.getElementById('root2'));

// Mount a true react component using JSX Syntax:
ReactDOM.render(<Elem2 />, document.getElementById('root3'));
```

index.css:
``` css
#one {
    color: red;
}

#two {
    color: blue;
}

#three {
    color: green;
}
```