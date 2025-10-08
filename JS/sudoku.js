'use strict'

var table = document.getElementById('SudokuBoard')

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]
var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]
    //Como crear botones en ejecución
    // for (let n = 1; n <= 9; n++){
    //     const boton=document.createElement('div')
    //     boton.classList.add('numero')
    //     boton.textContent=n
    //
for (var filas = 0; filas < 9; filas++) {
    for (var columna = 0; columna < 9; columna++) {
        var cell = document.createElement('div')
        cell.classList.add('cell')
        if (filas % 3 === 0) cell.style.borderTop = '3px solid #000'
        if (columna % 3 === 0) cell.style.borderLeft = '3px solid #000'
        if (filas === 8) cell.style.borderBottom = '3px solid #000'
        if (columna === 8) cell.style.borderRight = '3px solid #000'
        table.appendChild(cell)
        if (board[filas][columna] !== '-') {
            cell.textContent = board[filas][columna]
            cell.classList.add('fixed');
            cell.style.background="LightGray"
        }
        // No esta
        //if(board[filas][columna]==solution){
        //     alert("HAS GANADO OLE TU POLLA")
        // }
    }
}

let selectedNumber = null

const buttons = document.querySelectorAll('.CajaBotones button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(b => b.style.backgroundColor = '')
        selectedNumber = button.textContent
        button.style.backgroundColor = 'Orange'
    })
})

const cells = document.querySelectorAll('#SudokuBoard .cell')
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (selectedNumber && !cell.classList.contains('fixed')) {
            cell.textContent = selectedNumber;
            buttons.forEach(b => b.style.backgroundColor = '')
            selectedNumber = null;
        }
    })
})

