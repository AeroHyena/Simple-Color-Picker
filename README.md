## Simple Color Wheel 

This is a project I created on my mobile device - the goal is to have a color field that a user can make a color selection from, and display their choice in hex code format. It is created specifically for touch screen devices, utilizing a touch event handler.


# Creation Process 

I implemented it so that after the web page has loaded, a script will be executed that inserts the functionality into the page. The script applies an event handler to the wheel, extracting the coordinates from where the user tapped. A canvas copy of the wheel is created, and the coordinates are used to extract a pixel from the corresponding location on the canvas copy. An rgb value is extracted from the pixel data and converted into a hex code that is displayed underneath the color selector.


# Challenges 

Initially I implemented a spherical color wheel, but a tool I used create a canvas copy of the color wheel, html2canvas, does not yet support conical gradients, so I opted instead to utilize a square color field with a linear gradient.

I quickly realized how messy and hard to read Javascript documentation can be - it took me quite a bit of searching and testing to find a method of extracting the coordinates from where a user tapped.