This is a plugin which helps to implement drill down in jquery. 
To start working on it u need jquery latest version
U need to include either jquery.drilldown.min.js/jquery.drilldown.js in your javascript src

Usage:
 
 $(selector).drillDown({
 	animate: true; // Default 'true' Not required
 	container : ".divname|#spanName" //No Default values Required
 	listParam : "list" // Default list see the demo for explanation
 	direction : 0 // Default 0 vertical 1 horizontal
 	callBack  : test // Default null Call back function to be used on selection
 });

Styles:
 Elements inside Drill Down are li elements with class name drillItem. You can write a customized style for it
 Container is the element specified by the user. So, Sytling is upto the user
 

