(function(){
  var matrix = [
    [ 0,  1,  2,  3],
    [ 4,  5,  6,  7],
    [ 8,  9, 10, 11],
    [12, 13, 14, 15],
    [12, 13, 14, 15]
  ];

  var body = d3.select('body');
  var table = body.append('table');
  var tr = table.selectAll('tr')
              .data(matrix.filter(function(d, i){
                if(i > 0){
                  return true;
                }
              }))
            .enter().append('tr');
  var td = tr.selectAll('td')
            .data(function(d){ return d; })
          .enter().append('td')
            .text(function(d){ return d; });

  td.style('color', function(d, i, j){
    if(j == 0){ return 'blue'; }
    return i ? null : 'red';
  });
})();
