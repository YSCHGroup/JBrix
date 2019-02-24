<h1><img src="https://i.imgur.com/bHX7GQK.png" width="25px" title="Logotype"/>  JBrix
</h1>

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master) ![Progress](https://img.shields.io/badge/progress-65%25-yellowgreen.svg) ![Downloads](https://img.shields.io/badge/downloads-2k-brightgreen.svg)

Welcome to the documentation for JBrix. This is an simple, free and open source JavaScript Library!
Here is a list over all functions and other addons as well as how to use them!

-------------------------------


### Table of Content:
1. **Installation**
     - [Import full library from CDN (webserver)](#-import-full-library-from-cdn)
     - [Import individual parts from CDN (webserver)](#-import-individual-parts-from-cdn)
     - [Import full library](#-import-full-library)
     - [Import individual parts](#-import-individual-parts)
     - [Import Debugging](#-import-debugging)
2. Showoff
2.1 HTML **Variables**
     - Using Variables!
     - Check Available Variables
-------------------------------


## Installation

### • Import full library from CDN
*(All components)*

Place the following `<script>` tag inside your `<header>` tag if your '*.html' file is in the same folder as 'JBrix.js'.

Add:
```
<script src="https://rawgit.com/YSCHGroup/JBrix/master/JBrix.js" path="https://rawgit.com/YSCHGroup/JBrix/master/" debug="false"></script>
```
To import **JBrix** to your website!

### • Import individual parts from CDN

Add this tag for example:
```
<script src="https://rawgit.com/YSCHGroup/JBrix/master/functions/jb-clearURL.js" debug="true"></script>
```
To import the function clearURL(); to your website!

Or:

Add this:
```
<script src="https://rawgit.com/YSCHGroup/JBrix/master/classes/jb-osf.js" debug="true"></script>
```
To import and enable the use of the class="jb-osf"!

### • Import full library
*(All components)*

Place the following `<script>` tag inside your `<header>` tag if your '*.html' file is in the same folder as 'JBrix.js'.
```
<script src="JBrix.js"></script>
```
This will just assume that your html file is in the same directory as the JBrix.js file.

If the '*.html' file is **NOT** in the same folder as 'JBrix.js', do as following...
```
<script src=" [PATH] /JBrix.js" path=" [PATH] "></script>
```
If you put `PATH` equals to `..`, JBrix will work if the html file is in the directory above for example.

#### IMPORTANT!
You are allowed to simply enter the directory **path** inside the `path="[PATH]"` attribute. It will only see it as a custom root directory for JBrix.
This should also be the same place as 'JBrix.js' is located!
There's also an attribute called **debug**, this enables or disables console logging errors, information etc about the library. `debug="[TRUE/FALSE]"`
This is automatically set to false if no debug attribute where found.

### • Import individual parts

Depending on what script component you want to import to your project, there are several ways to grab the functionality.
1. Extract the *.js file from JBrix's library
     Inside the JBrix folder, every JavaScript component are sorted into different folders. If you are looking to import one of JBrix's classes, go into the `..\JBrix\classes\` folder and you'll see a list over all class components JBrixhas to offer. Therefrom you are able to extract and copy that .js file into your website root folder and import it as usual!
2. Import directly via HTML
     If you want to use more than one of JBrix's components inside your project. It may be smart to have the JBrix root folder somewhere inside your website's root folder. (`..\[your website]\JBrix`)
     From there you can phrase the different modules from JBrix's library by entering something as the following example shows inside your header tag:
```
<script src="[your website]\JBrix\classes\jb-oim.js"></script>
```
This will only import one of JBrix's components and it will work **perfectly** as expected!

### • Import Debugging
```
<script src="[path to JBrix]" debug="true"></script>
```
This will enable debugging while importing the library onto your website.
Otherwise it will only display one confirmation message about JBrix i installed.

## Showoff

### Variables

#### • Using Variables!

It's extremely easy to use variables in JBrix. All you have to do is adding the variable "name" inside of "%%" and woalla! The variable will be replaced with it's representing value.<br>
For example; You want your page to tell you the browsers width... Well, it's easy! add the %innerWidth% to the paragraph

<p>This is your width: %innerWidth%!<br>
<em>Becomes:</em>
<br>This is your width: 1920!</p>

Using variables in JBrix is almost like PHP, the values are server sided. So the user can't see the %innerWidth% when inspecting the elements **unless the variable is undefined**!

#### • Check Available Variables
*Object.entries(window)*

Use the command `Object.entries(window)` to list all available variables to use in your HTML code.
