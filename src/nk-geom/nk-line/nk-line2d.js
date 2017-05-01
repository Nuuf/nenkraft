module.exports = function ( nk ) {
  "use strict";
  function Line2D( _arg0, _arg1, _arg2, _arg3 ) {
    if ( !( this instanceof Line2D ) ) return new Line2D( _arg0, _arg1, _arg2, _arg3 );
    if ( _arg0 !== undefined && _arg0.x && _arg0.y && _arg1 !== undefined && _arg1.x && _arg1.y ) {
      this.s = _arg0;
      this.e = _arg1;
    }
    else if ( _arg0 !== undefined && _arg1 !== undefined && _arg2 !== undefined && _arg3 !== undefined ) {
      this.s = new nk.Vector2D( _arg0, _arg1 );
      this.e = new nk.Vector2D( _arg2, _arg3 );
    }
    else {
      this.s = new nk.Vector2D();
      this.e = new nk.Vector2D();
    }
  }
  Line2D.prototype = Object.create( null );
  Line2D.prototype.constructor = Line2D;
  //Static
  Line2D.TYPE = 0;
  //Members
  Line2D.prototype.TYPE = Line2D.TYPE;
  //Methods
  Line2D.prototype.Stretch = function ( _m ) {
    var hm = _m * 0.5;
    this.s.PushFromV( this.e, hm );
    this.e.PushFromV( this.s, hm );
  };
  Line2D.prototype.Rotate = function ( _a, _anX, _anY ) {
    var ap = this.s.Copy();
    ap.AddV( this.e );
    ap.Multiply( _anX, _anY === undefined ? _anX : _anY );
    this.s.RotateAroundV( ap, _a );
    this.e.RotateAroundV( ap, _a );
  };
  Line2D.prototype.IntersectsPoint = function () {
    return false;
  };
  nk.Geom.Line2D = Line2D;
};