/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  function TextureLoader ( _objs ) {
    if ( !( this instanceof TextureLoader ) ) return new TextureLoader( _objs );
    this.cache = [];
    this.onTextureLoaded = new Nenkraft.Event.LocalEvent();
    this.onComplete = new Nenkraft.Event.LocalEvent();
    this.OnLoad = this.OnLoad.bind( this );
    if ( _objs !== undefined ) this.Load( _objs );
  }
  TextureLoader.prototype = Object.create( null );
  TextureLoader.prototype.constructor = TextureLoader;
  //Static

  //Members
  TextureLoader.prototype.count = 0;
  TextureLoader.prototype.loading = false;
  TextureLoader.prototype.toLoad = null;
  //Methods
  TextureLoader.prototype.Load = function ( _objs ) {
    if ( this.toLoad === null ) this.toLoad = [];
    this.toLoad = this.toLoad.concat( _objs );
    if ( this.loading === false ) {
      this.count = 0;
      this.loading = true;
      this.Haul( this.count );
    }
  };
  TextureLoader.prototype.Haul = function ( _count ) {
    var item = this.toLoad[ _count ];
    if ( item !== undefined ) {
      if ( this.Get( item.id ) !== null ) throw new Error( 'Invalid identifier' );
      var image = new Image();
      image.onload = this.OnLoad;
      image.src = item.src;
      image.data = { id: item.id };
    }
    else {
      this.onComplete.Dispatch( this, { cache: this.cache } );
      this.count = 0;
      this.loading = false;
      this.toLoad = null;
    }
  };
  TextureLoader.prototype.OnLoad = function ( _event ) {
    var texture = { id: _event.target.data.id, image: _event.target };
    this.cache.push( texture );
    delete _event.target.data;
    this.onTextureLoaded.Dispatch( texture, { count: this.count } );
    this.Haul( ++this.count );
  };
  TextureLoader.prototype.Get = function ( _id ) {
    for ( var i = 0, l = this.cache.length, texture; i < l; ++i ) {
      texture = this.cache[ i ];
      if ( texture && texture.id === _id ) return texture.image;
    }
    return null;
  };
  Nenkraft.Load.TextureLoader = TextureLoader;
};
