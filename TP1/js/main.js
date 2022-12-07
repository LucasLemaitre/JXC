function startDrawing() {
    myDrawingGame.start();
    console.log("start !");
    //testDrawing();
}

function testDrawing(){
    //TODO 5.
    //Création d'un rectangle
    var shape_1 = new Shape(10, 10, 'red');
    var rect = new Rectangle(shape_1, 20, 4);
    //Affichage de la forme dans la console du navigateur
    console.log(rect);
    //Création d'un cercle
    var shape_2 = new Shape(23, 40, 'blue');
    var circle = new Circle(shape_2, 5);
    //Affichage de ce cercle dans la console du navigateur
    console.log(circle);
    //TODO 6.
    //Affichage des deux formes dans le canvas
    rect.paint(myDrawingGame.canvas.getContext("2d"));
    circle.paint(myDrawingGame.canvas.getContext("2d"));
}

var myDrawingGame={
    canvas : document.getElementById('myCanvas'), //TODO 4.
    start : function(){
        this.context = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth * 0.8;
        this.canvas.height = window.innerHeight * 0.7;
        this.drawing = new Drawing();
        this.myPointer = new Pointeur(this.canvas);
    }
}

window.onload = startDrawing;

function reset(){
    myDrawingGame.canvas.getContext("2d").clearRect(0, 0, myDrawingGame.canvas.width, myDrawingGame.canvas.height);
    myDrawingGame.drawing.reset();
}