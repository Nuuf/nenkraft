/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  var Super = Nenkraft.Geom.Line2D;
  function Line2D ( _arg0, _arg1, _arg2, _arg3 ) {
    if ( !( this instanceof Line2D ) ) return new Line2D( _arg0, _arg1, _arg2, _arg3 );
    Super.call( this, _arg0, _arg1, _arg2, _arg3 );
    this.style = Nenkraft.Style.CreateSSa();
  }
  Line2D.prototype = Object.create( Super.prototype );
  Line2D.prototype.constructor = Line2D;
  //Static

  //Members

  //Methods
  Line2D.prototype.Draw = function ( _rc ) {
    var s = this.s, e = this.e, style = this.style, stroke = style.stroke, shadow = style.shadow;
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
  Nenkraft.Path.Line2D = Line2D;
  Nenkraft.Path.Ray2D = Line2D;
};
