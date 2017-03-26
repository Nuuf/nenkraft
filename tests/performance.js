
var c = document.getElementById( 'canvas' );
var rc = c.getContext( '2d' );

var WIDTH = c.width;
var HEIGHT = c.height;

var DrawPolygon = nk.Debug.Draw.Polygon;
var DrawText = nk.Debug.Draw.Text;

var drawStyle = new nk.Style( {
    strokeStyle: '#FF0000',
    lineCap: nk.Style.LINE_CAP.SQUARE,
    lineJoin: nk.Style.LINE_JOIN.MITER,
    miterLimit: 2,
    lineWidth: 5,
    font: '30px Arial'
} );

var text = 'Hello Geometry';
var textPoint = {x: 100, y: 100};


var color = new nk.Color( 100, 200, 0 );
color.ConvertToHSLA( true );

var objects = [];

var totalVertices = 0;

var i = 0, l = 1;
for ( i; i < l; ++i )
{
    var po = new nk.Polygon2D();
    nk.Polygon2D.Construct.Circlic( po, 0.5 * WIDTH, 0.5 * HEIGHT, 100, 9);
    objects.push( po );
    totalVertices += po.vertices.length;
}


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
        DrawPolygon( rc, objects[ i ], drawStyle, false );
    }

    DrawText( rc, textPoint, text, drawStyle);

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


