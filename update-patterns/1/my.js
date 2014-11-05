(function(){
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var width = 960,
      height = 500;

  var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(32," + (height / 2) + ")");

  var update = (function me(data) {
    // DATA JOIN
    var text = svg.selectAll("text")
        .data(data);

    // UPDATE
    text.attr("class", "update");

    // ENTER
    text.enter().append("text")
        .attr("class", "enter")
        .attr("x", function(d, i) { return i * 32; })
        .attr("dy", ".35em");

    // ENTER + UPDATE
    text.text(function(d) { return d; });

    // EXIT
    text.exit().remove();
    return me;
  })(alphabet);

  setInterval(function() {
    update(shuffle(alphabet)
        .slice(0, Math.floor(Math.random() * 26))
        .sort());
  }, 1500);

  function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m], array[m] = array[i], array[i] = t;
    }
    return array;
  }
})();
