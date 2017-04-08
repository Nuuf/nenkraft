module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground 1' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', RunPlayground_1 );
  buttonContainer.appendChild( button );

  function RunPlayground_1() {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = 0;
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var container = new nk.Container2D( HW, HH );

    function Update() {

      rc.fillStyle = 'rgba(255, 255, 255, 1)';
      rc.fillRect( 0, 0, W, H );

      container.Draw( rc );

      requestAnimationFrame( Update );
    }

    Update();

    document.body.removeChild( buttonContainer );
  }
};
