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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH );
    stage.clear = false;
    stage.fill = false;
    stage.gco = nk.Style.GCO.COLOR_DODGE;

    var imageCache = new nk.ImageLoader( [
      {
        id: 'particle',
        src: nk.Utils.GenerateSimpleBase64Png( function () {

          var path = new nk.Path.Circle( 20, 20, 20 );
          path.style.fill.color = 'rgba(0, 0, 0, 0.01)';
          path.style.stroke.color = 'rgba(255, 200, 50, 0.1)';
          var t = new nk.Graphic2D( 0, 0, path );
          return t;
        
        } )
      }
    ], true );
    imageCache.onComplete.Add( function () {

      var i = 250;

      while ( i-- ) {

        var child = stage.AddChild( new nk.Plainsprite( 0, 0, imageCache.GetBasicTexture( 'particle' ) ) );
        child.data.velocity = new nk.Vector2D( nk.Utils.RandomFloat( -2, 2 ), nk.Utils.RandomFloat( -2, 2 ) );
      
      }

      var totalTime = 400;

      var timer = new nk.Timer();
      timer.Start( totalTime );
      timer.onFinish.Add( function () {

        stage.ticker.Stop();
      
      } );

      stage.onProcess.Add( function () {

        var i = this.children.length, child;

        while ( i-- ) {

          child = this.children[ i ];
          child.position.AddV( child.data.velocity );
          child.data.velocity.Rotate( nk.Math.RADIAN * nk.Utils.RandomFloat( -12, 12 ) );
          child.scale.Set( ( totalTime - timer.time ) / totalTime );
        
        }

        timer.Process();
      
      }, stage );
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};
