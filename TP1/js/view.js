//Implémenter les fonctions paint() à ajouter dans le prototype des objets.

Rectangle.prototype.paint = function(canvaContext) {
    this.shape.path = new Path2D;
    this.shape.path.rect(this.shape.x, this.shape.y, this.lo, this.la);
    canvaContext.fillStyle = this.shape.color;
    canvaContext.fill(this.shape.path);
}

Circle.prototype.paint = function(canvaContext) {
    this.shape.path = new Path2D;
    this.shape.path.arc(this.shape.x, this.shape.y, this.r, 0, 2 * Math.PI);
    canvaContext.fillStyle = this.shape.color;
    canvaContext.fill(this.shape.path);
}

Drawing.prototype.paint = function(canvaContext) {
    canvaContext.clearRect(0, 0, myDrawingGame.canvas.width, myDrawingGame.canvas.height);
    this.shapes.forEach(shape => {
        shape.paint(canvaContext);
    });
}