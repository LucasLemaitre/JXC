//Transformation des interactions réalisées par l'utilisateur (interaction.js) 
//en commandes allant modifier le modèle avec mise à jour de la vue.

function Pointeur(canvas) {
    this.shape = new Shape(0, 0);
    this.type = '';
    this.shape.color = randomColor;
    this.ratio = 1;
    this.cs = new CreateShape(canvas, this);
}

Pointeur.prototype.onInteraction = function() {
    this.shape = new Shape(mouse_x, mouse_y);

    if(document.getElementById('shape_1').checked === true){
        this.type = 'cercle';
    } else {
        this.type = 'rectangle';
    }
    
    this.shape.color = randomColor();
    this.ratio = document.getElementById('size').value;

    var figure;
    if('rectangle' === this.type) {
        var figure = new Rectangle(this.shape, this.ratio, this.ratio);
    } else {
        var figure = new Circle(this.shape, this.ratio);
    }
    myDrawingGame.drawing.add(figure);
    figure.paint(myDrawingGame.canvas.getContext("2d"));
}

function animate() {
    myDrawingGame.drawing.shapes.forEach(element => {
        element.shape.gravitySpeed += element.shape.gravity;
        
        element.shape.x += element.shape.dx;
        element.shape.y += (element.shape.dy + element.shape.gravitySpeed);

        if(element.r){
            if(element.shape.x - element.r <= 0 || element.shape.x + element.r > myDrawingGame.canvas.width)
                element.shape.dx = -element.shape.dx
            if(element.shape.y - element.r <= 0 || element.shape.y + element.r > myDrawingGame.canvas.height)
                element.shape.dy = -element.shape.dy
            if(element.shape.y + element.r > myDrawingGame.canvas.height){
                element.shape.gravitySpeed = -(element.shape.gravitySpeed * element.shape.bounce);
            }

        } else {
            if(element.shape.x <= 0 || element.shape.x + element.lo > myDrawingGame.canvas.width)
                element.shape.dx = -element.shape.dx
            if(element.shape.y <= 0 || element.shape.y + element.la > myDrawingGame.canvas.height)
                element.shape.dy = -element.shape.dy
            if(element.shape.y + element.la > myDrawingGame.canvas.height){
                element.shape.gravitySpeed = -(element.shape.gravitySpeed * element.shape.bounce);
            }
        }
        
    });
    myDrawingGame.drawing.paint(myDrawingGame.canvas.getContext("2d"));

    if(anim){
        window.requestAnimationFrame(animate);
    }
}

Pointeur.prototype.onInteractionAnimate = function() {
    window.requestAnimationFrame(animate);
}



//Fonction permettant de générer une couleur rgba aléatoirement
function randomColor() {
    return (
        "rgba(" +
        Math.round(Math.random() * 255 ) + 
        "," +
        Math.round(Math.random() * 255 ) + 
        "," +
        Math.round(Math.random() * 255 ) + 
        "," +
        Math.ceil(Math.random() * 10) /10 + 
        ")"
    );
}