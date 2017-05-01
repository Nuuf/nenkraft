module.exports = function ( nk ) {
  "use strict";
  var Super = nk.Entity.Container2D;
  function Graphic2D( _x, _y, _path ) {
    if ( !( this instanceof Graphic2D ) ) return new Graphic2D( _x, _y, _path );
    Super.call( this, _x, _y );
    this.anchor = new nk.Vector2D();
    if ( _path !== undefined ) {
      if ( _path.w !== undefined ) this.w = _path.w;
      if ( _path.h !== undefined ) this.h = _path.h;
      if ( _path.diameter !== undefined ) this.w = this.h = _path.diameter;
      this.path = _path;
    }
  }
  Graphic2D.prototype = Object.create( Super.prototype );
  Graphic2D.prototype.constructor = Graphic2D;
  //Static

  //Members
  Graphic2D.prototype.w = 0;
  Graphic2D.prototype.h = 0;
  Graphic2D.prototype.path = null;
  Graphic2D.prototype.visible = true;
  //Methods
  Graphic2D.prototype.Draw = function ( _rc ) {
    if ( this.render === true ) {
      var position = this.position, scale = this.scale, anchor = this.anchor, path = this.path;
      _rc.save();
      _rc.translate( position.x - this.w * anchor.x, position.y - this.h * anchor.y );
      _rc.rotate( this.rotation );
      _rc.scale( scale.x, scale.y );
      if ( path && path.Draw && this.visible === true ) {
        path.Draw( _rc );
      }
      this.DrawChildren( _rc );
      _rc.restore();
    }
  };
  Graphic2D.prototype.IntersectsPoint = function ( _v ) {
    var cv = _v.SubtractVC( this.position );
    return this.path.IntersectsPoint( cv, this.anchor, this.w, this.h );
  };
  nk.Entity.Graphic2D = Graphic2D;
  nk.Graphic2D = Graphic2D;
};