
var c = document.getElementsByTagName( 'canvas' )[0];
c.setAttribute('width', window.innerWidth);
c.setAttribute('height', window.innerHeight);
c.style.position = 'absolute';
c.style.top = 0;
c.style.left = 0;
var rc = c.getContext( '2d' );

var WIDTH = c.width;
var HEIGHT = c.height;

function Update()
{
    rc.fillStyle = '#000000';
    rc.fillRect( 0, 0, WIDTH, HEIGHT );
}
iId = setInterval( Update, 1 );