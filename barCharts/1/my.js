// var data = [4,10,37,48];
// var chart = d3.select('.chart');
// var bar = chart.selectAll('div');
// var barUpdate = bar.data(data);
//
// var barEnter = barUpdate.enter().append('div');
// barEnter.style('width', function(d){ return d * 10 + 'px';});
// barEnter.text(function(d){ return d;});
var data = [3,12,4,49,35];
var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select('.chart')
  .selectAll('div')
    .data(data)
  .enter().append('div')
    .style('width', function(d){ return x(d) + 'px';})
    .text(function(d){ return d;});
