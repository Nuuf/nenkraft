/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {

  'use strict';
  function Text ( _props ) {

    if ( !( this instanceof Text ) ) return new Text( _props );
    Nenkraft.Utils.ApplyProperties( this, _props );
    this.ConcatFont();
  
  }

  Text.prototype = Object.create( null );
  Text.prototype.constructor = Text;
  //Static
  Nenkraft.Style.TEXT_ALIGN = {
    START: 'start',
    END: 'end',
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right'
  };
  Nenkraft.Style.TEXT_BASELINE = {
    ALPHABETIC: 'alphabetic',
    TOP: 'top',
    HANGING: 'hanging',
    MIDDLE: 'middle',
    IDEOGRAPHIC: 'ideographic',
    BOTTOM: 'bottom'
  };
  //Members
  Text.prototype.fillColor = '#444499';
  Text.prototype.strokeColor = '#00FFFF';
  Text.prototype.fontSize = 22;
  Text.prototype.font = null;
  Text.prototype.fontFamily = 'Arial';
  Text.prototype.align = Nenkraft.Style.TEXT_ALIGN.LEFT;
  Text.prototype.baseline = Nenkraft.Style.TEXT_BASELINE.TOP;
  Text.prototype.applied = true;
  Text.prototype.lineWidth = 0.5;
  //Methods
  Text.prototype.Apply = function ( _rc ) {

    _rc.fillStyle = this.fillColor;
    _rc.strokeStyle = this.strokeColor;
    _rc.font = this.font;
    _rc.textAlign = this.align;
    _rc.textBaseline = this.baseline;
    _rc.lineWidth = this.lineWidth;
  
  };

  Text.prototype.ConcatFont = function () {

    this.font = this.fontSize + 'px ' + this.fontFamily;
  
  };

  Nenkraft.Style.Text = Text;

};
