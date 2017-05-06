module.exports = function ( nk ) {
  "use strict";
  var Super = nk.Entity.Container2D;
  function Sprite ( _x, _y, _texture ) {
    if ( !( this instanceof Sprite ) ) return new Sprite( _x, _y, _texture );
    Super.call( this, _x, _y );
    this.anchor = new nk.Vector2D();
    if ( _texture === undefined ) throw new Error( 'Please provide a texture' );
    this.texture = _texture;
    this.w = _texture.naturalWidth;
    this.h = _texture.naturalHeight;
    this.clip = new nk.Geom.AABB2D( 0, 0, this.w, this.h );
    this.shape = new nk.Geom.AABB2D( 0, 0, this.w, this.h );
  }
  Sprite.prototype = Object.create( Super.prototype );
  Sprite.prototype.constructor = Sprite;
  //Static

  //Members
  Sprite.prototype.w = 0;
  Sprite.prototype.h = 0;
  Sprite.prototype.texture = null;
  Sprite.prototype.visible = true;
  //Methods
  Sprite.prototype.Draw = function ( _rc ) {
    if ( this.render === true ) {
      var position = this.position, scale = this.scale, anchor = this.anchor, path = this.path;
      var clip = this.clip, w = this.w, h = this.h;
      _rc.save();
      _rc.translate( position.x - w * anchor.x, position.y - h * anchor.y );
      _rc.rotate( this.rotation );
      _rc.scale( scale.x, scale.y );
      _rc.drawImage(
        this.texture,
        clip.tl.x, clip.tl.y, clip.br.x, clip.br.y, 0, 0, w, h
      );
      this.DrawChildren( _rc );
      _rc.restore();
    }
  };
  Sprite.prototype.IntersectsPoint = function ( _v ) {
    var cv = _v.SubtractVC( this.position );
    return this.shape.IntersectsPoint( cv, this.anchor, this.w, this.h );
  };
  nk.Entity.Sprite = Sprite;
  nk.Sprite = Sprite;
};