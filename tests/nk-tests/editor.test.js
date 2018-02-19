module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Editor' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    var editor = nk.Editor();

    var c = editor.stage.canvas;
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';

    editor.MountTo( document.body );
    editor.stage.w = c.width;
    editor.stage.h = c.height;

    console.log( editor );

    document.body.removeChild( buttonContainer );
  
  }

};
