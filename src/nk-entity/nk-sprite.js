module.exports = function ( nk ) {
  "use strict";
  var Super = nk.Entity.Container2D;
  function Sprite ( _x, _y, _texture ) {
    if ( !( this instanceof Sprite ) ) return new Sprite( _x, _y, _texture );
    Super.call( this, _x, _y );
    if ( _texture === undefined ) _texture = Sprite.DEFAULT_TEXTURE;
    this.SetTexture( _texture );
  }
  Sprite.prototype = Object.create( Super.prototype );
  Sprite.prototype.constructor = Sprite;
  //Static
  Sprite.DEFAULT_TEXTURE = nk.Utils.GenerateTexture( function () {
    //Oooh what fun.
    var path = new nk.Path.Polygon2D();
    path.AddPoint( new nk.Vector2D( 0, 0 ) );
    path.AddPoint( new nk.Vector2D( 100, 0 ) );
    path.AddPoint( new nk.Vector2D( 100, 100 ) );
    path.AddPoint( new nk.Vector2D( 0, 100 ) );
    path.AddPoint( new nk.Vector2D( 0, 0 ) );
    path.AddPoint( new nk.Vector2D( 50, 50 ) );
    path.AddPoint( new nk.Vector2D( 100, 0 ) );
    path.AddPoint( new nk.Vector2D( 50, 50 ) );
    path.AddPoint( new nk.Vector2D( 100, 100 ) );
    path.AddPoint( new nk.Vector2D( 50, 50 ) );
    path.AddPoint( new nk.Vector2D( 0, 100 ) );
    path.ComputeBounds();
    path.style.fill.fillStyle = 'rgba(66,00,66,0.5)';
    path.style.stroke.strokeStyle = '#F00';
    path.style.stroke.lineWidth = 3;
    return new nk.Graphic2D( 0, 0, path );
  } );
  //Members
  Sprite.prototype.shape = null;
  Sprite.prototype.clip = null;
  Sprite.prototype.texture = null;
  Sprite.prototype.visible = true;
  //Methods
  Sprite.prototype.Draw = function ( _rc ) {
    if ( this.render === true ) {
      this.ApplyTransformation( _rc );
      var clip = this.clip, tl = clip.tl, br = clip.br, w = this.w, h = this.h;
      _rc.drawImage(
        this.texture,
        tl.x, tl.y, br.x, br.y, 0, 0, w, h
      );
      this.DrawChildren( _rc );
    }
  };
  Sprite.prototype.IntersectsPoint = function ( _v ) {
    var cv = _v.SubtractVC( this.position );
    return this.shape.IntersectsPoint( cv, this.anchor, this.w, this.h );
  };
  Sprite.prototype.SetTexture = function ( _texture ) {
    this.texture = _texture;
    this.w = _texture.naturalWidth;
    this.h = _texture.naturalHeight;
    this.clip = new nk.Geom.AABB2D( 0, 0, this.w, this.h );
    this.shape = new nk.Geom.AABB2D( 0, 0, this.w, this.h );
  };
  nk.Entity.Sprite = Sprite;
  nk.Sprite = Sprite;
};