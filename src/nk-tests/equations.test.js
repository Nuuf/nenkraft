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
      INLINE_OPERATOR: 2
    };
    var INLINE_OPERATORS = {
      ADD: '+',
      SUB: '-',
      MUL: '*'
    };
    var BOX_OPERATORS = {
      DIV: '/',
      SQT: 'Math.sqrt($)'
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

    var inlineObjects = new nk.Container2D();
    var boxObjects = new nk.Container2D();

    stage.AddChildren( inlineObjects, boxObjects );


    function InlineEqObject ( _x, _y, _type, _value ) {
      nk.Graphic2D.call( this, _x, _y, InlineEqObject.PATH );
      var d = this.data;
      this.render = false;
      d.leftPoint = new nk.Graphic2D( -this.w, 0, InlineEqObject.P_PATH );
      d.rightPoint = new nk.Graphic2D( this.w, 0, InlineEqObject.P_PATH );
      d.leftPoint.render = false;
      d.rightPoint.render = false;
      d.rightObject = null;
      d.leftObject = null;
      d.disqualified = false;

      d.type = _type;
      d.value = _value;

      d.displayText = new nk.Text( 0, -22, _value );
      d.displayText.style.text.font = '44px Arial';
      d.displayText.style.text.align = nk.Style.TEXT_ALIGN.CENTER;

      this.AddChild( d.leftPoint );
      this.AddChild( d.rightPoint );

      this.AddChild( d.displayText );

      inlineObjects.AddChild( this );
    }
    var objectSize = 50, hObjectSize = objectSize * 0.5;
    InlineEqObject.prototype = Object.create( nk.Graphic2D.prototype );
    InlineEqObject.prototype.constructor = InlineEqObject;
    InlineEqObject.prototype.GetNeighbourSiblingRight = function ( _noAssign ) {
      if ( this.parent ) {
        var children = this.parent.children;
        for ( var i = 0, l = children.length, child; i < l; ++i ) {
          child = children[ i ];
          if ( child.IntersectsPoint( this.data.rightPoint.GetWorldPos() ) ) {
            if ( _noAssign === undefined ) this.data.rightObject = child;
            return child;
          }
        }
      }
      return null;
    };
    InlineEqObject.prototype.GetNeighbourSiblingLeft = function ( _noAssign ) {
      if ( this.parent ) {
        var children = this.parent.children;
        for ( var i = 0, l = children.length, child; i < l; ++i ) {
          child = children[ i ];
          if ( child.IntersectsPoint( this.data.leftPoint.GetWorldPos() ) ) {
            if ( _noAssign === undefined ) this.data.leftObject = child;
            return child;
          }
        }
      }
      return null;
    };
    InlineEqObject.prototype.TraverseRight = function ( _data ) {
      _data = _data === undefined ? { str: '' } : _data;
      if ( this.data.rightObject ) {
        _data.str += this.data.rightObject.data.value;
        return this.data.rightObject.TraverseRight( _data );
      } else {

        this.GetNeighbourSiblingRight();
        if ( this.data.rightObject ) {
          _data.str += this.data.rightObject.data.value;
          return this.data.rightObject.TraverseRight( _data );
        } else {
          return _data;
        }
      }
    };
    InlineEqObject.prototype.TraverseLeft = function ( _data ) {
      _data = _data === undefined ? { str: '' } : _data;
      if ( this.data.leftObject ) {
        _data.str += this.data.leftObject.data.value;
        return this.data.leftObject.TraverseLeft( _data );
      } else {
        this.GetNeighbourSiblingLeft();
        if ( this.data.leftObject ) {
          _data.str += this.data.leftObject.data.value;
          return this.data.leftObject.TraverseLeft( _data );
        } else {
          return _data;
        }
      }
    };
    InlineEqObject.PATH = new nk.Path.AABB2D( -hObjectSize, -hObjectSize, hObjectSize, hObjectSize );
    InlineEqObject.P_PATH = new nk.Path.Circle( 0, 0, hObjectSize * 0.1 );

    function BoxEqObject ( _x, _y, _type, _value ) {

    }


    //

    new InlineEqObject( HW, HH + 100, TYPES.NUMERAL, NUMERALS.IX );
    new InlineEqObject( HW + 100, HH, TYPES.NUMERAL, NUMERALS.V );
    new InlineEqObject( HW - 100, HH - 100, TYPES.INLINE_OPERATOR, INLINE_OPERATORS.ADD );
    new InlineEqObject( HW, HH + 200, TYPES.NUMERAL, NUMERALS.I );
    new InlineEqObject( HW, HH + 400, TYPES.NUMERAL, NUMERALS.IV );
    new InlineEqObject( HW + 200, HH - 300, TYPES.NUMERAL, NUMERALS.VII );
    new InlineEqObject( HW - 200, HH + 200, TYPES.INLINE_OPERATOR, INLINE_OPERATORS.SUB );
    new InlineEqObject( HW - 300, HH + 200, TYPES.INLINE_OPERATOR, INLINE_OPERATORS.MUL );

    //

    var dragger = null;

    stage.mouse.onMove.Add( function ( _event ) {
      if ( dragger !== null ) {
        dragger.x = _event.data.x;
        dragger.y = _event.data.y;
      }
    } );
    stage.mouse.onDown.Add( function ( _event ) {
      var p = _event.data;
      for ( var i = this.children.length; i--; ) {
        if ( this.children[ i ].IntersectsPoint( p ) ) {
          dragger = this.children[ i ];

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        }
      }
    }, inlineObjects );
    stage.mouse.onUp.Add( function ( _event ) {
      if ( dragger ) dragger = null;
      var obj = GetValidStartObject();
      if ( obj ) {
        try {
          var str = obj.TraverseRight( { str: '' + obj.data.value } ).str;
          console.log( 'Evaluating: ' + str + '=', eval( str ) );
        } catch ( _e ) {
          console.log( 'Expression could not be evaluated, check sequence' );
        }
      }
    }, stage );

    function GetValidStartObject () {
      var children = inlineObjects.children;
      if ( children.length === 0 ) return null;
      ResetChildrenData( children );
      RemoveUnwantedObjects( children );
      var count = children.length;
      var sCount = count;
      var minPos = new nk.Vector2D( 0, HW );
      var conditionFunc = function ( _child ) {
        if ( _child.data.disqualified === false ) {
          return true;
        }
        return false;
      };

      return inlineObjects.GetChildClosestTo( minPos, conditionFunc );
    }
    function RemoveUnwantedObjects ( _children ) {
      for ( var i = 0, l = _children.length, child; i < l; ++i ) {
        child = _children[ i ];
        if ( child ) {
          if ( child.GetNeighbourSiblingLeft( true ) === null && child.GetNeighbourSiblingRight( true ) === null ) {
            child.data.disqualified = true;
          }
        }
      }
    }
    function ResetChildrenData ( _children ) {
      for ( var i = 0, l = _children.length, child; i < l; ++i ) {
        data = _children[ i ].data;
        data.rightObject = null;
        data.leftObject = null;
        data.disqualified = false;
      }
    }

    document.body.removeChild( buttonContainer );
  }
};