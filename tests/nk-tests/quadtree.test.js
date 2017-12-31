module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Quadtree' );
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

    var stage = new nk.Stage2D( c, 0, 0 );
    stage.ComputeBounds();

    var bounds = new nk.AABB2D();
    bounds.SetC( stage.bounds );
    var root = new nk.QuadtreeNode( bounds, 0, 8, 3 );

    var objs = [];
    var nodes = [];

    stage.onProcess.Add( function () {

      nodes.forEach( function ( element ) {

        nk.Debug.Draw.AABB2D( rc, element.aabb );
      
      } );
    
    } );
    stage.mouse.onUp.Add( function ( event ) {

      var obj = new nk.Graphic2D( event.data.position.x, event.data.position.y, new nk.Path.AABB2D( 0, 0, 10, 10 ) );
      obj.ComputeBounds( obj.anchor );
      stage.AddChild( obj );
      objs.push( obj );
      root.Dump();
      objs.forEach( function ( element ) {

        root.Add( element.bounds );
      
      } );
      nodes = root.ConcatNodes();
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};
