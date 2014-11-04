(function(){
  var data = [[5,5], [5,5], [5,5], [5,5], [5,5]];
  var svg = d3.select('svg');

  var update = (function me(data){
    var circle = svg.selectAll("circle").data(data);
    circle
      .attr("cy", function(d, i){ return i * 100 + d[1] * 1;})
      .attr("cx", function(d, i) { return i * 100 + d[0] * 1; })
      .attr("r", function(d, i) { return Math.sqrt(d[0] * d[1]); })//d[0] * d[1]; })
    .enter().append("circle")
      .attr("cy", function(d, i){ return 40;})
      .attr("cx", function(d, i) { return i * 100 + 30; })
      .attr("r", function(d, i) { return Math.sqrt(d[0] * d[1]); })//d[0] * d[1]; })
      .style("fill", "steelblue");
    return me;
  })(data);

  var inc = 1;
  function compare(current){
    if(current > 50){
      inc = - Math.random() * 10;
    }else if (current <= 5){
      inc = Math.random() * 10;
    }
    return (current + inc) > 0 ? current + inc : 0  ;
  }

  setInterval(function(){
    data = [[compare(data[0][0]),compare(data[0][1])],
            [compare(data[1][0]),compare(data[1][1])],
            [compare(data[2][0]),compare(data[2][1])],
            [compare(data[3][0]),compare(data[3][1])],
            [compare(data[4][0]),compare(data[4][1])]];
    update(data);
  }, 200);


})();
