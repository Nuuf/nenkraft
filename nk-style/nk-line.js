( function () {
  "use strict";
  function Line( _props ) {
    if ( this instanceof Line ) {
      this.strokeStyle = '#00FF00';
      this.lineCap = nk.Style.LINE_CAP.ROUND;
      this.lineJoin = nk.Style.LINE_JOIN.ROUND;
      this.lineWidth = 1;
      this.miterLimit = 10;
      this.applied = true;
      nk.Utils.ApplyProperties( this, _props );
    }
    else return new Line( _props );
  }
  Line.prototype = Object.create( null );
  Line.prototype.constructor = Line;
  Line.prototype.Apply = function ( _rc ) {
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
  nk.Style.Line = Line;
}() );