module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;
    var widthByHeight = W / H;

    var stage = new nk.Stage2D( c, HW, HH, true );
    stage.ticker.StartAF();

    stage.AddChild( new nk.Graphic2D( 0, 0, new nk.Path.Line2D( -HW, 0, HW, 0 ) ) );
    stage.AddChild( new nk.Graphic2D( 0, 0, new nk.Path.Line2D( 0, -HH, 0, HH ) ) );

    document.body.removeChild( buttonContainer );
  }
};