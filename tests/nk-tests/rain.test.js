module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Rain' );
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
    stage.fill = true;
    stage.backgroundColor = 'rgba(0,0,0,0.3)';

    var gravity = new nk.Vector2D( 0, 0.0982 );
    var wind = new nk.Vector2D();

    var DropPool = new nk.Pool( nk.Plainsprite );

    imageCache = new nk.Load.TextureLoader( [
      {
        id: 'raindrop',
        src: './images/raindrop.png'
      }
    ] );
    imageCache.onComplete.Add( function () {

      DropPool.Flood( function ( _sprite ) {
        _sprite.SetTexture( imageCache.Get( 'raindrop' ) );
        _sprite.data.velocity = new nk.Vector2D();
      }, 1000 );

      stage.onProcess.Add( function () {
        var i = this.children.length, child;
        while ( i-- ) {
          child = this.children[ i ];
          child.position.AddV( child.data.velocity );
          child.data.velocity.AddV( gravity );
          child.data.velocity.Add( wind.x / child.data.mass, wind.y / child.data.mass );
          if ( !child.data.lifespan-- ) {
            DropPool.Store( child.Detach() );
          }
        }
        wind.Set( nk.Utils.RandomFloat( -0.1, 0.1 ), 0 );
        AddDrop();
        AddDrop();
        AddDrop();
        AddDrop();
      }, stage );
    } );

    function AddDrop () {
      var child = DropPool.Retrieve();
      var scale = nk.Utils.RandomFloat( 0.5, 1 );
      child.position.Set( nk.Utils.RandomFloat( -HW, HW ), -HH - child.height );
      child.scale.Set( scale );
      child.data.mass = scale;
      child.data.velocity.Set( 0 );
      child.data.lifespan = 240;
      child.AttachTo( stage );
    }

    document.body.removeChild( buttonContainer );
  }
};