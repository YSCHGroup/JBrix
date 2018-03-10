<h1><img src="https://i.imgur.com/bHX7GQK.png" width="25px" title="Logotype"/>  JBrix
</h1>
Welcome to the documentation for JBrix. This is an simple, free and open source JavaScript Library!
Here is a list over all functions and other addons as well as how to use them!

-------------------------------


### Table of Content:
1. **Installation**
     - [Import full library](#-import-full-library)
     - [Import individual parts](#-import-individual-parts)
2. JS **Functions**
     - [JB-Init()](#-jb-init)
     - [JB-AddComponent()](#-jb-addcomponentfile)
3. HTML **Classes**
     - [JB-OSF](#-jb-osf)
     - [JB-OIM](#-jb-oim)
-------------------------------


## Installation

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
You are allowed to simply enter the directory path inside the `path="[PATH]"` attribute. It will only see it as a custom root directory for JBrix.
This should also be the same place as 'JBrix.js' is located!

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





## Functions

### • JB-Init()
*(Initialize JBrix)*

This runns all the functions that is used to set up the JBrix library.
*(Import JBrix components to the html code.)*

(Is runned at page load)

### • JB-AddComponent(file)
*(Import external modules)*

This is used to import new scripts to the html code! (puts the script inside the head tag)

(Is runned by [JB-Init()](#-jb-init) when importing all JBrix's components to setup the library)






## Classes

### • JB-OSF
*(Open src file)*

This class can **only** be added to tags that contains the **src=""** attribute.
What this does is making the element clickable, and opens the direct link to itself as a new tab in the browser.

### • JB-OIM
*(Open image as modal)*

This class can **only** be added to **img** tags.
Which makes the image clickable, and opens up a modal window above the page.