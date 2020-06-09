# Simple React Prototype

This project was created with `create-react-app`. It has been
stripped of everything fancy. The goal is simply to help teach folks
who are just learning React, Webpack, and JSX.

`index.js` shows three ways to mount a JSX element to the DOM. 
Normally you'd only mount one element that holds all of your
React app, typically called `<App />`.

`index.js` imports a single `index.css` file to show how these
two files work together. Webpack takes care of injecting all
of the linked CSS files into `index.html` at run time.

`index.html` has been stripped to be minimal (no favicon, meta
tags, etc). There are three `<div />` elements that `index.js`
uses for mounting (see `index.js`).

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