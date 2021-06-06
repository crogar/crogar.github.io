function plot_pie(date){
    $.getJSON('http://127.0.0.1:5000/gen_vaccines_gender/' + date, function(gender_data) { // Populating dates for vaccinations   
      var values_ = [], labels_ = []
    Object.entries(gender_data[0]).forEach(([key, value]) => {
        labels_.push(key)
        values_.push(value)
      });
        // var values = 
        var data = [{
            values: values_,
            labels: labels_,
            name: 'Gender',
            hoverinfo: 'label+percent+name',
            hole: .4,
            type: 'pie'
          }];
          var dom_rect = document.getElementById('gauge').getBoundingClientRect()
          // console.log(document.getElementById('gauge').getBoundingClientRect())
          var update = {
           width: dom_rect.width,  // or any new width
           height: dom_rect.height // " "
         };

          var layout = {
            title: 'Gender Vaccination Distribution',
            annotations: [
              {
                font: {
                  size: 16
                },
                showarrow: false,
                text: 'G',
                x: 0.50,
                y: 0.5
              }
            ],
            height: update.height,
            width: update.width,
            showlegend: true,
            grid: {rows: 1, columns: 1}
          };
          Plotly.newPlot('gender', data, layout);
    });
}

// Handling resizing of gender div
$( window ).resize(function() {
    var dom_rect = document.getElementById('gender').getBoundingClientRect()
    var update = {
      width: dom_rect.width,  // or any new width
      height: dom_rect.height  // " "
    };
    
    Plotly.relayout('gender', update);
  });