let canvas = document.getElementById("pixel_canvas");
let height = document.getElementById("input_height");
let width = document.getElementById("input_width");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

color.addEventListener("click", function(){});

sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

function makeGrid() {
    {
        for (let r=0; r<height.value; r++){
        const row = canvas.insertRow(r);
        for (let c=0; c<width.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
            var bools = false;
  document.querySelector('#pixel_canvas').addEventListener('mousedown', function(){
    bools=true;
  });

  cell.addEventListener('mouseover', function(event){
    if(bools){
      event.target.style.backgroundColor=color.value;
      console.log(bools);
    }
  });
 cell.addEventListener('mouseup', function(){
   bools=false;
  });

//  document.querySelector('.grid').addEventListener('mouseup', function(){
 //   bools=false;
 // });

             }
    
        }
    }
   
}
function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}
// alternative code:
// while (table.rows.length > 0) {
//  table.deleteRow(0);
// }


/*var eraseAll = document.querySelector('#erase');
eraseAll.addEventListener('click', function(event){
  for(var k=0;k<pixel;k++){
    pixel[k].style.backgroundColor='white';
  }
});*/