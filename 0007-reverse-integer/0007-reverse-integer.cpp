class Solution {
public:
    int reverse(int x) {
        int ans = 0;
        int sign = (x > 0) ? 1: -1;
        int input = abs(x);

        while (input){
            if((ans * sign) < INT_MIN /10  || (ans * sign) > INT_MAX / 10) return 0;
            ans = (ans * 10) + (input % 10);
            input = input /10;
        }
        return ans * sign;
    }
};