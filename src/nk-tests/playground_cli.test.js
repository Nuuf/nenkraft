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
      ' width: 24%;',
      ' height: auto;',
      ' max-height: 100%;',
      ' position: absolute;',
      ' top: 0;',
      ' left: 0.5%;',
      ' overflow-y: scroll;',
      ' background-color: black;',
      '',
      '}',
      '#input {',
      ' width: 100%;',
      ' height: 30px;',
      ' border: none;',
      ' outline: none;',
      ' position: relative;',
      ' border-bottom: 1px solid black;',
      ' font-family: Arial;',
      '',
      '}',
      '.paragraph {',
      ' margin: 0;',
      ' padding: 0;',
      ' font-family: Arial;',
      ' color: white;',
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

    ci.addEventListener( 'keydown', onInputKeyDown );



    ////////////////


    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth * 0.75 );
    c.setAttribute( 'height', window.innerHeight );
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = '25%';

    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var mouse = new nk.Input.Mouse( c );
    var ticker = new nk.Ticker( Update, 60, true );
    var container = new nk.Container2D( HW, HH );

    ////////.....
    var register = new nk.CP.Register();
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
          container.AddChild( gr );
        },
        'Create a circle', 0, true
        ).
        AddOption(
        'rectangle rect rec',
        function ( _dataStrs, _data ) {
          if ( _data.width === undefined || _data.height === undefined ) {
            insertParagraph( CE.DATA_MISSING.replace( /DATA/g, 'width & height' ) );
            return;
          }
          var tex = new nk.Path.AABB2D( 0, 0, _data.width, _data.height );
          var gr = new nk.Graphic2D( _data.x, _data.y, tex );
          container.AddChild( gr );
        },
        'Create a rectangle', 0, true
        )
    );
    register.Add(
      nk.CP.Command(
        'tick',
        function ( _dataStrs, _data ) {
          insertParagraph( CE.OPTION_REQUIRED.replace( /DATA/g, 'tick' ) );
        },
        'Handle ticker', true ).
        AddOption(
        'start',
        function ( _dataStrs, _data ) {
          ticker.SetDesiredRate( _data.rate );
          ticker.Start();
        },
        'Start the ticker', 0, true
        ).
        AddOption(
        'stop',
        function ( _dataStrs, _data ) {
          ticker.Stop();
        },
        'Stop the ticker', 0, true
        )
    );
    register.Add(
      nk.CP.Command(
        'cch1',
        function ( _dataStrs, _data ) {
          insertParagraph( CE.OPTION_REQUIRED.replace( /DATA/g, 'cch1' ) );
        },
        'Encrypt some text', true ).
        AddOption(
        'cipher',
        function ( _dataStrs, _data ) {
          str = _dataStrs.join( ' ' );
          insertParagraph( nk.Utils.Cipher.CCH1( str ) );
        },
        'Cipher CCH1', 0, true
        ).
        AddOption(
        'decipher',
        function ( _dataStrs, _data ) {
          str = _dataStrs.join( ' ' );
          insertParagraph( nk.Utils.Decipher.CCH1( str ) );
        },
        'Decipher CCH1', 0, true
        )
    );
    ////////......

    function Update() {

      rc.fillStyle = 'rgba(0, 0, 0, 1)';
      rc.fillRect( 0, 0, W, H );

      container.Draw( rc );
    }

    function insertParagraph( _str ) {
      var p = document.createElement( 'p' );
      p.className = 'paragraph';
      p.innerHTML = _str;
      cb.insertBefore( p, ci );
    }

    function onInputKeyDown( event ) {
      if ( event.keyCode === 13 ) {
        if ( ci.value !== '' ) {
          var r = register.Parse( ci.value );
          if ( r !== null ) {
            insertParagraph( CE.UNKNOWN_COMMAND.replace( /DATA/g, r ) );
          }
        }
        ci.value = '';
        cb.scrollTop = cb.scrollHeight;
      }
    }

    document.body.removeChild( buttonContainer );
  }
};