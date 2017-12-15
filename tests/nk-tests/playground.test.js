module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', 1024 );
    c.setAttribute( 'height', 64 );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    window.c = c;

    var W = c.width;
    var H = c.height;
    var HW = W * 0.5;
    var HH = H * 0.5;

    var stage = new nk.Stage2D( c, 0, 0 );

    window.stage = stage;

    /*     stage.Mount(
          new nk.Graphic2D( 0, 0, nk.Path.Line2D( -HW, -HH, HW, HH ) ),
          new nk.Graphic2D( 0, 0, nk.Path.Line2D( HW, -HH, -HW, HH ) )
        );
    
        var obj = stage.AddChild( new nk.Sprite( 0, 0 ) );
        obj.anchor.Set( 0.5 );
        obj.transform.Set( new nk.Matrix2D().SetTransform( 0, 0, 1, 1, nk.Math.RADIAN * 45, 0, 0, 0, 0 ) ); */

    stage.Mount( [
      new nk.Graphic2D( 0, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'red' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'green' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64 * 2, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'blue' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64 * 3, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'purple' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64 * 4, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'orange' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64 * 5, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'aqua' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64 * 6, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'violet' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64 * 7, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'indianred' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64 * 8, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'orchid' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64 * 9, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'magenta' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64 * 10, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'powderblue' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64 * 11, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'royalblue' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64 * 12, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'darkolivegreen' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64 * 13, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'darkkhaki' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64 * 14, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'steelblue' }, stroke: { applied: false } } ) ),
      new nk.Graphic2D( 64 * 15, 0, new nk.Path.AABB2D( 0, 0, 64, 64, { fill: { color: 'firebrick' }, stroke: { applied: false } } ) ),
    ] );

    var t = new nk.Path.Polygon2D( [ 0, 0, 100, 100, 0, 100, 100, 0 ] );
    console.log( t );



    document.body.removeChild( buttonContainer );


  }
};