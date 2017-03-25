( function ()
{
    "use strict";
    nk.Utils.Clamp = function ( _c, _min, _max )
    {
        if ( _c < _min ) return _min;
        else if ( _c > _max ) return _max;
        else return _c;
    };
    nk.Utils.ToBinaryString = function ( _val )
    {
        return _val.toString( 2 );
    };
    nk.Utils.ToHexString = function ( _val )
    {
        return _val.toString( 16 );
    }
    nk.Utils.B16ToB10 = function ( _str )
    {
        return parseInt( _str, 16 );
    }
}() );
