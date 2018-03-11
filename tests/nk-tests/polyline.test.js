module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Polyline' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    var W = window.innerWidth, HW = W * 0.5;
    var H = window.innerHeight, HH = H * 0.5;

    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';

    var stage = new nk.Stage2D( { 
      canvas: c,
      x: HW,
      y: HH
    } );

    var polygon = nk.Path.Polygon2D();
    nk.Geom.Polygon2D.Construct.Star( polygon, 0, 0, 400, 250, 12 );

    var lines = nk.Geom.Polygon2D.ExtractSegments( polygon );

    console.log( lines );

    var timer = nk.Timer();
    timer.Start( 120 );
    timer.onFinish.Add( function() {

      stage.ticker.Stop();
    
    } );

    // stage.AddChild( nk.Graphic2D( 0, 0, polygon ) );

    lines.forEach( function( line ){

      stage.AddChild( nk.Graphic2D( 0, 0, nk.Path.Line2D( line.s, line.e ) ) );
    
    } );

    stage.onProcess.Add( function() {

      timer.Process();

      stage.children.forEach( function( child ) {

        child.x += Math.random() * 2 - 1;
        child.y += Math.random() * 2 - 1;
      
      } );
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};
