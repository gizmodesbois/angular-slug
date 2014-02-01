# Angular slug

Providing the "slugification" on AngularJS with services, filters and two types of directives (with options).

## What is a slug ?

A slug is that last portion of a URL which is based on piece of information, usually the title of a page.

For example "This is what I want to slug for you !" become :

```
this-is-what-i-want-to-slug-for-you
```

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

```js
.controller('SlugController', ['$scope', 'Slug',
    function($scope, Slug) {
        $scope.name = Slug.slug("Bernard le pirate masqué !");
    }
])
```

The output is going to be

```
bernard-le-pirate-masque
```

## Filter

To use it as filter :

```html
<input type="text" ng-model="name">
<p>{{elem | slug}}</p>
```

## Directives from to

This directives provide a `from->to` way for your element. The `from` is the element to be watched and the `to` is the element to be slug.

First way with 'E' restrict.

```html
<slug-dir from="title" to="sluggedelem">
	<p>slug: {{slugmeup}}</p>
</slug>
```

Second way with 'A' restrict.

```html
<div slug-dir from="title" to="slugmeup">
	<p>slug: {{slugmeup}}</p>
</div>
```

## Directives watcher model

This directive is a bit special. It is provided only on ngModel (for input). The idea is to slug a title element from an input to your slug input element.

First, create your input element

```html
<input type="text" ng-model="title" required>
```

Second, create your slug input

```html
<input type="text" ng-model="slug" slug-input slug-watch="{{title}}" >
```
You have to add two value to the input

`slug-input` is the directive's name and `slug-watch="{{title}}"` is the element to be watch.

When you update the watched element, the slug element is going to copy it and slug it, but, you can also change the slug directly if you want.

## To-do

- Remove common words
- URI Checker on database