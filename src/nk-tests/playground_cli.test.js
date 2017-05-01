module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground CLI' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', RunPlayground_CLI );
  buttonContainer.appendChild( button );

  function RunPlayground_CLI() {

    var CE = {
      UNKNOWN_COMMAND: '<span style="color: red;">Unknown command: DATA</span>',
      OPTION_REQUIRED: '<span style="color: lightblue;">Option required for command: DATA</span>',
      DATA_MISSING: '<span style="color: pink;">Data required: DATA</span>',
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
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = '500px';

    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var cIndex = -1;
    var cHistory = [];

    var mouse = new nk.Input.Mouse( c );
    var stage = new nk.Stage2D( c, HW, HH, true );

    var gobjects = {

    };

    ////////.....
    var register = nk.CP.Register();
    register.Add(
      nk.CP.Command(
        //CREATE
        'create crt',
        function ( _dataStrs, _data ) {
          insertParagraph( CE.OPTION_REQUIRED.replace( /DATA/g, 'create' ) );
        },
        'Create a graphics object', true ).
        AddOption(
        'circle cir',
        function ( _dataStrs, _data ) {
          if ( _data.radius === undefined ) {
            insertParagraph( CE.DATA_MISSING.replace( /DATA/g, 'radius' ) );
            return;
          }
          var tex = new nk.Path.Circle( 0, 0, _data.radius );
          var gr = new nk.Graphic2D( _data.x, _data.y, tex );
          stage.AddChild( gr );
        },
        'Create a circle', 0, true ).
        AddOption(
        'rectangle rect rec',
        function ( _dataStrs, _data ) {
          if ( _data.width === undefined || _data.height === undefined ) {
            insertParagraph( CE.DATA_MISSING.replace( /DATA/g, 'width & height' ) );
            return;
          }
          var tex = new nk.Path.AABB2D( 0, 0, _data.width, _data.height );
          var gr = new nk.Graphic2D( _data.x, _data.y, tex );
          stage.AddChild( gr );
        },
        'Create a rectangle', 0, true ).
        AddOption(
        'help ?',
        function () {
          insertParagraph( this.command.GenerateInfoString().replace( /\n/g, '<br/>' ) );
        },
        'Get help', 999, true )
    );
    register.Add(
      nk.CP.Command(
        'tick t',
        function ( _dataStrs, _data ) {
          insertParagraph( CE.OPTION_REQUIRED.replace( /DATA/g, 'tick' ) );
        },
        'Handle ticker', true ).
        AddOption(
        'start s',
        function ( _dataStrs, _data ) {
          stage.ticker.SetDesiredRate( _data.rate );
          stage.ticker.StartAF();
        },
        'Start the ticker', 0, true ).
        AddOption(
        'stop',
        function ( _dataStrs, _data ) {
          stage.ticker.Stop();
        },
        'Stop the ticker', 0, true ).
        AddOption(
        'help ?',
        function () {
          insertParagraph( this.command.GenerateInfoString().replace( /\n/g, '<br/>' ) );
        },
        'Get help', 999, true )
    );
    register.Add(
      nk.CP.Command(
        'print',
        function ( _dataStrs, _data ) {
          insertParagraph( _dataStrs.join( ' ' ) );
        },
        'Print info', true ).
        AddOption(
        'gobjects gobjs',
        function ( _dataStrs, _data ) {

        },
        'Print all graphical objects', 0, true ).
        AddOption(
        'help ?',
        function () {
          insertParagraph( this.command.GenerateInfoString().replace( /\n/g, '<br/>' ) );
        },
        'Get help', 999, true )
    );
    register.Add(
      nk.CP.Command(
        'cch1',
        function ( _dataStrs, _data ) {
          insertParagraph( CE.OPTION_REQUIRED.replace( /DATA/g, 'cch1' ) );
        },
        'Encrypt some text', true ).
        AddOption(
        'e',
        function ( _dataStrs, _data ) {
          str = _dataStrs.join( ' ' );
          insertParagraph( nk.Utils.Cipher.CCH1( str ) );
        },
        'Encode', 0, true ).
        AddOption(
        'd',
        function ( _dataStrs, _data ) {
          str = _dataStrs.join( ' ' );
          insertParagraph( nk.Utils.Decipher.CCH1( str ) );
        },
        'Decode', 0, true ).
        AddOption(
        'help ?',
        function () {
          insertParagraph( this.command.GenerateInfoString().replace( /\n/g, '<br/>' ) );
        },
        'Get help', 999, true )
    );
    register.Add(
      nk.CP.Command(
        'clear',
        function ( _dataStrs, _data ) {
          cb.innerHTML = '';
          cb.appendChild( ci );
          ci.focus();
        },
        'Clear the "terminal"', true ).
        AddOption(
        'help ?',
        function () {
          insertParagraph( this.command.GenerateInfoString().replace( /\n/g, '<br/>' ) );
        },
        'Get help', 999, true )
    );
    ////////......

    function insertParagraph( _str ) {
      var p = document.createElement( 'p' );
      p.className = 'paragraph';
      p.innerHTML = _str;
      cb.insertBefore( p, ci );
    }

    function onInputKeyDown( event ) {
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

    function onCommandboxClick( event ) {
      ci.focus();
    }

    document.body.removeChild( buttonContainer );
  }
};