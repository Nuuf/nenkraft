module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground 6' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', RunPlayground_6 );
  buttonContainer.appendChild( button );

  function RunPlayground_6 () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH, true );
    stage.ticker.StartAF();

    var sprite1 = null;
    var sprite2 = null;
    var sprite3 = null;

    var imageCache = new nk.Load.TextureLoader();
    imageCache.onComplete.Add( function ( _event ) {
      console.log( _event.target, _event.data, 'complete' );
      sprite1 = new nk.Sprite( 0, 0, imageCache.Get( '4dots' ) );
      sprite1.anchor.Set( 0.5 );
      sprite2 = new nk.Sprite( 100, 50, imageCache.Get( 'smudge' ) );
      sprite2.anchor.Set( 0.5 );
      sprite3 = new nk.Sprite( -100, 100, imageCache.Get( 'gobj' ) );
      sprite3.anchor.Set( 0.5 );
      sprite3.clip.tl.Set( 0, 64 );
      stage.AddChildren( sprite1, sprite2, sprite3 );
    } );
    imageCache.onTextureLoaded.Add( function ( _event ) {
      console.log( _event.target, _event.data, 'loaded' );
    } );
    imageCache.Load( [
      { id: 'smudge', src: './images/smudge.png' },
    ] );
    imageCache.Load( [
      { id: '4dots', src: './images/4dots.png' },
      { id: 'gobj', src: './images/glass-of-blueberryjuice.png' }
    ] );



    var dragger = null;

    stage.mouse.onMove.Add( function ( _event ) {
      if ( dragger !== null ) {
        dragger.x = _event.data.x;
        dragger.y = _event.data.y;
      }
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {
      var p = _event.data;
      for ( var i = stage.children.length; i--; ) {
        if ( stage.children[ i ].IntersectsPoint( p ) ) {
          dragger = stage.children[ i ];

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        }
      }
    }, stage );
    stage.mouse.onUp.Add( function ( _event ) {
      if ( dragger ) dragger = null;
    } );

    document.body.removeChild( buttonContainer );
  }
};
