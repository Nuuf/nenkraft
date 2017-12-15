module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL Texturebatch' );
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

    var RF = nk.Utils.RandomFloat;
    var RI = nk.Utils.RandomInteger;

    stage = new nk.Stage2D( c, 0, 0, false, true );

    var pc = new nk.GLTextureBatchProgramController( stage.gl );
    stage.UseAsBatchParent( pc );

    var ic = new nk.ImageLoader();
    ic.onComplete.Add( function ( _event ) {
      var tex = ic.GetBasicTexture( 'colors' );
      pc.BindBasicTexture( tex );

      ( function () {
        var i = 5000;
        while ( i-- ) {
          var s = new nk.Sprite( HW, HH, tex );
          var ac = s.animationController = new nk.Animator.Controller( s );
          var anim = ac.AddAnimation( 'test', RI( 5, 40 ) );
          anim.GenerateFrames( 64, 64, 1024, 64, 16 );
          ac.PlayAnimation( 'test', RI( 0, 15 ) );
          var vx = RF( 3, 5 );
          vx = nk.Utils.ThisOrThat( vx, -vx );
          var vy = RF( 3, 5 );
          vy = nk.Utils.ThisOrThat( vy, -vy );
          var to = RF( nk.Math.RADIAN, nk.Math.RADIAN * 10 );
          to = nk.Utils.ThisOrThat( to, -to );
          s.data.velocity = new nk.Vector2D( vx, vy );
          s.data.torque = to;
          s.scale.Set( 0.4 );
          s.anchor.Set( 0.5 );
          stage.Mount( s );
          s.UpdateTransform();
        }
        stage.ComputeBatchBuffer();

        stage.onProcess.Add( function () {
          this.children.forEach( function ( child ) {
            child.animationController.Process();
            child.data.velocity.Rotate( child.data.torque );
            child.position.AddV( child.data.velocity );
            child.UpdateInBuffer();
          } );
          if ( stage.ticker.GetTPS() < 55 ) {
            console.log( stage.ticker.GetTPS() );
          }
        }, stage );
      }() );
    } );

    ic.Load( [
      { id: 'colors', src: './images/colors.png', w: 64, h: 64 }
    ], true );



    document.body.removeChild( buttonContainer );


  }
};