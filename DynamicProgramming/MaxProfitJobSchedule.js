/*
We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], 
obtaining a profit of profit[i].

You're given the startTime, endTime and profit arrays, 
return the maximum profit you can take such that there are no two jobs in the subset 
with overlapping time range.

If you choose a job that ends at time X you will be able to start another job that starts at time X.

Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job. 
Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.

https://leetcode.com/problems/maximum-profit-in-job-scheduling/description/?envType=daily-question&envId=2024-01-06 
*/

var jobScheduling = function (startTime, endTime, profit) {
  const jobs = [];
  const n = startTime.length;

  // Create a sorted array of jobs based on end times
  for (let i = 0; i < n; i++) {
    jobs.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
  }
  jobs.sort((a, b) => a.end - b.end);

  // Initialize DP array to store maximum profit up to each job
  const dp = new Array(n);
  dp[0] = jobs[0].profit;

  // Dynamic programming transition
  for (let i = 1; i < n; i++) {
    let includingCurrentJob = jobs[i].profit;
    let latestNonOverlap = -1;

    // Find the latest job that doesn't overlap with the current job
    for (let j = i - 1; j >= 0; j--) {
      if (jobs[j].end <= jobs[i].start) {
        latestNonOverlap = j;
        break;
      }
    }

    // Update the DP array
    if (latestNonOverlap !== -1) {
      includingCurrentJob += dp[latestNonOverlap];
    }

    dp[i] = Math.max(includingCurrentJob, dp[i - 1]);
  }

  // The final result is stored in the last element of the DP array
  return dp[n - 1];
};
