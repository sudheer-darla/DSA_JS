/*
You are given an integer n indicating there are n people numbered from 0 to n - 1. You are also given a 0-indexed 2D integer array meetings where meetings[i] = [xi, yi, timei] indicates that person xi and person yi have a meeting at timei. A person may attend multiple meetings at the same time. Finally, you are given an integer firstPerson.

Person 0 has a secret and initially shares the secret with a person firstPerson at time 0. This secret is then shared every time a meeting takes place with a person that has the secret. More formally, for every meeting, if a person xi has the secret at timei, then they will share the secret with person yi, and vice versa.

The secrets are shared instantaneously. That is, a person may receive the secret and share it with people in other meetings within the same time frame.

Return a list of all the people that have the secret after all the meetings have taken place. You may return the answer in any order.

*/

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function (n, meetings, firstPerson) {
  let knownSet = new Set([0, firstPerson]);

  let sortedMeetings = [];
  meetings.sort((a, b) => a[2] - b[2]);

  let seenTime = new Set();

  for (let meeting of meetings) {
    if (!seenTime.has(meeting[2])) {
      seenTime.add(meeting[2]);
      sortedMeetings.push([]);
    }
    sortedMeetings[sortedMeetings.length - 1].push([meeting[0], meeting[1]]);
  }

  for (let meetingGroup of sortedMeetings) {
    let peopleKnowSecret = new Set();
    let graph = {};

    for (let [p1, p2] of meetingGroup) {
      if (!graph[p1]) graph[p1] = [];
      if (!graph[p2]) graph[p2] = [];

      graph[p1].push(p2);
      graph[p2].push(p1);

      if (knownSet.has(p1)) peopleKnowSecret.add(p1);
      if (knownSet.has(p2)) peopleKnowSecret.add(p2);
    }

    let queue = [...peopleKnowSecret];

    while (queue.length > 0) {
      let curr = queue.shift();
      knownSet.add(curr);
      for (let neigh of graph[curr]) {
        if (!knownSet.has(neigh)) {
          knownSet.add(neigh);
          queue.push(neigh);
        }
      }
    }
  }

  return [...knownSet];
};

console.log(
  findAllPeople(
    6,
    [
      [0, 2, 1],
      [1, 3, 1],
      [4, 5, 1],
    ],
    1
  )
);
