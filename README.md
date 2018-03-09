<h1><img src="https://i.imgur.com/bHX7GQK.png" width="25px" title="Logotype"/>  JBrix
</h1>
Welcome to the documentation for JBrix. This is an simple, free and open source JavaScript Library!
Here is a list over all functions and other addons as well as how to use them!

-------------------------------


### Table of Content:
1. **Installation**
     - How to import to HTML
2. JS **Functions**
     - [JB-Init()](#-jb-init)
     - [JB-AddLibrary()](#-jb-addlibraryfile)
3. HTML **Classes**
     - [JB-OSF](#-jb-osf)
     - [JB-OIM](#-jb-oim)
-------------------------------


## Installation

### • How to import to HTML

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
You are allowed to simply enter the directory path inside the `path="[PATH]"` attribute. It will only see it as a custom root directory for JBrix.
This should also be the same place as 'JBrix.js' is located!


## Functions

### • JB-Init()
*(Initialize JBrix)*

This runns all the functions that is used to set up the JBrix library.
*(Import JBrix components to the html code.)*

(Is runned at page load)

### • JB-AddLibrary(file)
*(Import modules)*

This is used to import new scripts to the html code! (puts the script in the head tag)

(Is runned by [JB-Init()](#-jb-init) when importing JBrix's components)





## Classes

### • JB-OSF
*(Open src file)*

This class can **only** be added to tags that contains the **src=""** attribute.
What this does is making the element clickable, and opens the direct link to itself as a new tab in the browser.

### • JB-OIM
*(Open image as modal)*

This class can **only** be added to **img** tags.
Which makes the image clickable, and opens up a modal window above the page.