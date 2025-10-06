'use strict';

var table = document.getElementById('SudokuBoard');

if (table) {
    for (var r = 0; r < 9; r++) {
        for (var c = 0; c < 9; c++) {
            var cell = document.createElement('div');
            cell.classList.add('cell');

            if (r % 3 === 0) cell.style.borderTop = '3px solid #000';
            if (c % 3 === 0) cell.style.borderLeft = '3px solid #000';
            if (r === 8) cell.style.borderBottom = '3px solid #000';
            if (c === 8) cell.style.borderRight = '3px solid #000';

            table.appendChild(cell);
        }
    }
} else {
    console.error("No se encontró el div con id 'SudokuBoard'");
}
