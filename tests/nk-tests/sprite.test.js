module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Sprite' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    nk.Sprite.BUILD_DEFAULT_TEXTURE();
    nk.Plainsprite.BUILD_DEFAULT_TEXTURE();

    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH, true );
    stage.ticker.StartAF();

    var sprite1 = null;
    var sprite2 = null;
    var sprite3 = null;
    var sprite4 = null;
    var sprite5 = null;

    var imageCache = new nk.ImageLoader();
    imageCache.onComplete.Add( function ( _event ) {

      console.log( _event.target, _event.data, 'complete' );
      sprite1 = new nk.Sprite( 0, 0, imageCache.GetBasicTexture( '4dots' ) );
      sprite1.anchor.Set( 0.5 );
      sprite2 = new nk.Sprite( 100, 50, imageCache.GetBasicTexture( 'smudge' ) );
      sprite2.anchor.Set( 0.5 );
      sprite3 = new nk.Sprite( -100, 100, imageCache.GetBasicTexture( 'gobj' ) );
      sprite3.anchor.Set( 0.5 );
      sprite3.clip.tl.Set( 0, 64 );
      sprite4 = new nk.Sprite( 100, 100 );
      sprite4.anchor.Set( 0.5 );
      sprite5 = new nk.Plainsprite( 200, 0 );
      sprite5.anchor.Set( 0.5 );

      stage.AddChildren( sprite1, sprite2, sprite3, sprite4, sprite5 );
    
    } );
    imageCache.onImageLoaded.Add( function ( _event ) {

      console.log( _event.target, _event.data, 'loaded' );
    
    } );
    imageCache.Load( [
      { id: 'smudge', src: './assets/images/smudge.png' }
    ], true );
    imageCache.Load( [
      { id: '4dots', src: './assets/images/4dots.png' },
      { id: 'gobj', src: './assets/images/glass-of-blueberryjuice.png' }
    ], true );

    var dragger = null;

    stage.mouse.onMove.Add( function ( _event ) {

      if ( dragger !== null ) {

        dragger.x = _event.data.position.x;
        dragger.y = _event.data.position.y;
      
      }
    
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {

      var p = _event.data.position;

      for ( var i = stage.children.length; i--; ) {

        if ( stage.children[ i ].IntersectsPoint( p ) ) {

          dragger = stage.children[ i ];

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        
        }
      
      }
    
    }, stage );
    stage.mouse.onUp.Add( function () {

      if ( dragger ) dragger = null;
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};
