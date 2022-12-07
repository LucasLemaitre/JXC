//Implémenter les functions pour construire les 4 objets Drawing, Shape, Rectangle et Circle.

function Drawing() {
  this.shapes = [];
}

Drawing.prototype.add = function(shape) {
  this.shapes.push(shape);
}

Drawing.prototype.reset = function() {
  this.shapes = [];
}

function Shape(x, y, color, path) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.path = path;
  this.dx = 2 * Math.random() - 1;
  this.dy = 2 * Math.random() - 1;
  this.gravity = 0.01;
  this.gravitySpeed = 0;
  this.bounce = 0.8;
}

function Rectangle(shape, lo, la) {
    this.shape = shape;
    this.lo = +lo;
    this.la = +la;
}

function Circle(shape, r) {
    this.shape = shape;
    this.r = +r;
}