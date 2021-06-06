

function addCode() {
    var fileName = $("#select_dataset :selected").text() 
    fileName = fileName.replace('Resources\\', "");
    document.getElementById("table_name").innerHTML = "<h4>" +  fileName + "</h4>";
    $.getJSON('http://127.0.0.1:5000/gen_table/maryland_covid19-cases.csv', function(data) { // Populating tables
        document.getElementById("table-container").innerHTML += data;
        $(document).ready( function () {
            $('#table_id').DataTable();
        } );
    });
}

addCode()

// Event Handler to check when a new date is selected
$(document).ready(function() {  
    $('#select_dataset').change(function(){
        document.getElementById("table-container").innerHTML= "";
        addCode();
    });
  });