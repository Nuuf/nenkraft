
var c = document.getElementById( 'canvas' );
var rc = c.getContext( '2d' );

var WIDTH = c.width;
var HEIGHT = c.height;

var Draw = nk.Debug.Draw.Polygon;

var drawStyle = {
    lineWidth: 0.5,
    strokeStyle: '#00FF00',
    fillStyle: '#FF0000'
};

var objects = [];

var totalVertices = 0;

var i = 0, l = 1;
for ( i; i < l; ++i )
{
    var po = new nk.Polygon2D();
    nk.Polygon2D.Construct.Rectangular( po, 0.5 * WIDTH, 0.5 * HEIGHT, 100, 100, 2, 0.3, 0.3, 0.3 );
    objects.push( po );
    totalVertices += po.vertices.length;
}

var color = new nk.Color( 100, 200, 0 );
color.ConvertToHSLA();


var then = 0;
var now = 0;
var deltas = [];


var counter = 0;
var counterStop = 358;
var iId;
function Update()
{
    now = new Date().getTime();
    deltas.push( 1 / ( now - then ) * 1000 );
    then = now;


    rc.fillStyle = '#000000';
    rc.fillRect( 0, 0, WIDTH, HEIGHT );

    color.IncreaseChannel( 0, 0.5 );
    drawStyle.fillStyle = color.value;

    var i = 0, l = objects.length;
    for ( i; i < l; ++i )
    {
        objects[ i ].Rotate( Math.PI / 180, 0.5, 0.5, false );
        Draw( rc, objects[ i ], drawStyle, false )
    }

    if ( counter++ > counterStop ) 
    {
        clearInterval( iId );
        deltas.sort( function ( _a, _b )
        {
            return _a - _b;
        } );
        console.log( deltas[ Math.round(( deltas.length - 1 ) * 0.5 ) ], 'FPS median', counter + ' updates', objects.length + ' object(s)' );
        console.log( 'Total vertices: ', totalVertices );
        console.log( '---Total time---' );
        console.timeEnd( 't' );
    }
}

console.time( 't' );
iId = setInterval( Update, 1 );


