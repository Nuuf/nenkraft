module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL PixelBatch' );
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

    var W = c.width;
    var H = c.height;
    var HW = W * 0.5;
    var HH = H * 0.5;

    var wRatio = W / H;

    var mX = W / 30;
    var mY = H / 30;

    var stage = new nk.Stage2D( c, 0, 0, true, true );
    stage.ticker.Start();

    var pc = new nk.GLPixelBatchProgramController( stage.gl );
    stage.UseAsBatchParent( pc );

    var RF = nk.Utils.RandomFloat;
    var RI = nk.Utils.RandomInteger;

    ( function () {
      var i = 100000;
      while ( i-- ) {
        var p = new nk.Path.Pixel2D( 0, 0 );
        p.colorObj.r = 0.4;
        p.colorObj.g = Math.random();
        p.colorObj.b = 0.8;
        p.colorObj.a = RF( 0.1, 0.6 );
        p.style.pixel.size = RF( 1, 2 );
        var g = new nk.Graphic2D( HW, HH, p );
        g.data.velocity = new nk.Vector2D( RF( -10, 10 ), RF( -1, 10 ) );
        g.data.torque = RF( -nk.Math.RADIAN * 10, nk.Math.RADIAN * 10 );
        stage.Mount( g );
        g.UpdateTransform();
      }
      stage.ComputeBatchBuffer();

    }() );

    stage.onProcess.Add( function prasd () {
      this.children.forEach( function ( child ) {
        child.data.velocity.Rotate( child.data.torque );
        child.position.AddV( child.data.velocity );
        child.UpdateInBuffer();
      } );
      if ( stage.ticker.GetTPS() < 40 ) {
        console.log( stage.ticker.GetTPS() );
      }
    }, stage );


    console.log( stage.childDataBuffer );


    document.body.removeChild( buttonContainer );


  }
};