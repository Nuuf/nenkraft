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

var color = new nk.Color( 0, 255, 0 );
color.ConvertToHSLA();

var path = new nk.Path.Polygon2D();
//path.style.shadow.applied = true;
nk.Geom.Polygon2D.Construct.Star( path, 0, 0, 100, 50, 8 );

var bfly = new nk.Path.Polygon2D();
//bfly.style.shadow.applied = true;
bfly.style.stroke.lineWidth = 0.5;
bfly.style.fill.applied = false;
nk.Geom.Polygon2D.Construct.Butterfly( bfly, 0, 0, 150, 40 );

var child = new nk.Graphic2D( 0, -HH * 0.5, path );
var child_ = new nk.Graphic2D( 0, 0, bfly );

child.AddChild( child_ );

child.visible = false;

container.AddChild( child );

var angle = 0;
var speed = 3;


var text = new nk.Text( 0, 0, 'Hello. My name\'s bat. James Bat.' );
text.style.text.textAlign = nk.Style.TEXT_ALIGN.CENTER;
text.style.text.textBaseline = nk.Style.TEXT_BASELINE.MIDDLE;
text.style.text.font = '56px Arial';

container.AddChild( text );

function Update() {

  color.IncreaseChannel( 0, 0.1 );

  bfly.style.stroke.strokeStyle = color.value;
  text.style.text.fillStyle = color.value;

  var a = nk.Math.DTR( angle );

  child.x += Math.cos( a ) * speed;
  child.y += Math.sin( a ) * speed;

  text.y += Math.sin( a ) * speed;

  child.rotation = a;

  angle++;

  rc.fillStyle = 'rgba(255, 255, 255, 0.1)';
  rc.fillRect( 0, 0, W, H );

  container.Draw( rc );

  //requestAnimationFrame( Update );
}

setInterval( Update, 1 );