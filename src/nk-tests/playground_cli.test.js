module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground CLI' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', RunPlayground_CLI );
  buttonContainer.appendChild( button );

  function RunPlayground_CLI() {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = 0;

    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var mouse = new nk.Input.Mouse( c );
    //var ticker = new nk.Ticker( Update );
    var container = new nk.Container2D( 0, 0 );

    function Update() {

      rc.fillStyle = 'rgba(0, 0, 0, 1)';
      rc.fillRect( 0, 0, W, H );

      container.Draw( rc );
    }

    document.body.removeChild( buttonContainer );
  }
};