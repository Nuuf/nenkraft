( function () {
  "use strict";
  var Super = nk.Container2D;
  function Graphic2D( _x, _y, _texture ) {
    if ( this instanceof Graphic2D ) {
      Super.call( this, _x, _y );
      this.anchor = new nk.Vector2D();
      if ( _texture !== undefined ) {
        this.texture = _texture;
        this.w = _texture.w;
        this.h = _texture.h;
      } else {
        this.texture = null;
        this.w = 0;
        this.h = 0;
      }
    }
    else return new Graphic2D( _x, _y );
  }
  Graphic2D.prototype = Object.create( Super.prototype );
  Graphic2D.prototype.constructor = Graphic2D;
  Graphic2D.prototype.Draw = function ( _rc ) {
    var position = this.position, scale = this.scale, anchor = this.anchor, texture = this.texture;
    _rc.save();
    _rc.translate( position.x - this.w * anchor.x, position.y - this.h * anchor.y );
    _rc.rotate( this.rotation );
    _rc.scale( scale.x, scale.y );
    if ( texture && texture.Draw ) {
      texture.Draw( _rc );
    }
    this.DrawChildren( _rc );
    _rc.restore();
  };
  nk.Entity.Graphic2D = Graphic2D;
  nk.Graphic2D = Graphic2D;
}() );