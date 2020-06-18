if (document.querySelector('#canvas').clientWidth < 480) {
    HEIGHT = document.querySelector('#canvas').clientWidth;
    WIDTH = document.querySelector('#canvas').clientWidth;
    
    CELL_SIZE_X = Math.round(5 * 1270 / WIDTH)
    CELL_SIZE_Y = Math.round(10 * 700 / HEIGHT)
} 

if (document.querySelector('#canvas').clientWidth < 830 && document.querySelector('#canvas').clientWidth > 480) {
    HEIGHT = document.querySelector('#canvas').clientWidth ;
    WIDTH = document.querySelector('#canvas').clientWidth;
    
    CELL_SIZE_X = Math.round(40 * 1270 / WIDTH)
    CELL_SIZE_Y = Math.round(40 * 700 / HEIGHT)
} 

if (document.querySelector('#canvas').clientWidth < 1100 && document.querySelector('#canvas').clientWidth > 830) {
    HEIGHT = document.querySelector('#canvas').clientWidth ;
    WIDTH = document.querySelector('#canvas').clientWidth;
    
    CELL_SIZE_X = Math.round(30 * 1270 / WIDTH)
    CELL_SIZE_Y = Math.round(60 * 700 / HEIGHT)
} 

if ((document.querySelector('#canvas').clientWidth >1100)) {
    HEIGHT = document.querySelector('#canvas').clientHeight;
    WIDTH = document.querySelector('#canvas').clientWidth;
    
    CELL_SIZE_X = Math.round(80 * 1270 / WIDTH)
    CELL_SIZE_Y = Math.round(80 * 700 / HEIGHT)
}

const X0 = 0
const Y0 = 0

const GRID_COLOR = "#ccc"
const AXIS_COLOR = "#000" 

SCALE = 1               

let canvas = document.getElementById("canvas")

canvas.width = WIDTH
canvas.height = HEIGHT

let plotter = new Plotter(canvas, CELL_SIZE_X, CELL_SIZE_Y, X0, Y0, GRID_COLOR, AXIS_COLOR, SCALE)

document.addEventListener('mousewheel', function(e) {plotter.MouseWheel(e)} )
document.addEventListener('mousemove', function(e) {plotter.MouseMove(e)} )
document.addEventListener('mousedown', function(e) {plotter.MouseDown(e)} )
document.addEventListener('mouseup', function(e) {plotter.MouseUp(e)} )
document.addEventListener('keydown', function(e) {
   if(e.keyCode == 13)
      AddAndPlot()
   e.preventDefault()} )

function AddAndPlot() {
  var an = document.getElementById("enter")
  var b = an.value
  var lexemes = b.match(/\(|\)|\+|\-|\*|\/|\^|\d+\.\d*|\d+|sqrt|x|sin|cos|tan|cot|pi|e/gi)
  var calc = new Calc(lexemes)

  plotter.AddSimpleFunction(calc)
  plotter.Plot()
}

plotter.Plot()