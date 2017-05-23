module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Nightsky' );
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

    var staticStars = [];


    var imageCache = new nk.Load.TextureLoader( [ {
      id: 'butterfly',
      src: nk.Utils.GenerateSimpleTexture( Butterfly )
    }, {
      id: 'staticStar',
      src: nk.Utils.GenerateSimpleTexture( StaticStar )
    }] );
    imageCache.onComplete.Add( function () {
      Go();
    } );

    function Go () {
      CreateSprites( { x: -HW, y: HW }, { x: -HH, y: HH }, 'staticStar', W / H * 500, staticStars, stage, 0.01 );
      stage.onProcess.Add( function () {
        for ( var i = 0, l = staticStars.length, star; i < l; ++i ) {
          star = staticStars[ i ];
          star.position.AddV( star.data.velocity );
          star.data.velocity.Rotate( nk.Math.DTR( star.data.torque ) );
        }
      }, stage );
    }

    function CreateSprites ( xv, yv, img, am, store, parent, scale ) {
      for ( var i = 0; i < am; ++i ) {
        var x = nk.Utils.RandomInteger( xv.x, xv.y );
        var y = nk.Utils.RandomInteger( yv.x, yv.y );
        var sprite = new nk.Sprite( x, y, imageCache.Get( img ) );
        sprite.anchor.Set( 0.5 );
        sprite.scale.Set( scale );
        sprite.rotation = nk.Utils.RandomFloat( 0, nk.Math.PII );
        sprite.data.velocity = new nk.Vector2D( x / 500, y / 500 );
        sprite.data.torque = ( x + y ) / 500 * nk.Utils.RandomInteger( -1, 1 );
        store.push( sprite );
        parent.AddChild( sprite );
      }
      console.log( i );
    }


    function Butterfly () {
      var path = new nk.Path.Polygon2D();
      path.style.fill.color = '#FFF';
      path.style.stroke.color = '#000';
      path.style.stroke.lineWidth = 3;
      nk.Geom.Polygon2D.Construct.Butterfly( path, 0, 0, 4000, 50 );
      var x = ( Math.abs( path.aabb.tl.x ) - Math.abs( path.aabb.br.x ) ) * 0.5;
      var t = new nk.Graphic2D( x, 0, path );
      t.anchor.Set( -0.5 );
      return t;
    }
    function StaticStar () {
      var path = new nk.Path.Polygon2D();
      path.style.fill.color = '#FFF';
      path.style.stroke.color = '#000';
      path.style.stroke.lineWidth = 3;
      nk.Geom.Polygon2D.Construct.Star( path, 0, 0, 800, 400, 5 );
      var x = ( Math.abs( path.aabb.tl.x ) - Math.abs( path.aabb.br.x ) ) * 0.5;
      var t = new nk.Graphic2D( x, 0, path );
      t.anchor.Set( -0.5 );
      return t;
    }

    document.body.removeChild( buttonContainer );
  }
};
