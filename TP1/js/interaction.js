//Création de createShape l'objet qui va traiter le déclanchement de l'évènement.

var mouse_x = 0;
var mouse_y = 0;
var anim = false;

function CreateShape(canva, interactor) {

  function onMouseDown(evt) {
    let res = getMousePosition(canva, evt);
    mouse_x = res.x;
    mouse_y = res.y;
    interactor.onInteraction(this);
  }

  function onKeyPress() {
      interactor.onInteractionAnimate(this);
  }
  canva.addEventListener('mousedown', onMouseDown);
  document.addEventListener('keydown', (event) => {
    if(event.key === "m"){
      anim = !anim;
      onKeyPress();
    }
  });
}



//Fonction permettant de récupérer la position de la souris 
//par rapport au canvas
function getMousePosition(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  