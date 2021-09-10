let canvas;
let context;
let player = 0;
let row = 9;
let col = 10;
let board1 = new Array(col); //top left player 1.
  for (let i = 0; i < col; i++) {board1[i] = new Array(row); }
let board2 = new Array(col); //top right player 2.
  for (let i = 0; i < col; i++) {board2[i] = new Array(row); }
let board3 = new Array(col); //bottom left player 1.
  for (let i = 0; i < col; i++) {board3[i] = new Array(row); }
let board4 = new Array(col); //bottom right player 2.
  for (let i = 0; i < col; i++) {board4[i] = new Array(row); }


function boards(p, r, c) {    //Currently just has board creating
  for(let i = 0; i < col; i++) {    //i is y coordinate
    for (let j = 0; j < row; j++) {    //j is x coordinate
      if (player == '0') {
        
    board1[i][j] = '0'; //I set it to zero to indicate nothing is there
        context.fillStyle = 'White';
        context.beginPath();
        context.arc(j*40 + 110,i*40 + 60,20, 0, 2*Math.PI); //x=100 y=50
        context.fill();
    context.closePath();
    
    board3[i][j] = '0';
    context.fillstyle = 'White';
    context.beginPath();
    context.arc(j*40 + 110, i*40 + 510, 20, 0, 2*Math.PI); //x=100 y=500
    context.fill();
    context.closePath();

    board2[i][j] = '0';
        context.fillStyle = 'White';
        context.beginPath();
        context.arc(j*40 + 610,i*40 + 60,20, 0, 2*Math.PI); //x=600 y=50
        context.fill();
    context.closePath();

    board4[i][j] = '0';
        context.fillStyle = 'White';
        context.beginPath();
        context.arc(j*40 + 610,i*40 + 510,20, 0, 2*Math.PI); //x=600 y=500
        context.fill();
    context.closePath();
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", ()=> {
  canvas = document.querySelector("#projectCanvas");
  console.log("Got here");
  context = canvas.getContext("2d");
  console.log(context);
  boards();
})

document.addEventListener("click", e=> {
   console.log("mouse location:", e.clientX, e.clientY);
})



