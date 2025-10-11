'use strict'
//------------------------------------------------------------------------------
//COMENTARIO: Te recomiendo usar let o const en vez de var, ya que es una práctica moderna en JS
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
//------------------------------------------------------------------------------
//COMENTARIO: Puedes crear los botones en tiempo de ejecución, vas bastante bien en lo
//que llevabas hasta el momento: dentro del ciclo for, creas el elemento boton, le asignas
// el valor textContent, value y clases. ¡Vas bien, deberias intentarlo!

    //Como crear botones en ejecución
    // for (let n = 1; n <= 9; n++){
    //     const boton=document.createElement('div')
    //     boton.classList.add('numero')
    //     boton.textContent=n

//------------------------------------------------------------------------------
//COMENTARIO: El tablero está super bien, lo que te puedo sugerir en este momento es meter
//el codigo en una función, para hacerlo de manera modular, asi puedes probarlo de a poco,
//luego lo pones en un Window.Onlad.

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

//------------------------------------------------------------------------------
//COMENTARIO: En esta parte comprendo que quieres hacer la validación, te recomiendo que,
//al igual que en el comentario anterior, lo hagas en una función aparte para ir probando
//poco a poco el funcionamiento. Nos sirve para ir revisando si el codigo funciona

        // No esta
        //if(board[filas][columna]==solution){
        //     alert("HAS GANADO OLE TU POLLA") // cuidado con esos comentarios jaja
        // }
    }
}

//------------------------------------------------------------------------------
//COMENTARIO: Muy bien esto, por orden del proyecto, te recomiendo ponerlo arriba
let selectedNumber = null

//------------------------------------------------------------------------------
//COMENTARIO: Bien realizado, lo mismo que en los comentarios anteriores, separa el proyecto
//en pequeñas partes a través de funciones para que vayas probando el funcionamiento
const buttons = document.querySelectorAll('.CajaBotones button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(b => b.style.backgroundColor = '')
        selectedNumber = button.textContent
        button.style.backgroundColor = 'Orange'
    })
})

//------------------------------------------------------------------------------
//COMENTARIO: Lo mismo que en los comentarios anteriores, separa el proyecto
//en pequeñas partes a través de funciones para que vayas probando el funcionamiento
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

//------------------------------------------------------------------------------
//COMENTARIO: Aquí podrias poner el Window.Onload para ir probando las funciones que te
//he sugerido

// Window.onload = () => {};

