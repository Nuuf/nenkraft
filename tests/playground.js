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

var path = new nk.Path.AABB2D( -50, -50, 50, 50 );
path.style.shadow.applied = false;
var child1 = new nk.Graphic2D( 0, 0, path );

var child2 = new nk.Graphic2D( 0, 0, path );

var child3 = new nk.Graphic2D( 0, 0, path );

var child4 = new nk.Graphic2D( 0, 0, path );

var angle1 = 0;
var speed1 = 4;

var angle2 = 0;
var speed2 = 4;

container.AddChildren( child1, child2, child3, child4 );

function Update() {

  child1.x += Math.cos( nk.Math.DTR( angle1 ) ) * speed1;
  child1.y += Math.sin( nk.Math.DTR( angle1 ) ) * speed1;
  child2.x -= Math.cos( nk.Math.DTR( angle1 ) ) * speed1;
  child2.y -= Math.sin( nk.Math.DTR( angle1 ) ) * speed1;

  child3.x += Math.cos( nk.Math.DTR( angle2 ) ) * speed2;
  child3.y += Math.sin( nk.Math.DTR( angle2 ) ) * speed2;
  child4.x -= Math.cos( nk.Math.DTR( angle2 ) ) * speed2;
  child4.y -= Math.sin( nk.Math.DTR( angle2 ) ) * speed2;

  child1.rotation = -nk.Math.DTR( angle1 );
  child2.rotation = -nk.Math.DTR( angle1 );
  child3.rotation = -nk.Math.DTR( angle2 );
  child4.rotation = -nk.Math.DTR( angle2 );

  angle1++;

  angle2--;

  angle1 = nk.Utils.InverseClamp( angle1, 0, 359 );
  angle2 = nk.Utils.InverseClamp( angle2, -359, 0 );

  rc.fillStyle = 'rgba(255, 255, 255, 0.02)';
  rc.fillRect( 0, 0, W, H );

  container.Draw( rc );

  requestAnimationFrame( Update );
}

Update();