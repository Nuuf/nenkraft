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

    var box = stage.AddChild( new nk.Graphic2D( 0, 0, new nk.Path.AABB2D( -50, -50, 50, 50 ) ) );
    stage.AddChild( new nk.Graphic2D( 0, 0, new nk.Path.Circle( 0, 0, 50 ) ) );

    var equil = stage.AddChild( new nk.Graphic2D( 0, 0, nk.Geom.Polygon2D.Construct.Equilateral( new nk.Path.Polygon2D(), 0, -50, 100, 100 ) ) );

    var star = stage.AddChild( new nk.Graphic2D( 0, 0, nk.Geom.Polygon2D.Construct.Star( new nk.Path.Polygon2D(), 0, 0, 50, 25, 5 ) ) );
    star.transformAutomaticUpdate = false;

    var cyclic = stage.AddChild( new nk.Graphic2D( 0, 0, nk.Geom.Polygon2D.Construct.Cyclic( new nk.Path.Polygon2D(), 0, 0, 50, 3 ) ) );

    stage.onProcess.Add( function () {
      star.rotation -= nk.Math.RADIAN;
      box.rotation += nk.Math.RADIAN;
      equil.rotation -= nk.Math.RADIAN * 2;
    } );

    document.body.removeChild( buttonContainer );
  }
};