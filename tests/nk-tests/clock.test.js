module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Clock' );
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

    var stage = new nk.Stage2D( c, HW, HH );

    var clockPoints = new nk.Geom.Polygon2D();
    nk.Geom.Polygon2D.Construct.Cyclic( clockPoints, 0, 0, 300, 12 );
    clockPoints.Rotate( nk.Math.RADIAN * -90, 0.5, 0.5, true );

    stage.AddChild( new nk.Graphic2D( 0, 0, new nk.Path.Circle( 0, 0, 300 ) ) );

    var millisecondHand = stage.AddChild( new nk.Graphic2D( 0, 0, new nk.Path.Line2D( 0, 0, 50, 0 ) ) );
    var secondHand = stage.AddChild( new nk.Graphic2D( 0, 0, new nk.Path.Line2D( 0, 0, 300, 0 ) ) );
    var minuteHand = stage.AddChild( new nk.Graphic2D( 0, 0, new nk.Path.Line2D( 0, 0, 250, 0 ) ) );
    var hourHand = stage.AddChild( new nk.Graphic2D( 0, 0, new nk.Path.Line2D( 0, 0, 150, 0 ) ) );

    var i = clockPoints.vertices.length;
    while ( i-- ) {
      var p = stage.AddChild( new nk.Text(
        clockPoints.vertices[ i ].x,
        clockPoints.vertices[ i ].y,
        i === 0 ? 12 : i
      ) );
      p.style.text.baseline = nk.Style.TEXT_BASELINE.MIDDLE;
      p.style.text.align = nk.Style.TEXT_ALIGN.CENTER;
      p.style.text.fontSize = 59;
      p.style.text.fontFamily = 'Comic Sans MS, Comic Sans MS5, cursive';
      p.style.text.strokeColor = '#0F0';
      p.style.text.fillColor = '#000';
      p.style.text.lineWidth = 2;
      p.style.text.ConcatFont();
    }

    stage.onProcess.Add( function () {
      var date = new Date();
      var milliseconds = date.getMilliseconds();
      var seconds = date.getSeconds();
      var minutes = date.getMinutes();
      var hours = date.getHours();
      millisecondHand.path.e.RotateAroundV( millisecondHand.path.s, nk.Math.DTR( ( milliseconds / 1000 * 360 ) - 90 ) - millisecondHand.path.e.GetAngle() );
      secondHand.path.e.RotateAroundV( secondHand.path.s, nk.Math.DTR( ( seconds * 6 ) - 90 ) - secondHand.path.e.GetAngle() );
      minuteHand.path.e.RotateAroundV( minuteHand.path.s, nk.Math.DTR( ( minutes * 6 ) - 90 ) - minuteHand.path.e.GetAngle() );
      hourHand.path.e.RotateAroundV( hourHand.path.s, nk.Math.DTR( ( ( 60 * hours + minutes ) * 0.5 ) - 90 ) - hourHand.path.e.GetAngle() );
    } );

    document.body.removeChild( buttonContainer );
  }
};
