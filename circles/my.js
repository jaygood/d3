(function(){
  var data = [[5,5], [5,5], [5,5], [5,5], [5,5]];
  var svg = d3.select('svg');

  var circle = svg.selectAll("circle");
  circle
    .data(data, function(d, i){ console.log(d); return d[i];})
  .enter().append("circle")
    .attr("cy", 60)
    .attr("cx", function(d, i) { return i * 100 + 30; })
    .attr("r", function(d) { return d[0] * d[1]; })
    .style("fill", "steelblue");

  var arr = [];
  circle.each(function(d, i){
    arr.push(d3.select(this));
  })
  function compare(current){
    if(current > 200){
      return -Math.random() * 10;
    }else if (current < 20){
      return Math.random() * 10;
    }
  }
  var i = 0, len = arr.length;
  setInterval(function(){
    console.log(circle.data());
    //data = [[15,15], [15,15], [15,15], [15,15], [15,15]];
    // for(i = 0; i < len; i++){
    //   arr[i].attr('cx', function(d){
    //     d[0] = compare(+arr[i].attr('cx')) || d[0];
    //     return +arr[i].attr('cx') + d[0];
    //   });
    //
    //   arr[i].attr('cy', function(d){
    //     d[1] = compare(+arr[i].attr('cy')) || d[1];
    //     return +arr[i].attr('cy') + d[1];
    //   });
    // }
  }, 4000);


})();
