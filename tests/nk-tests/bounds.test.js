module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Bounds' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    nk.Sprite.BUILD_DEFAULT_TEXTURE( function() {

      nk.Plainsprite.BUILD_DEFAULT_TEXTURE( go );
    
    } );

    function go() {

      var c = document.getElementsByTagName( 'canvas' )[ 0 ];
      c.setAttribute( 'width', window.innerWidth );
      c.setAttribute( 'height', window.innerHeight );
      c.style.display = 'initial';
      c.style.position = 'absolute';
      c.style.top = '0';
      c.style.left = '0';

      var W = c.width, HW = W * 0.5;
      var H = c.height, HH = H * 0.5;

      var factory = nk.Utils.Maker();

      var stage = new nk.Stage2D( { 
        canvas: c,
        x: HW,
        y: HH,
        halt: true
      } );
      stage.ticker.StartAF();

      var s1 = stage.AddChild( factory
        .Make( nk.Sprite, 100, 100 ) // Create 1 of these
        .Call( 'anchor.Set', [ 0.5 ] ) // Then call this function
        /*
         * .Cast('anchor.x', [0.5])
         * .Cast('anchor.y', [0.5])
         */
        .Call( 'ComputeBounds', [ '$anchor' ] ) // And this one, $anchor means this.anchor
        .Done() // And return first element
      );

      var p1 = factory
        .Make( nk.Path.AABB2D )
        .Call( 'SetC', [ s1.bounds ] )
        .Done();

      stage.AddChild( factory
        .Make( nk.Graphic2D, 0, 0, p1 )
        .Done()
      );

      var stuff = factory
        .Many( 100 ) // Create #
        .Make( nk.Sprite ) // Of these
        .Call( 'anchor.Set', [ 0.5 ] ) // Then call this function
        .Mass(); // And return all

      stuff.forEach( function( element ) {

        element.position.Set( nk.Utils.RandomInteger( -HW, HW ), nk.Utils.RandomInteger( -HH, HH ) );
      
      } );

      stage.AddChildren( stuff );

      var dragger = null;

      var timer = factory
        .Make( nk.Timer, 180 )
        .Call( 'onStart.Add', [ function() {

          console.log( 'start' );
          stage.onProcess.Dump();
        
        } ] )
        .Call( 'onFinish.Add', [ function(){

          console.log( 'finish' );

        } ] )
        .Call( 'Start' )
        .Done();
      
      stage.onProcess.Add( function() {

        timer.Process();
      
      } );

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
    
    }

    document.body.removeChild( buttonContainer );
  
  }

};
