/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let result = ""; //return string
    let arr = [numRows]; // array to separate letters in zigzag pattern by row
    let row = 0; // the current row to write to
    let direction = (numRows > 1) ? 1:0; //will change from 1 and -1 depending on which way it is currently 
                       //zigging or zagging


    //Set the strings in the array
    for(let i = 0; i < numRows; i++){
        arr[i] = "";
    }

    //add values to the array of strings
    for(let i = 0; i < s.length; i++){
        if((row > numRows -1) || (row < 0) ){
            direction = direction * -1;
            row += direction;
            row += direction;
        }
        arr[row] = arr[row].concat(s[i]);
        console.log(row + " : " + arr[row]);
        row = row + direction;
    }

    //add the strings from the array together into one final string    
    for(let i = 0; i < numRows; i++){
        result = result.concat(arr[i]);
    } 
    return result;
};