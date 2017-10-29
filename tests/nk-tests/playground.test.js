module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground' );
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

    var stage = new nk.Stage2D( c, HW, HH );

    stage.Mount(
      new nk.Graphic2D( 0, 0, nk.Path.Line2D( -HW, -HH, HW, HH ) ),
      new nk.Graphic2D( 0, 0, nk.Path.Line2D( HW, -HH, -HW, HH ) )
    );

    var obj = stage.AddChild( new nk.Sprite( 0, 0 ) );
    obj.anchor.Set( 0.5 );
    obj.transform.Set( new nk.Matrix2D().SetTransform( 0, 0, 1, 1, nk.Math.RADIAN * 45, 0, 0, 0, 0 ) );



    document.body.removeChild( buttonContainer );


  }
};