# Frontend example

Example of my current frontend workflow

**I'm writing code in:**

* [TypeScript](http://www.typescriptlang.org/) for my application
* [Less](http://lesscss.org/) for all styles

**And I'm using:**

* [npm](http://npmjs.org/) for all "building" and some frontend dependencies
* [Bower](http://bower.io/) for some other frontend dependencies
* [Gulp](http://gulpjs.com/) for compiling and building my application
* [Browserify](http://browserify.org/) for ability to use `require` in browser

**And I'm not using:**

* Watching packages: PhpStorm watch for changes for me, so I don't need to start some command before developing
* Node.js server: I'm PHP developer, so I'm using Nginx + php-fpm

## Installation

```
$ git clone git@github.com:Carrooi/Example-Frontend.git
$ cd Example-Frontend
$ npm install .
$ bower install
```

## Build

**Install fonts:**

```
$ npm run fonts
```

**Compile js files:**

```
$ npm run compile-js
```

**Compile css files:**

```
$ npm run compile-css
```

## Minify

**Minify js files:**

```
$ npm run uglify-js
```

**Minify css files:**

```
$ npm run uglify-css
```
