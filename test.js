var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt

let Mod = 10**9 + 7;
let n = read_line()
let nums = read_line();
nums = Array.from(nums.split(' '))
console.log(nums)
let maxValue = Math.max(...nums)+1
// console.log(maxValue)
const dp = new Array(maxValue).fill(0);
// console.log(dp)
dp[0] = 1;
for(let i=1; i<maxValue; i++){
  dp[i] = dp[i-1]*(i+1) +1;
}
console.log(dp)
let res = 0
for(let i of nums){
  res += dp[i]
}

console.log(res)