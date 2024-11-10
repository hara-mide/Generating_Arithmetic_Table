    // Get elements by ID
    var rowsInput = document.getElementById('rows');
    var columnsInput = document.getElementById('columns');
    var evaluationInput = document.getElementById('evaluation');
    var tableDiv = document.getElementById('table');

    function generateTable() {
        var rows = Number(rowsInput.value);
        var columns = Number(columnsInput.value);
        var evaluation = evaluationInput.value;

        // Start building the table HTML
        var tableHtml = `<table border="2" style="background-color: white;">`;
        
        for (var i = 1; i <= rows; i++) {
            tableHtml += '<tr>';
            for (var j = 1; j <= columns; j++) {
                if (evaluation === 'multiply') {
                    tableHtml += '<td>' + i + ' X ' + j + ' = ' + (i * j) + '</td>';
                } else if (evaluation === 'division') {
                    tableHtml += '<td>' + i + ' / ' + j + ' = ' + (i / j).toFixed(2) + '</td>';
                } else if (evaluation === 'add') {
                    tableHtml += '<td>' + i + ' + ' + j + ' = ' + (i + j) + '</td>';
                } else if (evaluation === 'subtract') {
                    tableHtml += '<td>' + i + ' - ' + j + ' = ' + (i - j) + '</td>';
                }
            }
            tableHtml += '</tr>';
        }
        tableHtml += '</table>';
    // Show the generated table in the <div id="table">
        tableDiv.innerHTML = tableHtml;
        }