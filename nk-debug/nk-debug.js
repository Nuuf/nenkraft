( function ()
{
    "use strict";

    var PII = nk.Math.PII;
    /*
    * @parameter _rc: RenderingContext
    * @parameter _po: Polygon
    * @parameter _style: StyleObject
    * @parameter _drawBounds: Boolean
    */
    nk.Debug.BOUNDS_STYLE = new nk.Style( {
        lineWidth: 0.5,
        fillStyle: null,
        strokeStyle: '#00FFFF'
    } );
    nk.Debug.Draw.Polygon = function ( _rc, _po, _style, _drawBounds )
    {
        if ( _po.vertices.length === 0 ) throw new Error( 'Polygon has no vertices' );
        _rc.save();
        _rc.beginPath();
        var i = 1, vertices = _po.vertices, l = vertices.length, vertex = vertices[ 0 ];
        _rc.moveTo( vertex.x, vertex.y );
        for ( i; i < l; ++i )
        {
            vertex = vertices[ i ];
            _rc.lineTo( vertex.x, vertex.y );
        }
        _rc.closePath();
        _rc.lineWidth = _style.lineWidth;
        _rc.lineCap = _style.lineCap;
        _rc.lineJoin = _style.lineJoin;
        if ( _style.fillStyle )
        {
            _rc.fillStyle = _style.fillStyle;
            _rc.fill();
        }
        if ( _style.strokeStyle )
        {
            _rc.strokeStyle = _style.strokeStyle;
            _rc.stroke();
        }
        _rc.restore();
        if ( _drawBounds === true )
        {
            var boundsStyle = nk.Debug.BOUNDS_STYLE;
            _rc.save();
            _rc.beginPath();
            var aabb = _po.aabb;
            _rc.moveTo( aabb.tl.x, aabb.tl.y );
            _rc.lineTo( aabb.br.x, aabb.tl.y );
            _rc.lineTo( aabb.br.x, aabb.br.y );
            _rc.lineTo( aabb.tl.x, aabb.br.y );
            _rc.closePath();
            _rc.lineWidth = boundsStyle.lineWidth;
            _rc.lineCap = boundsStyle.lineCap;
            _rc.lineJoin = boundsStyle.lineJoin;
            if ( boundsStyle.fillStyle )
            {
                _rc.fillStyle = boundsStyle.fillStyle;
                _rc.fill();
            }
            if ( boundsStyle.strokeStyle )
            {
                _rc.strokeStyle = boundsStyle.strokeStyle;
                _rc.stroke();
            }
            _rc.stroke();
            _rc.restore();
        }
    };
    /*
    * @parameter _rc: RenderingContext
    * @parameter _p: Point
    * @parameter _radius: Number
    * @parameter _style: StyleObject
    */
    nk.Debug.Draw.Circle = function ( _rc, _p, _radius, _style )
    {
        _rc.save();
        _rc.beginPath();
        _rc.arc( _p.x, _p.y, _radius, 0, PII, false );
        _rc.closePath();
        _rc.lineWidth = _style.lineWidth;
        if ( _style.fillStyle )
        {
            _rc.fillStyle = _style.fillStyle;
            _rc.fill();
        }
        if ( _style.strokeStyle )
        {
            _rc.strokeStyle = _style.strokeStyle;
            _rc.stroke();
        }
        _rc.restore();
    };
    /*
    * @parameter _rc: RenderingContext
    * @parameter _p: Point
    * @parameter _text: String
    * @parameter _style: StyleObject
    */
    nk.Debug.Draw.Text = function ( _rc, _p, _text, _style )
    {
        _rc.save();
        _rc.font = _style.font;
        _rc.textAlign = _style.textAlign;
        _rc.textBaseline = _style.textBaseline;
        if ( _style.fillStyle )
        {
            _rc.fillStyle = _style.fillStyle;
            _rc.fillText( _text, _p.x, _p.y );
        }
        if ( _style.strokeStyle )
        {
            _rc.strokeStyle = _style.strokeStyle;
            _rc.strokeText( _text, _p.x, _p.y );
        }
        _rc.restore();
    };
}() );