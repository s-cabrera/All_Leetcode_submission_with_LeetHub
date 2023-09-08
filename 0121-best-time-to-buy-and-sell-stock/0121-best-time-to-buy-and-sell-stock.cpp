class Solution {
public:
    int maxProfit(vector<int>& prices) {
        //find the biggest difference betweeen two numbers with lowest number first
        int maxProfit = 0;

        int buy = prices[0];

        for(int i = 1; i < prices.size(); i++){
            if(prices[i] > buy){
                    maxProfit = max(maxProfit, prices[i] - buy);
            }
            else{buy = prices[i];}
        }

        return maxProfit;
    }
};