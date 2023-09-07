#include <cstdio>
using namespace std;
typedef basic_string<char> string;

class Solution {
public:
    string convert(string s, int numRows) {
        
        //Initialize values
        std::string rows [numRows];
        int row = 0;
        int direction = 1;
        std::string solution = "";

        for(int i = 0; i < numRows; i++){
            rows[i] = "";
        }

        for(int i = 0; i < s.length(); i++){
            if(numRows < 2){direction = 0;}
            else if(row < 0 || row > numRows - 1){
                direction *= -1;
                row += direction;
                row += direction;
            }
            
            rows[row].push_back(s[i]);
            //cout << row << " : " << rows[row] << endl;
            row += direction;
            
            
        }
        
        for(int j = 0; j < numRows; j++){
            solution += rows[j];
        }
        return solution;
    }
};