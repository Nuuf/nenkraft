module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL Line2D' );
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

    var W = c.width;
    var H = c.height;

    var mX = W / 45;
    var mY = H / 45;

    var stage = new nk.Stage2D( c, 0, 0, false, true );

    var pc = new nk.GLLine2DProgramController( stage.gl );

    var s = new nk.Vector2D();

    var points = nk.Math.SquareGrid( W + mX, H + mY, mX, mY, nk.Vector2D );

    var i = points.length;

    while ( i-- ) {

      var e = points[ i ];
      var path = new nk.Path.Line2D( s, e );
      path.LinkProgramController( pc );
      var g = new nk.Graphic2D( 0, 0, path );
      g.AttachTo( stage );
    
    }

    function Update () {

      s.SetV( stage.mouse.position );
    
    }

    stage.onProcess.Add( Update, stage );

    document.body.removeChild( buttonContainer );

  }

};
