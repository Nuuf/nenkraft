module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Performance' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', RunPerformance );
  buttonContainer.appendChild( button );

  function RunPerformance() {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = 0;
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var container = new nk.Container2D( HW, HH );
    var texture = new nk.Path.Polygon2D();
    nk.Geom.Polygon2D.Construct.Circlic( texture, 0, 0, 30, 3 );

    var ticker = new nk.Ticker( Update );

    var numTimes = 20;
    var fps = 48;

    var childrenMDC = [];

    var timer = new nk.Timer();
    timer.onStop.Add( function () {
      var i = 50;
      while ( --i ) {
        var graphic = new nk.Graphic2D( Math.random() * W - HW, Math.random() * H - HH, texture );
        container.AddChild( graphic );
      }

      if ( ticker.GetTPS() > fps ) this.Start( 1 );
      else {
        var numChildren = container.children.length;
        console.log( numChildren );
        container.Dump();
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

    timer.Start( 120 );



    function Update() {
      rc.fillStyle = 'rgba(0, 0, 0, 1)';
      rc.fillRect( 0, 0, W, H );
      container.Draw( rc );
      timer.Process();
    }

    document.body.removeChild( buttonContainer );
  }
};