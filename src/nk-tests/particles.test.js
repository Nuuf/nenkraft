module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Particles' );
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
    stage.clear = false;
    stage.fill = false;

    imageCache = new nk.Load.TextureLoader( [
      {
        id: 'particle',
        src: nk.Utils.GenerateSimpleBase64Png( function () {
          var path = new nk.Path.Circle( 5, 5, 5 );
          var t = new nk.Graphic2D( 0, 0, path );
          return t;
        } )
      }
    ] );
    imageCache.onComplete.Add( function () {

      var i = 4000;
      while ( i-- ) {
        var child = stage.AddChild( new nk.Plainsprite( 0, 0, imageCache.Get( 'particle' ) ) );
        child.data.velocity = new nk.Vector2D( nk.Utils.RandomFloat( -2, 5 ), nk.Utils.RandomFloat( -2, 5 ) );
      }

      var totalTime = 600;

      var timer = new nk.Timer();
      timer.Start( totalTime );
      timer.onStop.Add( function () {
        stage.ticker.Stop();
      } );

      stage.onProcess.Add( function () {
        var i = this.children.length, child;
        while ( i-- ) {
          child = this.children[ i ];
          child.position.AddV( child.data.velocity );
          child.data.velocity.Rotate( nk.Math.RADIAN * nk.Utils.RandomFloat( -4, 4 ) );
          child.scale.Set(( totalTime - timer.time ) / totalTime );
        }
        timer.Process();
      }, stage );
    } );

    document.body.removeChild( buttonContainer );
  }
};