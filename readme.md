[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)
# FlowChart (Tree):

### What is it?
This is a custom tree like flowchart web component (block element).  It was made using StencilJS It only has one 
attribute that a user needs to set (tree).  The tree attribute is an array that represent the nodes on the tree. 
 
 For example the below array will product the below flowchart
 ```
    tree = ['parent', ['child1',['grandchild1'], 'child2', 'child3']]
 ```

![Alt text](https://github.com/mmgrant73/flowchart/blob/master/flowchart.png?raw=true "Image-FlowChart")

[Click here for Demo](https://mmgrant73.github.io/flowchart/flowchart.html) 

### How to use it?
It is quite easy to use it on your webpage. Just follow the below steps:

1. Install it from NPM using the following at the terminal 

```
   npm install x-flowchart --save
```

2. Include the link to the script file that holds the this custom web component (reveal-box.js) near the bottom of 
   the body section of your webpage.  See below
   
```
    <script src='node_modules/x-flowchart/dist/flowchart.js'></script>
```

3.  Then use the custom element tags on your webpage.

```
    <x-flowchart tree="['parent', ['child1',['grandchild1'], 'child2', 'child3']]"></x-flowchart>
```

Note: That is all you have to do to use this custom element.  There is an example HTML page (acronym.html) that shows how to use it.

```
    <!DOCTYPE html>
    <html dir="ltr" lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
            <title>Stencil Component Starter</title>

            <script src='node_modules/x-flowchart/dist/flowchart.js'></script>

        </head>
        <body>

            <x-flowchart tree='["parent", ["child1",["grandchild1"], "child2", "child3"]]'></x-flowchart>

        </body>
    </html>
```

### There are only one properties that you can use to customize this element.
The only attribute the user needs to set is the tree attribute that holds an array that represent the structure of the tree

### To Do:
1. Add support for more tree types
2. Add support for setting text and background color

### Credit:
The CSS for this web component was inspired by code I found on PenCode by Emil Devantie Brockdorff.  That person deserves credit for the css. 

Note: It has to be ran from a web server and not just opened locally in a browser or the loading of x-flowchart will be  blocked due to 
CORS policy: (Cross origin requests)