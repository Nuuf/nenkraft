module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Magnet' );
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

    var magnet = new nk.Plaingraphic2D( 0, 0, new nk.Path.AABB2D( -50, -25, 50, 25 ) );
    console.log( magnet.width, magnet.height );
    magnet.data.pole = new nk.Vector2D( 40, 0 );
    magnet.data.radius = 15;
    magnet.data.dragging = false;
    magnet.data.body = {
      shape: magnet.path,
      relative: magnet.position,
      anchor: new nk.Vector2D( 0, -1 )
    };


    var test = new nk.Plaingraphic2D( 0, 0, new nk.Path.AABB2D( -50, -50, 50, 50 ) );
    test.data.body = {
      shape: test.path,
      relative: test.position,
      anchor: new nk.Vector2D()
    };

    var Collide = nk.Math.Collision2D.AABB2DvsAABB2D.Relative.Collide;

    stage.AddChildren( magnet, test );

    stage.onProcess.Add( function () {
      var mtv = Collide( magnet.data.body, test.data.body );
      if ( mtv ) test.position.SubtractV( mtv );
    } );

    stage.mouse.onDown.Add( function ( _event ) {
      if ( magnet.IntersectsPoint( _event.data.position ) ) {
        magnet.data.dragging = true;
        _event.stopPropagation = true;
      }
    } );
    stage.mouse.onMove.Add( function () {
      if ( magnet.data.dragging ) {
        magnet.position.SetV( stage.mouse.position );
      }
    } );
    stage.mouse.onUp.Add( function () {
      magnet.data.dragging = false;
    } );

    document.body.removeChild( buttonContainer );
  }
};