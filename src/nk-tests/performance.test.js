module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Performance' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', RunPerformance );
  buttonContainer.appendChild( button );

  function RunPerformance() {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = 0;
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var container = new nk.Container2D( HW, HH );

    document.body.removeChild( buttonContainer );
  }
};