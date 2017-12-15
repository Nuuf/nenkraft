/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  function ImageLoader ( _objs, _createTextures ) {
    if ( !( this instanceof ImageLoader ) ) return new ImageLoader( _objs, _createTextures );
    this.imageCache = new Nenkraft.Utils.Cache( Image );
    this.basicTextureCache = new Nenkraft.Utils.Cache( Nenkraft.Texture.BasicTexture );
    this.onImageLoaded = new Nenkraft.Event.LocalEvent();
    this.onComplete = new Nenkraft.Event.LocalEvent();
    if ( _objs !== undefined ) this.Load( _objs, _createTextures );
  }
  ImageLoader.prototype = Object.create( null );
  ImageLoader.prototype.constructor = ImageLoader;
  //Static

  //Members
  ImageLoader.prototype.count = 0;
  ImageLoader.prototype.loading = false;
  ImageLoader.prototype.toLoad = null;
  ImageLoader.prototype.createTextures = false;
  //Methods
  ImageLoader.prototype.Load = function ( _objs, _createTextures ) {
    if ( this.toLoad === null ) this.toLoad = [];
    this.toLoad.push.apply( this.toLoad, _objs );
    if ( _createTextures != null ) {
      this.createTextures = _createTextures;
    }
    if ( this.loading === false ) {
      this.count = 0;
      this.loading = true;
      this.Haul( this.count );
    }
  };
  ImageLoader.prototype.Haul = function ( _count ) {
    var item = this.toLoad[ _count ];
    if ( item != null ) {
      var image = new Image();
      image.onload = this.OnLoad.bind( this );
      image.onerror = this.OnError.bind( this );
      image.src = item.src;
      image.id = item.id;
      image.data = Object.create( null );
      image.data.w = item.w;
      image.data.h = item.h;
      image.data.fw = item.fw;
      image.data.fh = item.fh;
    } else {
      this.count = 0;
      this.loading = false;
      this.toLoad = null;
      this.onComplete.Dispatch( this, { imageCache: this.imageCache, basicTextureCache: this.basicTextureCache } );
    }
  };
  ImageLoader.prototype.OnLoad = function ( _event ) {
    var t = _event.target;
    delete t.onload;
    this.imageCache.StoreSafe( t );
    if ( this.createTextures === true ) {
      this.basicTextureCache.StoreSafe( new Nenkraft.Texture.BasicTexture( t, null, t.data.w, t.data.h, t.data.fw, t.data.fh ) );
    }
    this.onImageLoaded.Dispatch( t, { count: this.count } );
    this.Haul( ++this.count );
  };
  ImageLoader.prototype.OnError = function () {
    throw new Error( 'Could not load image' );
  };
  ImageLoader.prototype.GetImage = function ( _id ) {
    return this.imageCache.GetById( _id );
  };
  ImageLoader.prototype.GetBasicTexture = function ( _id ) {
    return this.basicTextureCache.GetById( _id );
  };
  Nenkraft.Load.ImageLoader = ImageLoader;
  Nenkraft.ImageLoader = ImageLoader;
};
