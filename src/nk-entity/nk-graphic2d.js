module.exports = function ( nk ) {
  "use strict";
  var Super = nk.Entity.Container2D;
  function Graphic2D( _x, _y, _path ) {
    if ( this instanceof Graphic2D ) {
      Super.call( this, _x, _y );
      this.anchor = new nk.Vector2D();
      this.visible = true;
      if ( _path !== undefined ) {
        this.path = _path;
        this.w = _path.w === undefined ? 0 : _path.w;
        this.h = _path.h === undefined ? 0 : _path.h;
      } else {
        this.path = null;
        this.w = 0;
        this.h = 0;
      }
    }
    else return new Graphic2D( _x, _y, _path );
  }
  Graphic2D.prototype = Object.create( Super.prototype );
  Graphic2D.prototype.constructor = Graphic2D;
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