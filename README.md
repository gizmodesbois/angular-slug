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
{{elem | slug}}
```

## Directives from to

## Directives watcher model

This directive is a bit special. It is provided only on ngModel (for input). The idea is to slug a title element from an input to your slug input element.

First, create your input element

```html
<input type="text" class="form-control" placeholder="Enter string to slug" ng-model="name" required>
```

Second, create your slug input

```html
<input type="text" class="form-control" placeholder="Your string is gonna be slug here" ng-model="slug" slug-input slug-watch="{{name}}" >
```
You have to add two value to the input

`slug-input` is the name directive and `slug-watch="{{name}}"` is the element to be watch.

When you update the watched element, the slug element is going to copy it and slug it, but, you can also change the slug directly if you want.

## To-do

- Remove common words
- URI Checker on database