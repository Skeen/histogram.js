var data = [-1, 1, 100, 95, 22, 50, 132, 500];

// Interval width and count
var interval_width = 50;
var interval_count = 10;
var interval_center = 0;

// Generate our intervals
var interval_limits = [];
// These ensure that data will always be within an interval
interval_limits.push(Number.NEGATIVE_INFINITY);
interval_limits.push(Number.POSITIVE_INFINITY);
// Add the center of our intervals
interval_limits.push(interval_center);
// Generate intervals outwards from interval_center
for(var i=1; i<interval_count+1; i++)
{
    interval_limits.push(interval_center - interval_width*i);
    interval_limits.push(interval_center + interval_width*i);
}
// Intervals are in random order, so we'll sort them for the data processing
interval_limits.sort(function(e1, e2)
{
    return e1 - e2;
});
// Output intervals
var intervals = {};
// Process the data one entry at a time
data.forEach(function(data)
{
    // Find the interval we fit within
    var index = interval_limits.findIndex(function(limit, i)
    {
        return (interval_limits[i] <= data) && (data <= interval_limits[i+1]);
    });
    // Generate interval name
    var interval = "[" + interval_limits[index] + ", " + interval_limits[index+1] + "]";
    // Add '1' to the interval
    intervals[interval] = (intervals[interval] || 0) + 1;
});

// Output everything, should probably output latex or whatever
console.log(intervals);
