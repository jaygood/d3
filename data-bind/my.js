(function(){
  var data = [1, 2, 3];

  var p = d3.select('body').selectAll('p')
    .data(data)
    .enter()
    .append('p')
    .text(function(d, i){return 'd = ' + d + ', i = ' + i;});
})();
