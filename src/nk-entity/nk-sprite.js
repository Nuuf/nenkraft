module.exports = function ( Nenkraft ) {
  'use strict';
  var Super = Nenkraft.Entity.Container2D;
  function Sprite ( _x, _y, _texture ) {
    if ( !( this instanceof Sprite ) ) return new Sprite( _x, _y, _texture );
    Super.call( this, _x, _y );
    this.anchor = new Nenkraft.Vector2D( 0, 0 );
    this.clip = new Nenkraft.Geom.AABB2D();
    this.shape = new Nenkraft.Geom.AABB2D();
    if ( _texture === undefined ) _texture = Sprite.DEFAULT_TEXTURE;
    this.SetTexture( _texture );
  }
  Sprite.prototype = Object.create( Super.prototype );
  Sprite.prototype.constructor = Sprite;
  //Static
  Sprite.DEFAULT_TEXTURE = Nenkraft.Utils.TextureFromDataURL( Nenkraft.Utils.GenerateSimpleBase64Png( function () {
    //Oooh what fun.
    var path = new Nenkraft.Path.Polygon2D();
    path.AddPoint( new Nenkraft.Vector2D( 0, 0 ) );
    path.AddPoint( new Nenkraft.Vector2D( 64, 0 ) );
    path.AddPoint( new Nenkraft.Vector2D( 64, 64 ) );
    path.AddPoint( new Nenkraft.Vector2D( 0, 64 ) );
    path.AddPoint( new Nenkraft.Vector2D( 0, 0 ) );
    path.AddPoint( new Nenkraft.Vector2D( 32, 32 ) );
    path.AddPoint( new Nenkraft.Vector2D( 64, 0 ) );
    path.AddPoint( new Nenkraft.Vector2D( 32, 32 ) );
    path.AddPoint( new Nenkraft.Vector2D( 64, 64 ) );
    path.AddPoint( new Nenkraft.Vector2D( 32, 32 ) );
    path.AddPoint( new Nenkraft.Vector2D( 0, 64 ) );
    path.ComputeBounds();
    path.style.fill.color = 'rgba(66,66,66,0.5)';
    path.style.stroke.color = '#00FFFF';
    path.style.stroke.lineWidth = 3;
    return new Nenkraft.Graphic2D( 0, 0, path );
  } ) );
  //Members
  Sprite.prototype.shape = null;
  Sprite.prototype.clip = null;
  Sprite.prototype.texture = null;
  Sprite.prototype.anchor = null;
  //Methods
  Sprite.prototype.Draw = function ( _rc ) {
    if ( this.display === true ) {
      if ( this.transformShouldUpdate === true ) {
        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      }
      this.transform.ApplyWorld( _rc );
      if ( this.render === true ) {
        var clip = this.clip, tl = clip.tl, br = clip.br, w = this.w, h = this.h, anchor = this.anchor;
        _rc.drawImage(
          this.texture,
          tl.x, tl.y, br.x, br.y, -w * anchor.x, -h * anchor.y, w, h
        );
      }
      this.DrawChildren( _rc );
    }
  };
  Sprite.prototype.IntersectsPoint = function ( _v ) {
    var cv = _v.SubtractVC( this.position );
    cv.Add( this.w * this.anchor.x, this.h * this.anchor.y );
    cv.DivideV( this.scale );
    return this.shape.IntersectsPoint( cv );
  };
  Sprite.prototype.SetTexture = function ( _texture ) {
    this.texture = _texture;
    this.w = _texture.naturalWidth;
    this.h = _texture.naturalHeight;
    this.clip.Set( 0, 0, this.w, this.h );
    this.shape.SetC( this.clip );
  };
  Nenkraft.Entity.Sprite = Sprite;
  Nenkraft.Sprite = Sprite;
};