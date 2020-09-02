A JSON string has been provided for you in the data.js file:  you can access it in your code with the dataString Variable.

 Fill in the Weather class with the following functionality.



### Methods required

**Constructor**

The class Weather Should contain a data property in the constructor - If you are unsure, refer to: [W3Schools](https://www.w3schools.com/JsrEF/jsref_constructor_class.asp)  or [Canvas](https://coderacademy.instructure.com/courses/308/pages/classes?module_item_id=15881)
This property should contain the parsed JSON data that is stored in dataString. 

If you are unsure how to access data within the object, try console logging a new Weathers data to the console, 
this will help you to get familiar with the data, it's key/value pairs, and what is nested.

**maxTemps**  - returns an array containing the max_temp from consolidated_weather array.

**averageTemp** - returns a string with 2 decimal places. (It should be the average temperature of the week, use the the_temp data.)

**forcast** - This takes in a day with the format (yyyy-mm-dd) and returns a string. 

The string should read:  The temperature was (the_temp) degrees with a high of (max) and a low of (min).  Each temperature should have at most 2 decimal places.

If no data is found return a string: No information for that day
