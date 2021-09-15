/* On the 'pets' form, create an array named 'petNames' that contains the names below.
Hint: remember to add quotes around each name to show it is a string.

Darcy, Jack, Jerry, Marty, Vito, Vinny, Riley, Saddie, Marge, Sam
*/

let petNames = ['Darcy','Jack','Jerry','Marty','Vito','Vinny','Riley','Saddie','Marge','Sam']

/*
Create a second new array named 'withSal' that holds the original array data with the string "Sal" added to the end of the new array. 
Hint: in Javascript, what would happen if you set 'withSal' equal to 'petNames', and then added "Sal" to the 'withSal' array?
*/

let withSal = petNames.push('Sal')
console.log(petNames)