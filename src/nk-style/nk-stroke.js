module.exports = function ( nk ) {
  "use strict";
  function Stroke( _props ) {
    if ( this instanceof Stroke ) {
      this.strokeStyle = '#00FF00';
      this.lineCap = nk.Style.LINE_CAP.ROUND;
      this.lineJoin = nk.Style.LINE_JOIN.ROUND;
      this.lineWidth = 1;
      this.miterLimit = 10;
      this.applied = true;
      nk.Utils.ApplyProperties( this, _props );
    }
    else return new Stroke( _props );
  }
  Stroke.prototype = Object.create( null );
  Stroke.prototype.constructor = Stroke;
  Stroke.prototype.Apply = function ( _rc ) {
    _rc.strokeStyle = this.strokeStyle;
    _rc.lineCap = this.lineCap;
    _rc.lineJoin = this.lineJoin;
    _rc.lineWidth = this.lineWidth;
    _rc.miterLimit = this.miterLimit;
  };
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
  nk.Style.Stroke = Stroke;
};