module.exports = function () {
  "use strict";
  var Super = nk.Vector2D;
  function LimitVector2D( _x, _y, _xf, _yf, _xc, _fc ) {
    if ( !( this instanceof LimitVector2D ) ) return new LimitVector2D( _x, _y, _xf, _yf, _xc, _fc );
    Super.call( this, _x, _y );
    this.floor = new nk.Vector2D( _xf, _yf );
    this.ceil = new nk.Vector2D( _xc, _fc );
  }
  LimitVector2D.prototype = Object.create( Super.prototype );
  LimitVector2D.prototype.constructor = LimitVector2D;
  //Static

  //Members
  LimitVector2D.prototype.invert = false;
  //Methods
  LimitVector2D.prototype.Copy = function () {
    var cp = new LimitVector2D( this.x, this.y, this.floor.x, this.floor.y, this.ceil.x, this.ceil.y );
    cp.invert = this.invert;
    return cp;
  };
  LimitVector2D.prototype.Limit = function () {
    var Clamp = this.invert === false ? nk.Utils.Clamp : nk.Utils.InverseClamp, f = this.floor, c = this.ceil;
    this.x = Clamp( this.x, f.x, c.x );
    this.y = Clamp( this.y, f.y, c.y );
  };
  nk.Math.LimitVector2D = LimitVector2D;
  nk.LimitVector2D = LimitVector2D;
};