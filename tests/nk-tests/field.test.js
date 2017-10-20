module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Field' );
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
    stage.backgroundColor = 'rgba(0,0,0,0.1)';
    //stage.fill = false;

    var orig = new nk.Plaingraphic2D( 0, 0, new nk.Path.Circle( 0, 0, 200 ) );
    orig.path.style.fill.applied = false;
    stage.AddChild( orig );

    var objs = [];

    var mouseDown = false;

    stage.onProcess.Add( function () {
      for ( var i = 0, l = objs.length; i < l; ++i ) {
        if ( !objs[ i ] ) break;
        nk.Math.AttractRepel( objs[ i ].position, orig.position, objs[ i ].data.vel, orig.path.radius * 2, 0.1 );
        objs[ i ].position.AddV( objs[ i ].data.vel );
        //objs[ i ].data.color.IncreaseChannel( 0, 1 );
        //objs[ i ].path.style.fill.color = objs[ i ].data.color.value;
        if ( !--objs[ i ].data.lifeSpan ) {
          objs[ i ].Destroy();
          objs.splice( i, 1 );
        }
      }

      if ( mouseDown ) {
        i = 2;
        while ( --i ) {
          MakeObj( stage.mouse.position.x, stage.mouse.position.y );
        }
      }

    }, stage );


    function MakeObj ( _x, _y ) {
      var path = new nk.Path.Polygon2D();
      nk.Geom.Polygon2D.Construct.Supershape( path, 0, 0, nk.Utils.RandomInteger( 5, 30 ), 20, nk.Utils.RandomFloat( 0, 20 ), nk.Utils.RandomFloat( 0, 3 ), nk.Utils.RandomFloat( 0, 3 ), nk.Utils.RandomFloat( 0, 3 ) );
      path.Rotate( nk.Utils.RandomFloat( -nk.Math.PII, nk.Math.PII ), 0.5, 0.5, true );
      var obj = new nk.Plaingraphic2D( _x, _y, path );
      obj.data.vel = new nk.Vector2D( nk.Utils.RandomFloat( -4, 4 ), nk.Utils.RandomFloat( -4, 4 ) );
      obj.data.lifeSpan = 600;
      //obj.data.color = new nk.Color( nk.Utils.RandomInteger( 0, 255 ), nk.Utils.RandomInteger( 0, 255 ), nk.Utils.RandomInteger( 0, 255 ) );
      //obj.data.color.ConvertToHSLA();
      stage.AddChild( obj );
      objs.push( obj );
    };

    stage.mouse.onDown.Add( function () {
      mouseDown = true;
    } );
    stage.mouse.onUp.Add( function () {
      mouseDown = false;
    } );



    document.body.removeChild( buttonContainer );
  }
};