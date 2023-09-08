class Solution {
public:
    string convert(string s, int numRows) {
        
        //base case: numRows < 2
        if(numRows < 2)return s;

        //Initialize values
        string rows [numRows];
        int row = 0;
        int direction = -1;
        string solution = "";

        for(int i = 0; i < s.length(); i++){
            if(row == 0 || row == numRows - 1){
                direction *= -1;
            }
            
            rows[row] += s[i];

            row += direction;
            
            
        }
        
        for(int j = 0; j < numRows; j++){
            solution += rows[j];
        }
        return solution;
    }
};
