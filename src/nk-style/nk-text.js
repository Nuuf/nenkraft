module.exports = function ( nk ) {
  "use strict";
  function Text ( _props ) {
    if ( !( this instanceof Text ) ) return new Text( _props );
    nk.Utils.ApplyProperties( this, _props );
  }
  Text.prototype = Object.create( null );
  Text.prototype.constructor = Text;
  //Static
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
  //Members
  Text.prototype.fillColor = '#000000';
  Text.prototype.strokeColor = '#FFFFFF';
  Text.prototype.font = '22px Arial';
  Text.prototype.align = nk.Style.TEXT_ALIGN.LEFT;
  Text.prototype.baseline = nk.Style.TEXT_BASELINE.TOP;
  Text.prototype.applied = true;
  //Methods
  Text.prototype.Apply = function ( _rc ) {
    _rc.fillStyle = this.fillColor;
    _rc.strokeStyle = this.strokeColor;
    _rc.font = this.font;
    _rc.textAlign = this.align;
    _rc.textBaseline = this.baseline;
  };

  nk.Style.Text = Text;
};