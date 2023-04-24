MOD = 10 * 9 + 7
n = 2
nums = [1,2]

maxNum = max(nums);
print(maxNum)
dp = [1]
for i in range(1,maxNum):
    tmp = (dp[len(dp)] * (i+1) + 1) % MOD
    dp.append(tmp)
print(dp)
ans = 0
for num in nums:
    ans += dp[num]
print(ans)