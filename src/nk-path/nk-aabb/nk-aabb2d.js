module.exports = function ( nk ) {
  "use strict";
  var Super = nk.Geom.AABB2D;
  function AABB2D( _arg0, _arg1, _arg2, _arg3 ) {
    if ( this instanceof AABB2D ) {
      Super.call( this, _arg0, _arg1, _arg2, _arg3 );
      this.style = nk.Style.CreateFSSa();
    }
    else return new AABB2D( _arg0, _arg1, _arg2, _arg3 );
  }
  AABB2D.prototype = Object.create( Super.prototype );
  AABB2D.prototype.constructor = AABB2D;
  AABB2D.prototype.Draw = function ( _rc ) {
    var tl = this.tl, br = this.br, style = this.style, fill = style.fill, stroke = style.stroke, shadow = style.shadow;
    _rc.beginPath();
    _rc.moveTo( tl.x, tl.y );
    _rc.lineTo( br.x, tl.y );
    _rc.lineTo( br.x, br.y );
    _rc.lineTo( tl.x, br.y );
    _rc.closePath();
    if ( shadow.applied === true ) shadow.Apply( _rc );
    if ( fill.applied === true ) {
      fill.Apply( _rc );
      _rc.fill();
    }
    if ( stroke.applied === true ) {
      stroke.Apply( _rc );
      _rc.stroke();
    }
  };
  nk.Path.AABB2D = AABB2D;
};