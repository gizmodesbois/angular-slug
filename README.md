# Angular slug

Providing the "slugification" on AngularJS with services, filters and two types of directives (with options).

## What is a slug ?

A slug is that last portion of a URL which is based on piece of information, usually the title of a page.

## Demo online

[Demo here](http://gizmodesbois.github.io/angular-slug/)

## Demo local

To get the demo working on your workstation : 

```
npm install
grunt
```

This two command are going to install all the dependecies for grunt and open a new page in your browser (Changer Google Chrome to Firefox or other browser in the Gruntfile.js if needed).

## Usage

Include `dist/libs/ng-angular-slug.min` after you set AngularJS in your HTML.

```html
<script src="ng-angular-slug.min.js"></script>
```

Make `slugit` a dependency in your AngularJS app.

```js
angular.module("myApp", ["slugit"]);
```

## Services

## Filter

## Directives from to

## Directives watcher model