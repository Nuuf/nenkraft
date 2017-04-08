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

    var container = new nk.Container2D( 0, 0 );

    var starTexture = new nk.Path.Polygon2D();
    starTexture.style.stroke.applied = false;
    starTexture.style.fill.fillStyle = 'white';
    nk.Geom.Polygon2D.Construct.Star( starTexture, 0, 0, 1, 2, 6 );

    //Create stars
    for ( var i = 0, l = parseInt( W / H * 100 ); i < l; ++i ) {
      var graphic = new nk.Graphic2D( 0, 0, starTexture );
      container.AddChild( graphic );
      graphic.scale = new nk.LimitVector2D( Math.random(), undefined, -4, -4, 4, 4 );
      graphic.position = new nk.LimitVector2D( Math.random() * W, Math.random() * H, 0, 0, W, H );
      graphic.scale.invert = true;
      graphic.position.invert = true;
    }

    var rChildren = nk.Utils.ArrayGetRandom( container.children, 4 );
    var rrChildren = nk.Utils.ArrayGetRandom( container.children, 4 );

    var scaleSpeed = new nk.Vector2D( 0.01 );
    var fallSpeed = new nk.Vector2D( 2, 4 );

    console.log( container.children.length );

    function Update() {

      rc.fillStyle = 'rgba(0, 0, 0, 0.1)';
      rc.fillRect( 0, 0, W, H );

      for ( var i = 0, l = rChildren.length, child; i < l; ++i ) {
        child = rChildren[ i ];
        if ( child ) {
          child.position.AddV( fallSpeed );
          child.position.Limit();
        }
      }

      for ( var i = 0, l = rrChildren.length, child; i < l; ++i ) {
        child = rrChildren[ i ];
        if ( child ) {
          child.scale.AddV( scaleSpeed );
          child.scale.Limit();
        }
      }

      container.Draw( rc );
    }

    setInterval( Update, 1 );

    document.body.removeChild( buttonContainer );
  }
};
