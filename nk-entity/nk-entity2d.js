( function ()
{
    "use strict";
    function Entity2D( _x, _y )
    {
        if ( this instanceof Entity2D )
        {
            this.position = new nk.Vector2D( _x, _y );
            this.shape = null;
            this.style = new nk.Style();
        }
        else return new Entity2D( _x, _y );
    }
    Entity2D.prototype = Object.create( null );
    Entity2D.prototype.constructor = Entity2D;
    Entity2D.prototype.Draw = function( _rc )
    {
        var position = this.position;
        _rc.save();
        _rc.translate(position.x, position.y);
        _rc.restore();
    };
    nk.Entity.Entity2D = Entity2D;
    nk.Entity2D = Entity2D;
}() );