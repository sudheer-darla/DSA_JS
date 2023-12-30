/*

Problem Description
There are N jobs to be done, but you can do only one job at a time.

Given an array A denoting the start time of the jobs and an array B denoting the finish time of the jobs.

Your aim is to select jobs in such a way so that you can finish the maximum number of jobs.

Return the maximum number of jobs you can finish.
*/

function maxJobs(A, B) {
  // Create a pairs array
  const noOfjobs = A.length;
  let jobArray = [];

  for (let i = 0; i < noOfjobs; i++) {
    jobArray.push({ start: A[i], end: B[i] });
  }

  //   Sort the array based on endtime
  jobArray.sort((j1, j2) =>
    j1.end === j2.end ? j1.start - j2.start : j1.end - j2.end
  );

  //   console.log(jobArray);

  let lastJob = jobArray[0];
  let ans = 1;
  //   console.log(`currentJob : ${JSON.stringify(lastJob)}`);
  for (let i = 1; i < noOfjobs; i++) {
    let currJob = jobArray[i];
    if (lastJob.end <= currJob.start) {
      ans++;
      lastJob = currJob;
      //   console.log(`currentJob : ${JSON.stringify(lastJob)}`);
    }
  }

  //   console.log(ans);
  return ans;
}

const A = [5, 10, 2, 8, 15, 7, 3, 12, 6, 1]; // Start of the job
const B = [12, 15, 6, 10, 20, 9, 5, 18, 8, 3]; // End of the job

maxJobs(A, B);
