module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Performance' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = 0;
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var container = new nk.Container2D( HW, HH );

    var texture = null;

    function CreateTexture () {
      var path = new nk.Path.Polygon2D();
      nk.Geom.Polygon2D.Construct.Cyclic( path, 0, 0, 30, 3 );
      var d = path.aabb.br.AbsoluteCopy().SubtractVC( path.aabb.tl.AbsoluteCopy() );
      var t = new nk.Graphic2D(( path.aabb.w * 0.5 ) - ( d.x * 0.5 ), ( path.aabb.h * 0.5 ) - ( d.y * 0.5 ), path );
      return t;
    }

    var ticker = new nk.Ticker( Update );

    var numTimes = 20;
    var hold = 20;
    var holdCounter = 0;
    var fps = 55;

    var childrenMDC = [];

    var timer = new nk.Timer();
    timer.onStop.Add( function () {
      var i = 35;
      while ( --i ) {
        var sprite = new nk.Sprite( Math.random() * W - HW, Math.random() * H - HH, texture );
        sprite.transformAutomaticUpdate = false;
        container.AddChild( sprite );
      }

      if ( ticker.GetTPS() > fps || holdCounter++ < hold ) {
        this.Start( 1 );
      }
      else {
        var numChildren = container.children.length;
        console.log( numChildren, ticker.GetTPS() );
        container.Dump();
        holdCounter = 0;
        childrenMDC.push( numChildren );
        numTimes--;
        if ( numTimes > 0 ) {
          timer.Start( 120 );
        } else {
          childrenMDC.sort( function ( a, b ) {
            return a - b;
          } );
          console.log( childrenMDC, '\nMIN: ' + childrenMDC[ 0 ], 'MED: ' + childrenMDC[ Math.round( childrenMDC.length / 2 ) ], 'MAX: ' + childrenMDC[ childrenMDC.length - 1 ] );
        }
      }
    }, timer );

    var imageCache = new nk.Load.TextureLoader( [ {
      id: 'tex',
      src: nk.Utils.GenerateSimpleBase64Png( CreateTexture )
    }] );
    imageCache.onComplete.Add( function () {
      texture = imageCache.Get( 'tex' );
      timer.Start( 120 );
    } );

    function Update () {
      rc.setTransform( 1, 0, 0, 1, 0, 0 );
      rc.fillStyle = 'rgba(0, 0, 0, 1)';
      rc.fillRect( 0, 0, W, H );
      container.Draw( rc );
      timer.Process();
    }

    document.body.removeChild( buttonContainer );
  }
};