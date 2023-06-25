function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length - 1; i++) {
      if (intervals[i][1] > intervals[i + 1][0]) {
        return false;
      }
    }
    return true;
  }
  const intervals = [[0, 30], [5, 10], [15, 20]];
  const result = canAttendMeetings(intervals);
  console.log(result); // Output: false
  