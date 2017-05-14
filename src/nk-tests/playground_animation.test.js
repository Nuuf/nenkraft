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

    var imageCache = new nk.Load.TextureLoader();
    imageCache.onComplete.Add( function ( _event ) {

      spriteRef = new nk.Sprite( 0, -200, imageCache.Get( '1to8' ) );
      spriteRef.anchor.Set( 0.5 );

      sprite = new nk.Sprite( 0, 0, _event.data.cache[ 0 ].image );
      sprite.anchor.Set( 0.5 );
      var ac = sprite.animationController = new nk.Animator.Controller( sprite );
      var animation = ac.AddAnimation( 'test', 20 );
      animation.AddFrame( 0, 0, 64, 64 );
      animation.AddFrame( 64, 0, 64, 64 );
      animation.AddFrame( 64 * 2, 0, 64, 64, 40 );
      animation.AddFrame( 64 * 3, 0, 64, 64 );
      animation.AddFrame( 64 * 4, 0, 64, 64, 40 );
      animation.AddFrame( 64 * 5, 0, 64, 64 );
      animation.AddFrame( 64 * 6, 0, 64, 64 );
      animation.AddFrame( 64 * 7, 0, 64, 64 );
      ac.PlayAnimation( 'test' );
      stage.AddChildren( sprite, spriteRef );

      timer.onStop.Add( function () {
        sprite.animationController.StopCurrentAnimation();
      } );

      timer.Start( 400 );

      stage.onProcess.Add( function () {
        sprite.animationController.Process();
        timer.Process();
      }, stage );
    } );
    imageCache.Load( [
      { id: '1to8', src: './images/1to8.png' },
    ] );

    document.body.removeChild( buttonContainer );
  }
};
