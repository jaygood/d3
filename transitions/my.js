(function(){
  var data = [1, 2, 3];

  var p = d3.select('body').selectAll('p')
    .data(data)
    .enter()
    .append('p')
    .text(function(d, i){return 'd = ' + d + ', i = ' + i;});


  d3.select('body')
    .style('color', 'green')

  .transition()
    .delay(750)
    .style('color', 'yellow')

  .transition()
    .delay(1500)
    .each('start', function(){ d3.select(this).style('color', 'blue'); })
    .style('color', 'red')

  .transition()
    .delay(2250)
    .styleTween("color", function() { return d3.interpolate("blue", "green"); });


})();
