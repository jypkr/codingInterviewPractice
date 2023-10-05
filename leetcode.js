/*
https://leetcode.com/problems/two-sum/
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

var twoSum = function(nums, target) {
    const numToIndex = new Map();

    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(numToIndex.has(complement)) {
            return [numToIndex.get(complement), i]
        }

        numToIndex.set(nums[i], i);
    }
};

/*
https://leetcode.com/problems/container-with-most-water/
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
*/

var maxArea = function(height) {
    let max = 0;
    let pointer1 = 0;
    let pointer2 = height.length - 1;

    while(pointer1 <= pointer2) {
        const length = Math.min(height[pointer1], height[pointer2]);

        const width = pointer2 - pointer1;
        const area = length * width;

        max = Math.max(max, area);

        if(height[pointer1] < height[pointer2]) {
            pointer1++;
        } else {
            pointer2--;
        }
    }

    return max;
};

/*
HARD
https://leetcode.com/problems/trapping-rain-water/
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
*/

var trap = function(height) {
    
    let left = [];
    let right = [];
    let n = height.length;

    left[0] = height[0];
    right[n-1] = height[n-1];

    for(let i = 1; i<n; i++) {
        left[i] = Math.max(left[i-1], height[i]);
    }
    for(let i = n - 2; i>=0; i--){
        right[i] = Math.max(right[i+1], height[i]);
    }
    let ans = 0;
    for(let i = 0; i<n; i++) {
        ans+=(Math.min(left[i], right[i])) - height[i]
        console.log(ans)
    };
    console.log(`left: ${left}`)
    console.log(`right: ${right}`)
    return ans;
};

trap([0,1,0,2,1,0,1,3,2,1,2,1]);