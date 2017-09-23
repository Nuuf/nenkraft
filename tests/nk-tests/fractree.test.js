module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Fractree' );
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

    var l = 200;

    var stage = new nk.Stage2D( c, HW, H );
    stage.clear = false;
    var bgColor = new nk.Color();
    bgColor.SetHex( '#00000033' );
    stage.backgroundColor = bgColor.value;
    stage.scale.Set( 1, -1 );

    function Branch ( start, end ) {
      if ( !( this instanceof Branch ) ) return new Branch( start, end );
      nk.Graphic2D.call( this, 0, 0, new nk.Path.Line2D( start, end ) );
      this.path.style.stroke.color = new nk.Color( nk.Utils.RandomInteger( this.w, 200 ), nk.Utils.RandomInteger( this.w, 255 ), nk.Utils.RandomInteger( 0, 20 ), 1 ).value;
      this.path.style.stroke.lineWidth = this.w / 12;
      stage.AddChild( this );
      this.x = nk.Utils.RandomFloat( -HW, HW );
      this.y = nk.Utils.RandomFloat( 0, H );
      this.rotation = nk.Utils.RandomInteger( 0, nk.Math.PII );
      var mm = this.data.motionManager = new nk.MotionManager( this );
      mm.Create( 'moveX', 'x', 0, nk.Utils.RandomInteger( 100, 400 ), 'QuadOut' );
      mm.Create( 'moveY', 'y', 0, nk.Utils.RandomInteger( 100, 400 ), 'QuadIn' );
      mm.Create( 'rotate', 'rotation', 0, nk.Utils.RandomInteger( 100, 600 ), 'QuadInOut' );
      mm.StartMultiple( 'moveX moveY rotate' );
      if ( this.w > 12 ) {
        this.Grow();
      }
    }
    Branch.prototype = Object.create( nk.Graphic2D.prototype );
    Branch.prototype.constructor = Branch;
    Branch.prototype.Grow = function () {
      var newEndL = this.path.e.SubtractVC( this.path.s );
      var newEndR = newEndL.Copy();
      newEndL.Rotate( nk.Math.RADIAN * 20 + nk.Utils.RandomFloat( -nk.Math.RADIAN * 20, nk.Math.RADIAN * 20 ) );
      newEndR.Rotate( -nk.Math.RADIAN * 20 + nk.Utils.RandomFloat( -nk.Math.RADIAN * 20, nk.Math.RADIAN * 20 ) );
      newEndL.Multiply( 0.67, 0.67 );
      newEndR.Multiply( 0.67, 0.67 );
      newEndL.AddV( this.path.e );
      newEndR.AddV( this.path.e );
      Branch( this.path.e, newEndL );
      Branch( this.path.e, newEndR );
    };

    Branch( new nk.Vector2D( 0, 0 ), new nk.Vector2D( 0, l ) );

    var timer = new nk.Timer( 1000 );
    timer.onStop.Add( function () {
      stage.ticker.Stop();
    } );
    timer.Start();


    stage.onProcess.Add( function () {
      stage.children.forEach( function ( child ) {
        child.data.motionManager.Process();
      } );
      timer.Process();
    } );


    document.body.removeChild( buttonContainer );
  }
};