module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Animation' );
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

    var stage = new nk.Stage2D( c, HW, HH, true );
    stage.ticker.StartAF();

    var sprite = null;
    var spriteRef = null;

    var timer = new nk.Time.Timer();

    var imageCache = new nk.ImageLoader();
    imageCache.onComplete.Add( function ( _event ) {

      spriteRef = new nk.Sprite( 0, -200, imageCache.GetBasicTexture( '1to8' ) );
      spriteRef.anchor.Set( 0.5 );

      sprite = new nk.Sprite( 0, 0, _event.data.basicTextureCache.GetById( '1to8' ) );
      sprite.anchor.Set( 0.5 );
      sprite.scale.Set( 5.0 );
      var ac = sprite.animationController = new nk.Animator.Controller( sprite );
      var animation = ac.AddAnimation( 'test', 20 );
      animation.GenerateFrames( 64, 64, 512, 64, 8, {
        '5': 120
      } );
      animation.reverse = true;
      animation.onEnd.Add( function () {
        stage.ticker.Stop();
      }, animation );
      ac.PlayAnimation( 'test', 7 );
      stage.AddChildren( sprite, spriteRef );

      timer.onFinish.Add( function () {
        sprite.animationController.StopCurrentAnimation();
      } );

      //timer.Start( 400 );

      stage.onProcess.Add( function () {
        sprite.animationController.Process();
        timer.Process();
      }, stage );
    } );
    imageCache.Load( [
      { id: '1to8', src: './assets/images/1to8.png' }
    ], true );

    document.body.removeChild( buttonContainer );
  }
};
