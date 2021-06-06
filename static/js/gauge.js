county_vacc = [{"county": "Allegany", "population": 75300, "fully_vaccinated": 24246}];

dropDown(county_vacc);

// Selects the county that was chosen in the dropdown menu
let selectedCounty = d3.select("#selDataset");
    selectedCounty.on("change",function() {        //creates an on-change function to update the visualizations based on subject
    let County = selectedCounty.property("value") //pulls the subject nuber that is selected
    let cntyIndex = county_vacc.indexOf(County)

    console.log(selectedCounty)

    dropDown(county_vacc);
    gaugePlot(county_vacc[cntyIndex]);
    });
// });

// Populates the dropdown with County from county_pop list
function dropDown(countyID) {
    let options = d3.select("#selDataset");
        countyID.forEach((element) => {
            let option = options.append("option");
            option.text(element.county).property("value", element.county)
        })
    };

// // Creates a gauge plot with stepping color codes for percent vaccinated
function gaugePlot(data) {
    let trace_gauge = {
        // domain: {x: [0,1], y: [0,1]},
        value: (data.fully_vaccinated / data.population) * 100,
        title: {text: "Percent Vaccinated"},
        type: "indicator",
        mode: "gauge+number",
        // number: data.fully_vaccinated,
        gauge: {axis: {range: [null, 100], tickwidth: 1},
                bar: {color: "grey"},
                steps: [
                    {range: [0, 25], color: "red"},
                    {range: [25, 50], color: "orange"},
                    {range: [50, 75], color: "yellow"},
                    {range: [75, 100], color: "green"}
                    ],
                }
        };
    var data = [trace_gauge];

    var layout = {
        title: "County Vaccination Status"
    };

    Plotly.newPlot("gauge", data, layout);
};