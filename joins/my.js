(function(){
  var data = data = [{x: 80 , y: 80},{x: 40, y: 40}];
  var svg = d3.select('svg');
  var circle;
  var update = (function me(data){
    circle = svg.selectAll('circle').data(data);
    // enter
    circle.enter().append("circle")
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr('r', 0)
      .transition()
        .attr('r', 20);

    // exit
    circle.exit().transition()
        .attr('r', 0)
        .remove();

    // update
    circle
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr('r', 0)
    .transition()
      .attr('r', 20);
    return me;
  })(data);

  setInterval(function(){
    data = [{x: 720 * Math.random(), y: 720 * Math.random()},
            {x: 320 * Math.random(), y: 320 * Math.random()}];
    update(data);
  }, 1000)
})();
