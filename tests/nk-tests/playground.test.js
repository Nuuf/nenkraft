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
    window.c = c;

    var stage = new nk.Stage2D( c, window.innerWidth * 0.5, window.innerHeight * 0.5 );

    window.stage = stage;

    var lineP = new nk.Path.Line2D( 100, 0, 360, 0 );
    var g = new nk.Graphic2D( 0, 0, lineP );

    var angleDeg = 0;

    stage.AddChild( g );

    stage.onProcess.Add( function() {

      lineP.e.RotateAbsoluteAroundV( lineP.s, nk.Math.DTR( angleDeg ) );

      angleDeg += 0.1;

      lineP.s.Rotate( nk.Math.RADIAN );
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};
