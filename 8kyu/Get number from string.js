// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function: ####javascript

// getNumberFromString(s)
// ####ruby

// get_number_from_string(s)
// ####CSharp

// GetNumberFromString(string s)
const getNumberFromString = s => {
    let num = s.replace(/[^0-9]/g, ''); 
    return parseInt(num,10); 
}
