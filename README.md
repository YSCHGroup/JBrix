<h1><img src="https://i.imgur.com/bHX7GQK.png" width="25px"/>  JBrix
</h1>
Welcome to the documentation for JBrix. This is an simple, free and open source JavaScript Library!
Here is a list over all functions and other addons as well as how to use them!

### Table of Content:
1. JS **Functions**
     - [JB-Init()](#-jb-init)
     - [JB-UpdateClasses()](#-jb-updateclasses)
2. HTML **Classes**
     - [JB-OSF](#-jb-osf)
     - [JB-OIM](#-jb-oim)





## Functions

### • JB-Init()
*(Initialize JBrix)*

This runns all the functions that is used to set up the JBrix library.

(Is runned at page load)

### • JB-UpdateClasses()
*(HTML Classes)*

Apply all properties to all classes set inside the html code.

(Is runned by [JB-Init()](#-jb-init))





## Classes

### • JB-OSF
*(Open src file)*

This class can **only** be added to tags that contains the **src=""** attribute.
What this does is making the element clickable, and opens the direct link to itself as a new tab in the browser.

### • JB-OIM
*(Open image as modal)*

This class can **only** be added to **img** tags.
Which makes the image clickable, and opens up a modal window above the page.