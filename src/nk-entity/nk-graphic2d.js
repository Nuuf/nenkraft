module.exports = function ( Nenkraft ) {
  'use strict';
  var Super = Nenkraft.Entity.Container2D;
  function Graphic2D ( _x, _y, _path ) {
    if ( !( this instanceof Graphic2D ) ) return new Graphic2D( _x, _y, _path );
    Super.call( this, _x, _y );
    if ( _path !== undefined ) {
      if ( _path.w !== undefined && _path.h !== undefined ) {
        this.w = _path.w;
        this.h = _path.h;
      }
      else if ( _path.GetLength !== undefined ) this.w = this.h = _path.GetLength();
      else if ( _path.diameter !== undefined ) this.w = this.h = _path.diameter;
      else if ( _path.aabb !== undefined ) {
        this.w = _path.aabb.w;
        this.h = _path.aabb.h;
      }
      this.path = _path;
    }
  }
  Graphic2D.prototype = Object.create( Super.prototype );
  Graphic2D.prototype.constructor = Graphic2D;
  //Static

  //Members
  Graphic2D.prototype.path = null;
  Graphic2D.prototype.anchor = null;
  Graphic2D.prototype.alpha = 1.0;
  Graphic2D.prototype.gco = Nenkraft.Style.GCO.SOURCE_OVER;
  Graphic2D.prototype.interactive = true;
  //Methods
  Graphic2D.prototype.Draw = function ( _rc ) {
    if ( this.render === true ) {
      if ( this.transformShouldUpdate === true ) {
        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      }
      this.transform.ApplyWorld( _rc );
      var path = this.path;
      if ( path && path.Draw && this.display === true ) {
        _rc.globalAlpha = this.alpha;
        _rc.globalCompositeOperation = this.gco;
        path.Draw( _rc );
      }
      if ( this.children.length > 0 ) {
        this.DrawChildren( _rc );
      }
    }
  };
  Graphic2D.prototype.IntersectsPoint = function ( _v ) {
    if ( this.interactive === false ) return false;
    var cv = _v.SubtractVC( this.position );
    cv.DivideV( this.scale );
    return this.path.IntersectsPoint( cv );
  };
  Nenkraft.Entity.Graphic2D = Graphic2D;
  Nenkraft.Graphic2D = Graphic2D;
};
