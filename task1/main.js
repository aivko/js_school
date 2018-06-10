'use strict';

function insertData(number) {
    let rows = number,
        colums = number,
        matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < colums; j++) {
            matrix[i][j] = 0;
        }
    }

    let top = 0,
        bottom = rows - 1,
        left = 0,
        right = colums - 1,
        index = 1,
        direction = 0;

    while (top <= bottom && left <= right) {
        switch (direction % 4) {
            case 0:
                for (let col = left; col <= right; col++) {
                    matrix[top][col] = index++;
                }
                top++;
                direction++;
                break;
            case 1:
                for (let row = top; row <= bottom; row++) {
                    matrix[row][right] = index++;
                }
                right--;
                direction++;
                break;
            case 2:
                for (let col = right; col >= left; col--) {
                    matrix[bottom][col] = index++;
                }
                bottom--;
                direction++;
                break;
            default:
                for (let row = bottom; row >= top; row--) {
                    matrix[row][left] = index++;
                }
                left++;
                direction++;
                break;
        }
    }

    generateTable(matrix)
}

function generateTable(array) {
    let table = document.createElement('table'),
        rows = {},
        colums = {};
    table.setAttribute('border', '1');
    array.forEach(function (rowData) {
        rows = table.insertRow(-1);
        rowData.forEach(function (cellData) {
            colums = rows.insertCell();
            colums.textContent = cellData;
            colums.setAttribute('align', 'center');
            colums.setAttribute('width', '30');
        });
    });
    document.body.appendChild(table);
}

insertData(11);