module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL TextureBatch' );
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

    var RF = nk.Utils.RandomFloat;
    var RI = nk.Utils.RandomInteger;

    var stage = window.stage = new nk.Stage2D( c, 0, 0, false, true );

    var pc = new nk.GLTextureBatchProgramController( stage.gl );
    stage.UseAsBatchParent( pc );

    var ic = new nk.ImageLoader();
    ic.onComplete.Add( function () {

      var tex = ic.GetBasicTexture( 'colors' );
      pc.BindBasicTexture( tex );

      ( function () {

        var i = 10000;

        while ( i-- ) {

          var s = new nk.Sprite( HW, HH, tex );
          var ac = s.animationController = new nk.Animator.Controller( s );
          var anim = ac.CreateAnimation( 'test', RI( 5, 40 ) );
          anim.GenerateFrames( 64, 64, 1024, 64, 16 );
          ac.PlayAnimation( 'test', RI( 0, 15 ) );
          var vx = RI( 1, 5 );
          vx = nk.Utils.ThisOrThat( vx, -vx );
          var vy = RI( 1, 5 );
          vy = nk.Utils.ThisOrThat( vy, -vy );
          var to = RF( nk.Math.RADIAN, nk.Math.RADIAN * 5 );
          to = nk.Utils.ThisOrThat( to, -to );
          s.data.velocity = new nk.Vector2D( vx, vy );
          s.data.torque = to;
          s.scale.Set( RF( 0.3, 0.4 ) );
          s.anchor.Set( 0.5 );
          stage.Mount( s );
          s.UpdateTransform();
        
        }

        stage.ComputeBatchBuffer();

        stage.onProcess.Add( function () {

          for ( var i = 0, child; i < this.children.length; ++i ) {

            child = this.children[ i ];
            child.animationController.Process();
            child.data.velocity.Rotate( child.data.torque );
            child.position.AddV( child.data.velocity );
            child.UpdateInBuffer();
          
          }

          if ( stage.ticker.GetTPS() < 30 ) {

            console.log( stage.ticker.GetTPS() );
          
          }
        
        }, stage );
      
      }() );
    
    } );

    ic.Load( [
      { id: 'colors', src: './assets/images/colors.png' }
    ], true );

    document.body.removeChild( buttonContainer );

  }

};
