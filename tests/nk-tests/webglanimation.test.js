module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL Animation' );
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

    var stage = new nk.Stage2D( c, 0, 0, false, true );

    var sprite = null;
    var spriteRef = null;
    var test = null;

    var imageCache = new nk.ImageLoader();
    imageCache.onComplete.Add( function ( ) {

      var p1 = new nk.GLTextureProgramController( stage.gl );
      var p2 = new nk.GLTextureProgramController( stage.gl );
      var p3 = new nk.GLTextureProgramController( stage.gl );
      p1.BindBasicTexture( imageCache.GetBasicTexture( '1to8' ) );
      p2.BindBasicTexture( imageCache.GetBasicTexture( '1to8f' ) );
      p3.BindBasicTexture( nk.Sprite.DEFAULT_TEXTURE );

      test = new nk.Sprite( HW, HH, p3 );
      test.anchor.Set( 0.5 );
      test.scale.Set( 5 );
      test.UpdateShape();

      spriteRef = new nk.Sprite( HW, HH - 200, p2 );
      spriteRef.anchor.Set( 0.5 );

      sprite = new nk.Sprite( HW, HH, p1 );
      sprite.anchor.Set( 0.5 );
      sprite.scale.Set( 5 );
      sprite.UpdateShape();

      var ac = sprite.animationController = new nk.Animator.Controller( sprite );
      var animation = ac.AddAnimation( 'test', 20 );
      animation.GenerateFrames( 64, 64, 512, 64, 8, {
        '5': 120
      } );
      animation.reverse = true;
      animation.onEnd.Add( function () {
        //stage.ticker.Stop();
      }, animation );
      ac.PlayAnimation( 'test', 7 );
      stage.AddChildren( sprite, spriteRef, test );

      stage.onProcess.Add( function () {

        sprite.animationController.Process();
      
      }, stage );
    
    } );
    imageCache.Load( [
      { id: '1to8', src: './assets/images/1to8.png', w: 64, h: 64 },
      { id: '1to8f', src: './assets/images/1to8.png' }
    ], true );

    var dragger = null;
    var dragStart = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();

    stage.mouse.onMove.Add( function ( _event ) {

      if ( dragger !== null ) {

        dragger.x = _event.data.position.x + dragOffset.x - dragStart.x;
        dragger.y = _event.data.position.y + dragOffset.y - dragStart.y;
      
      }
    
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {

      var p = _event.data.position;
      for ( var i = stage.children.length; i--; ) {

        if ( stage.children[ i ].IntersectsPoint( p ) ) {

          dragStart.SetV( p );

          dragger = stage.children[ i ];

          dragOffset.SetV( dragger );

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        
        }
      
      }
    
    }, stage );
    stage.mouse.onUp.Add( function ( ) {

      if ( dragger ) {

        dragger = null;
      
      }
    
    } );

    document.body.removeChild( buttonContainer );

  }

};
