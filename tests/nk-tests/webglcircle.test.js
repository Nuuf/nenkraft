module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL Circle' );
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

    var stage = new nk.Stage2D( { 
      canvas: c,
      x: 0,
      y: 0,
      halt: false,
      mode: 'WebGL'
    } );

    var pc = new nk.GLCircleProgramController( stage.gl );
    var pcLine = new nk.GLLine2DProgramController( stage.gl );

    var RF = nk.Utils.RandomFloat;
    var RI = nk.Utils.RandomInteger;

    var hzLine = new nk.Path.Line2D( HW, 0, HW, H );
    var vtLine = new nk.Path.Line2D( 0, HH, W, HH );
    hzLine.LinkProgramController( pcLine );
    vtLine.UseProgramController( pcLine );
    stage.Mount( new nk.Graphic2D( 0, 0, hzLine ), new nk.Graphic2D( 0, 0, vtLine ) );
    stage.children[ 0 ].interactive = false;
    stage.children[ 1 ].interactive = false;

    var i = 1000;

    while ( i-- ) {

      var path = new nk.Path.Circle( 0, 0, RI( 2, 30 ) );
      path.style.fill.color = new nk.Color( RI( 0, 255 ), RI( 0, 255 ), RI( 0, 255 ) ).ComputeValueHex();
      path.LinkProgramController( pc );
      var g = new nk.Graphic2D( RF( 0, W ), RF( 0, H ), path );
      g.GLPreDraw = PreDraw;
      g.AttachTo( stage );
    
    }

    function PreDraw () {

      this.path.LinkStyle();
    
    }

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
    stage.mouse.onUp.Add( function () {

      if ( dragger ) {

        dragger = null;
      
      }
    
    } );

    document.body.removeChild( buttonContainer );

  }

};
