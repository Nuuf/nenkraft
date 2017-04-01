( function () {
  "use strict";
  var Super = nk.Geom.Line2D;
  function Line2D( _arg0, _arg1, _arg2, _arg3 ) {
    if ( this instanceof Line2D ) {
      Super.call( this, _arg0, _arg1, _arg2, _arg3 );
      this.style = nk.Style.Create();
      delete this.style.text;
      delete this.style.fill;
    }
    else return new Line2D( _arg0, _arg1, _arg2, _arg3 );
  }
  Line2D.prototype = Object.create( Super.prototype );
  Line2D.prototype.constructor = Line2D;
  Line2D.prototype.Draw = function ( _rc ) {
    var s = this.s, e = this.e, style = this.style, fill = style.fill, stroke = style.stroke, shadow = style.shadow;
    _rc.beginPath();
    _rc.moveTo( s.x, s.y );
    _rc.lineTo( e.x, e.y );
    _rc.closePath();
    if ( shadow.applied === true ) shadow.Apply( _rc );
    if ( stroke.applied === true ) {
      stroke.Apply( _rc );
      _rc.stroke();
    }
  };
  nk.Path.Line2D = Line2D;
}() );