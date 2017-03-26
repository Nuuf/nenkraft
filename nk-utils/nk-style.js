( function ()
{
    "use strict";
    function Style( _props )
    {
        if ( this instanceof Style )
        {
            this.fillStyle = '#FFFFFF'; //String
            this.strokeStyle = null; //String
            this.shadowColor = null; //String
            this.shadowBlur = 0; //Integer
            this.shadowOffsetX = 0; //Integer
            this.shadowOffsetY = 0; //Integer
            this.lineCap = Style.LINE_CAP.ROUND; //String
            this.lineJoin = Style.LINE_JOIN.ROUND; //String
            this.lineWidth = 1; //Integer
            this.miterLimit = 10; //Integer
            this.font = '16px Arial';
            this.textAlign = Style.TEXT_ALIGN.LEFT;
            this.textBaseline = Style.TEXT_BASELINE.TOP;
            if ( _props !== undefined )
            {
                var key;
                for ( key in _props )
                {
                    if (this[key] !== undefined) this[key] = _props[key];
                    // else error
                }
            }
        }
        else return new Style( _props );
    }
    Style.prototype = Object.create( null );
    Style.prototype.constructor = Style;
    Style.LINE_CAP = {
        ROUND: 'round',
        BUTT: 'butt',
        SQUARE: 'square'
    };
    Style.LINE_JOIN = {
        BEVEL: 'bevel',
        ROUND: 'round',
        MITER: 'miter'
    };
    Style.TEXT_ALIGN = {
        START: 'start',
        END: 'end',
        CENTER: 'center',
        LEFT: 'left',
        RIGHT: 'right'
    };
    Style.TEXT_BASELINE = {
        ALPHABETIC: 'alphabetic',
        TOP: 'top',
        HANGING: 'hanging',
        MIDDLE: 'middle',
        IDEOGRAPHIC: 'ideographic',
        BOTTOM: 'bottom'
    };
    nk.Style = Style;
}() );