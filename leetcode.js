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