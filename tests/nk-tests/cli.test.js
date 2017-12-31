module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground CLI' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    var CE = {
      UNKNOWN_COMMAND: '<span style="color: red;">Unknown command: DATA</span>',
      OPTION_REQUIRED: '<span style="color: lightblue;">Option required for command: DATA</span>',
      DATA_MISSING: '<span style="color: pink;">Data required: DATA</span>'
    };

    var css = document.createElement( 'style' );
    css.innerHTML = [
      'commandbox {',
      ' width: 500px;',
      ' height: auto;',
      ' min-height: 50%;',
      ' max-height: 100%;',
      ' position: absolute;',
      ' top: 0;',
      ' left: 0;',
      ' overflow-y: scroll;',
      ' background-color: black;',
      ' cursor: default;',
      '',
      '}',
      '#input {',
      ' width: 98%;',
      ' height: 18px;',
      ' border: none;',
      ' outline: none;',
      ' position: relative;',
      ' border-bottom: 1px solid black;',
      ' font-family: Arial;',
      ' padding-left: 2%;',
      ' font-size: 13px;',
      ' font-weight: 300;',
      ' background-color: black;',
      ' color: white;',
      ' cursor: default;',
      '',
      '}',
      '.paragraph {',
      ' margin: 0;',
      ' padding: 0;',
      ' font-family: Arial;',
      ' color: white;',
      ' padding-left: 2%;',
      ' font-size: 13px;',
      ' font-weight: 300;',
      '',
      '}',
      ''
    ].join( '' );
    document.head.appendChild( css );

    var cb = document.createElement( 'commandbox' );

    var ci = document.createElement( 'input' );
    ci.setAttribute( 'type', 'text' );
    ci.setAttribute( 'id', 'input' );

    cb.appendChild( ci );

    document.body.appendChild( cb );

    cb.addEventListener( 'click', onCommandboxClick );
    ci.addEventListener( 'keydown', onInputKeyDown );



    ////////////////


    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth - 500 );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = '500px';

    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var cIndex = -1;
    var cHistory = [];

    var stage = new nk.Stage2D( c, HW, HH, false );

    var circleEntity = new nk.Graphic2D( 0, 0, new nk.Path.Circle( 0, 0, 50 ) );
    stage.AddChild( circleEntity );

    var mm = new nk.MotionManager( circleEntity );
    var moveX = mm.Create( 'x', 'x', 0, 60 );
    var moveY = mm.Create( 'y', 'y', 0, 60 );

    var register = new nk.CP.Register();
    nk.CP.Command.OPTION_PREFIX = '--';
    register.Add( new nk.CP.Command(
      'commands',
      function () {
        register.commands.forEach( function ( command ) {
          insertParagraph( command.id[ 0 ] );
        } );
      }
    ) );
    register.Add( new nk.CP.Command(
      'clear',
      function () {
        cb.innerHTML = '';
        cb.appendChild( ci );
        ci.focus();
      },
      'clear the screen'
    ) );
    register.Add( new nk.CP.Command(
      'moveto',
      function () {
        var data = arguments[ 1 ];
        var x = Number( data.x );
        var y = Number( data.y );
        if ( isNaN( x ) || isNaN( y ) ) return;
        moveX.value = x;
        moveY.value = y;
        mm.StartMultiple( 'x y' );
      },
      'move to x y'
    ) );

    function insertParagraph ( _str ) {
      var p = document.createElement( 'p' );
      p.className = 'paragraph';
      p.innerHTML = _str;
      cb.insertBefore( p, ci );
    }

    function onInputKeyDown ( event ) {
      var stop = false;
      if ( event.keyCode === 13 ) {
        stop = true;
        if ( ci.value !== '' ) {
          var r = register.Parse( ci.value );
          cHistory.push( ci.value );
          cIndex = cHistory.length - 1;
          if ( r !== null ) {
            insertParagraph( CE.UNKNOWN_COMMAND.replace( /DATA/g, r ) );
          }
        }
        ci.value = '';
        cb.scrollTop = cb.scrollHeight;
      } else if ( event.keyCode === 38 ) {
        if ( cIndex > -1 ) {
          stop = true;
          ci.value = cHistory[ cIndex-- ];
        }
      } else if ( event.keyCode === 40 ) {
        if ( cIndex < cHistory.length - 1 ) {
          stop = true;
          ci.value = cHistory[ ++cIndex ];
        }
      }
      if ( stop === true ) {
        event.preventDefault();
        event.stopPropagation();
      }
    }

    function onCommandboxClick ( event ) {
      ci.focus();
    }

    stage.onProcess.Add( function () {
      mm.Process();
    } );

    document.body.removeChild( buttonContainer );
  }
};
