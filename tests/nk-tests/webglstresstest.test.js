module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL Stresstest' );
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
    var gl = c.getContext( 'webgl' );
    if ( !gl ) {
      gl = c.getContext( 'experimental-webgl' );
    }

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var container = new nk.Container2D( 0, 0 );
    container.scale.Set( 2 / W, -2 / H );
    container.position.Add( -1 + 1, 0 );
    container.UpdateTransform();

    var pcon = null;
    var pcon0 = null;

    var cpath = new nk.Path.Circle( 0, 0, 25 );
    pcon0 = new nk.GLCircleProgramController( gl );
    cpath.LinkProgramController( pcon0 );

    var rpath = new nk.Path.AABB2D( -25, -25, 25, 25 );
    pcon1 = new nk.GLRectangleProgramController( gl );
    rpath.LinkProgramController( pcon1 );

    var usedPath = rpath;

    function CreateTexture () {
      var path = new nk.Path.Polygon2D();
      path.style.stroke.lineWidth = 1;
      nk.Geom.Polygon2D.Construct.Cyclic( path, 0, 0, 32, 12 );
      var d = path.aabb.br.AbsoluteCopy().SubtractVC( path.aabb.tl.AbsoluteCopy() );
      var t = new nk.Graphic2D( ( path.aabb.w * 0.5 ) - ( d.x * 0.5 ), ( path.aabb.h * 0.5 ) - ( d.y * 0.5 ), path );
      return t;
    }

    var ticker = new nk.Ticker( Update, 1000, true );
    ticker.Start();

    var numTimes = 20;
    var hold = 20;
    var holdCounter = 0;
    var fps = 24;

    var am = 35;

    var childrenMDC = [];

    var spritePool = new nk.Pool( nk.Sprite );
    var graphicPool = new nk.Pool( nk.Graphic2D );

    var usedPool = graphicPool;

    var timer = new nk.Timer();
    timer.onFinish.Add( function () {
      var i = am;
      am = am < 3 ? 3 : am--;
      while ( i-- ) {
        var obj = usedPool.Retrieve();
        container.AddChild( obj );
      }

      if ( ticker.GetTPS() > fps || holdCounter++ < hold ) {
        this.Start( 1 );
      }
      else {
        var numChildren = container.children.length;
        console.log( numChildren, ticker.GetTPS() );
        container.children.forEach( function ( child ) {
          usedPool.Store( child );
        } );
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

    var imageCache = new nk.ImageLoader( [ {
      id: 'tex',
      src: nk.Utils.GenerateSimpleBase64Png( CreateTexture )
    }], true );
    imageCache.onComplete.Add( function () {
      pcon = new nk.GLTextureProgramController( gl );
      pcon.BindBasicTexture( imageCache.GetBasicTexture( 'tex' ) );

      spritePool.Flood( function ( obj ) {
        obj.x = Math.random() * W - HW;
        obj.y = Math.random() * H - HH;
        obj.programController = pcon;
        obj.transformAutomaticUpdate = false;
        obj.SetTexture( pcon.originalTexture );
      }, 5000 );
      graphicPool.Flood( function ( obj ) {
        obj.x = Math.random() * W - HW;
        obj.y = Math.random() * H - HH;
        obj.transformAutomaticUpdate = false;
        obj.SetPath( usedPath );
      }, 5000 );
      timer.Start( 120 );
    } );

    function Update () {
      gl.viewport( 0, 0, W, H );
      gl.clear( gl.COLOR_BUFFER_BIT );
      gl.enable( gl.BLEND );
      gl.disable( gl.DEPTH_TEST );
      gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
      container.GLDraw( gl );
      timer.Process();
      gl.flush();
    }

    document.body.removeChild( buttonContainer );
  }
};