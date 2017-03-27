
var c = document.getElementsByTagName( 'canvas' )[0];
c.setAttribute('width', window.innerWidth);
c.setAttribute('height', window.innerHeight);
c.style.position = 'absolute';
c.style.top = 0;
c.style.left = 0;
var rc = c.getContext( '2d' );

var WIDTH = c.width;
var HEIGHT = c.height;

var DrawPolygon = nk.Debug.Draw.Polygon2D;
var DrawText = nk.Debug.Draw.Text;

var drawStyle = new nk.Style( {
    strokeStyle: '#FF0000',
    lineCap: nk.Style.LINE_CAP.SQUARE,
    lineJoin: nk.Style.LINE_JOIN.MITER,
    miterLimit: 1,
    lineWidth: 3,
    font: '100px Arial'
} );

var text = 'Hello Geometry';
var textPoint = {x: 100, y: 100};


var color = new nk.Color( 100, 200, 0 );
color.SetHex('##22##FF##55');
color.ConvertToHSLA( true );

var objects = [];

var totalVertices = 0;

var i = 0, l = 1;
for ( i; i < l; ++i )
{
    var po = new nk.Polygon2D();
    nk.Polygon2D.Construct.Circlic( po, 0.5 * WIDTH, 0.5 * HEIGHT, 100, 13);
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
        objects[ i ].Rotate( Math.PI / 180, 0.5, 0.5, true );
        DrawPolygon( rc, objects[ i ], drawStyle, true );
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


