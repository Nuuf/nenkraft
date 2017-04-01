( function () {
  "use strict";
  function Text( _props ) {
    if ( this instanceof Text ) {
      this.fillStyle = '#000000';
      this.strokeStyle = null;
      this.font = '22px Arial';
      this.textAlign = nk.Style.TEXT_ALIGN.LEFT;
      this.textBaseline = nk.Style.TEXT_BASELINE.TOP;
      this.applied = true;
      nk.Utils.ApplyProperties( this, _props );
    }
    else return new Text( _props );
  }
  Text.prototype = Object.create( null );
  Text.prototype.constructor = Text;
  Text.prototype.Apply = function ( _rc ) {
    _rc.fillStyle = this.fillStyle;
    _rc.strokeStyle = this.strokeStyle;
    _rc.font = this.font;
    _rc.textAlign = this.textAlign;
    _rc.textBaseline = this.textBaseline;
  };
  nk.Style.TEXT_ALIGN = {
    START: 'start',
    END: 'end',
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right'
  };
  nk.Style.TEXT_BASELINE = {
    ALPHABETIC: 'alphabetic',
    TOP: 'top',
    HANGING: 'hanging',
    MIDDLE: 'middle',
    IDEOGRAPHIC: 'ideographic',
    BOTTOM: 'bottom'
  };
  nk.Style.Text = Text;
}() );