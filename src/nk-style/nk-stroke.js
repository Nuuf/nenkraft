module.exports = function ( nk ) {
  "use strict";
  function Stroke ( _props ) {
    if ( !( this instanceof Stroke ) ) return new Stroke( _props );
    nk.Utils.ApplyProperties( this, _props );
  }
  Stroke.prototype = Object.create( null );
  Stroke.prototype.constructor = Stroke;
  //Static
  nk.Style.LINE_CAP = {
    ROUND: 'round',
    BUTT: 'butt',
    SQUARE: 'square'
  };
  nk.Style.LINE_JOIN = {
    BEVEL: 'bevel',
    ROUND: 'round',
    MITER: 'miter'
  };
  //Members
  Stroke.prototype.color = '#00FF00';
  Stroke.prototype.lineCap = nk.Style.LINE_CAP.ROUND;
  Stroke.prototype.lineJoin = nk.Style.LINE_JOIN.ROUND;
  Stroke.prototype.lineWidth = 1;
  Stroke.prototype.miterLimit = 10;
  Stroke.prototype.applied = true;
  //Methods
  Stroke.prototype.Apply = function ( _rc ) {
    _rc.strokeStyle = this.color;
    _rc.lineCap = this.lineCap;
    _rc.lineJoin = this.lineJoin;
    _rc.lineWidth = this.lineWidth;
    _rc.miterLimit = this.miterLimit;
  };

  nk.Style.Stroke = Stroke;
};