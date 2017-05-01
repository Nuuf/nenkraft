module.exports = function ( nk ) {
  "use strict";
  function Text( _props ) {
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
  Text.prototype.fillStyle = '#000000';
  Text.prototype.strokeStyle = '#FFFFFF';
  Text.prototype.font = '22px Arial';
  Text.prototype.textAlign = nk.Style.TEXT_ALIGN.LEFT;
  Text.prototype.textBaseline = nk.Style.TEXT_BASELINE.TOP;
  Text.prototype.applied = true;
  //Methods
  Text.prototype.Apply = function ( _rc ) {
    _rc.fillStyle = this.fillStyle;
    _rc.strokeStyle = this.strokeStyle;
    _rc.font = this.font;
    _rc.textAlign = this.textAlign;
    _rc.textBaseline = this.textBaseline;
  };

  nk.Style.Text = Text;
};