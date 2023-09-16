
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let lowerBound = -1*Math.pow(2, 31);
    let upperBound = Math.pow(2,31) - 1;

    //Check if x is out of bounds
    if(x < lowerBound || x > upperBound ){
        return 0;
    }

    let sign = (x > 0) ? 1 : -1;
    let output = 0;
    x = Math.abs(x);

    while(x){
        // console.log(x + " , " + output);
        if( (((output * 10 * sign) + (x % 10)) < lowerBound) ||  (((output * 10 * sign) + (x % 10))  > upperBound) ){
            return 0;
        }
        output = (output * 10) + (x % 10);
        x = Math.floor(x / 10);
        
    }

    return output * sign;
};

