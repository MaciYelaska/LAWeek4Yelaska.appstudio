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
withSal = petNames
console.log(petNames)

/*
Get the third name in the 'pets' array and output it to the console using this format: 
    The third pet is named XXXX. 
Hint: Remember, array indices start at 0, not 1. To indicate an item in an array, use this format: 
         arrayName[i]   where i is the index of the item you want
*/

console.log(`The third pet is named ${petNames[2]}.`)

/*
Get a count of how many items are in the 'withSal' array and output it to the console in the form: 
      The array has X names in it. 
Hint: use the .length method with the arrayname. 
*/

console.log(`The array has ${withSal.length} names in it.`)

/*
Remove the last name in the array by using the method .pop(). 
Hint: .pop() works just like .push() except it pops the last item off the array so you can put it into a variable. Also, it doesn't need anything between its' parentheses.
*/

withSal.pop()