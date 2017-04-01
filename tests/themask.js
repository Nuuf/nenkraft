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

var color = new nk.Color( 255, 0, 0 );
color.ConvertToHSLA();

var path = new nk.Path.AABB2D( -50, -50, 50, 50 );
path.style.shadow.applied = true;
var child1 = new nk.Graphic2D( 0, 0, path );

var child2 = new nk.Graphic2D( 0, 0, path );

var child3 = new nk.Graphic2D( 0, 0, path );

var child4 = new nk.Graphic2D( 0, 0, path );

var angle1 = 0;
var speed1 = 0;

var angle2 = 0;
var speed2 = 0;

var line = new nk.Path.Line2D( -100, 0, 100, 0 );
line.style.shadow.applied = true;
line.style.stroke.strokeStyle = '#000';
var child$1 = new nk.Graphic2D( 0, 0, line );
var child$2 = new nk.Graphic2D( 0, 0, line );
var child$3 = new nk.Graphic2D( 0, 0, line );
var child$4 = new nk.Graphic2D( 0, 0, line );

container.AddChildren( child1, child2, child3, child4 );

child1.AddChild( child$1 );
child2.AddChild( child$2 );
child3.AddChild( child$3 );
child4.AddChild( child$4 );

function Update() {

  path.style.fill.fillStyle = color.value;

  color.IncreaseChannel( 0, 1 );

  var a1 = nk.Math.DTR( angle1 );
  var a2 = nk.Math.DTR( angle2 );

  child1.x += Math.cos( a1 ) * speed1;
  child1.y += Math.sin( a1 ) * speed1;
  child2.x -= Math.cos( a1 ) * speed1;
  child2.y -= Math.sin( a1 ) * speed1;

  child3.x += Math.cos( a2 ) * speed2;
  child3.y += Math.sin( a2 ) * speed2;
  child4.x -= Math.cos( a2 ) * speed2;
  child4.y -= Math.sin( a2 ) * speed2;

  child1.rotation = -a1;
  child2.rotation = -a1;
  child3.rotation = -a2;
  child4.rotation = -a2;

  angle1 += 1;

  angle2 -= 1;

  speed1 += 0.01;

  speed2 += 0.01;

  speed1 = nk.Utils.InverseClamp( speed1, -5, 5 );
  speed2 = nk.Utils.InverseClamp( speed2, -5, 5 );

  angle1 = nk.Utils.InverseClamp( angle1, 0, 359 );
  angle2 = nk.Utils.InverseClamp( angle2, -359, 0 );

  rc.fillStyle = 'rgba(255, 255, 255, 0.001)';
  rc.fillRect( 0, 0, W, H );

  container.Draw( rc );

  //requestAnimationFrame( Update );
}

setInterval( Update, 1 );



var a = {
  a: {

  },
  b: {
    b: {

    },
    c: {
      d: {
        e: {
          f: {
            g: {
              h: {
                i: {
                  j: {
                    k: {
                      l: {
                        m: {
                          n: {
                            o: {
                              p: {
                                q: 10
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

nk.Utils.NestedAccess( a, 'b.c.d.e.f..g.h.i.j.k.l.m.n.o.p.q' );
nk.Utils.NestedAccess( a, 'b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q', true, 20 );
nk.Utils.NestedAccess( a, 'b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q' );