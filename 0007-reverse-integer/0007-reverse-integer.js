var out_of_bounds = function(x, lowerBound, upperBound){
    if(x < lowerBound || x > upperBound){
      return 1;  
    }
    else {return 0}; 
}


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let lowerBound = -1*Math.pow(2, 31);
    let upperBound = Math.pow(2,31) - 1;

    //Check if x is out of bounds
    if(out_of_bounds(x, lowerBound, upperBound)){
        return 0;
    }

    let sign = (x > 0) ? 1 : -1;
    let input = Math.abs(x);
    let output = 0;

    while(input > 0 && !out_of_bounds( output , lowerBound, upperBound )){
        if(!out_of_bounds( ( (output * 10 * sign) + (input % 10) ), lowerBound, upperBound)){
            output = (output * 10) + (input % 10);
            input = Math.floor(input / 10);
        }
        else{
            return 0;
        }
    }
    return output * sign;
};

