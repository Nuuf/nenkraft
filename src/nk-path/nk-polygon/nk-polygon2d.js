/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  var Super = Nenkraft.Geom.Polygon2D;
  function Polygon2D () {
    if ( !( this instanceof Polygon2D ) ) return new Polygon2D();
    Super.call( this );
    this.style = Nenkraft.Style.CreateFSSa();
  }
  Polygon2D.prototype = Object.create( Super.prototype );
  Polygon2D.prototype.constructor = Polygon2D;
  //Static

  //Members

  //Methods
  Polygon2D.prototype.Draw = function ( _rc ) {
    var style = this.style, fill = style.fill, stroke = style.stroke, shadow = style.shadow;
    var vertices = this.vertices, vertex = vertices[ 0 ];
    _rc.beginPath();
    _rc.moveTo( vertex.x, vertex.y );
    for ( var i = 1, l = vertices.length; i < l; ++i ) {
      vertex = vertices[ i ];
      _rc.lineTo( vertex.x, vertex.y );
    }
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
  Nenkraft.Path.Polygon2D = Polygon2D;
};
