var maxSubArray = function (nums) {
  let maxNum
  const arr = [];

  let num = 0;

  if (nums.length > 1) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] + num > 0) {
        num = num + nums[i];
      } else {
        num = 0;
      }
      arr.push(num);
    }
  }

  if (nums.length === 1) {
    arr.push(nums[0]);
  }

  maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) maxNum = arr[i];
  }

  return maxNum;
};
