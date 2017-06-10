module.exports = function ( nk ) {
  "use strict";
  var Super = nk.Geom.Circle;
  function Circle ( _x, _y, _radius ) {
    if ( !( this instanceof Circle ) ) return new Circle( _x, _y, _radius );
    Super.call( this, _x, _y, _radius );
    this.style = nk.Style.CreateFSSa();
  }
  Circle.prototype = Object.create( Super.prototype );
  Circle.prototype.constructor = Circle;
  //Static

  //Members

  //Methods
  Circle.prototype.Draw = function ( _rc ) {
    var center = this.center, style = this.style, fill = style.fill, stroke = style.stroke, shadow = style.shadow;
    _rc.beginPath();
    _rc.arc( center.x, center.y, this.radius, 0, nk.Math.PII, false );
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
  nk.Path.Circle = Circle;
};