module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Equations' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = 0;
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c );

    var TYPES = {
      NUMERAL: 1,
      OPERATOR: 2
    };
    var OPERATORS = {
      ADD: '+',
      SUB: '-',
      MUL: '*',
      DIV: '/',
      SQT: 'sqrt'
    };
    var NUMERALS = {
      O: 0,
      I: 1,
      II: 2,
      III: 3,
      IV: 4,
      V: 5,
      VI: 6,
      VII: 7,
      VIII: 8,
      IX: 9
    };


    function EqObject ( _x, _y, _type, _value ) {
      nk.Graphic2D.call( this, _x, _y, EqObject.PATH );
      var d = this.data;
      //Circles to demonstrate
      //Display for debugging purposes
      d.leftPoint = new nk.Graphic2D( -this.w, 0, EqObject.P_PATH );
      d.rightPoint = new nk.Graphic2D( this.w, 0, EqObject.P_PATH );

      d.type = _type;
      d.value = _value;

      d.displayText = new nk.Text( 0, -11, _value );
      d.displayText.style.text.align = nk.Style.TEXT_ALIGN.CENTER;

      this.AddChild( d.leftPoint );
      this.AddChild( d.rightPoint );

      this.AddChild( d.displayText );

      stage.AddChild( this );
    }
    var objectSize = 50, hObjectSize = objectSize * 0.5;
    EqObject.prototype = Object.create( nk.Graphic2D.prototype );
    EqObject.prototype.constructor = EqObject;
    EqObject.PATH = new nk.Path.AABB2D( -hObjectSize, -hObjectSize, hObjectSize, hObjectSize );
    EqObject.P_PATH = new nk.Path.Circle( 0, 0, hObjectSize * 0.1 );


    //

    new EqObject( HW, HH + 100, TYPES.NUMERAL, NUMERALS.IX );
    new EqObject( HW + 100, HH, TYPES.NUMERAL, NUMERALS.V );
    new EqObject( HW - 100, HH - 100, TYPES.OPERATOR, OPERATORS.ADD );

    //

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

      var firstLeft = stage.GetChildClosestTo( { x: 0, y: 0 } );
    } );


    document.body.removeChild( buttonContainer );
  }
};