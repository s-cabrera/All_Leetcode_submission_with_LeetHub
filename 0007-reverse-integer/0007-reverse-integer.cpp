class Solution {
public:
    int reverse(int x) {
        int ans = 0;
        int sign = (x > 0) ? 1: -1;
        x = abs(x);

        while (x){
            if((ans * sign) < INT_MIN /10  || (ans * sign) > INT_MAX / 10) return 0;
            ans = (ans * 10) + (x % 10);
            x = x /10;
        }
        return ans * sign;
    }
};