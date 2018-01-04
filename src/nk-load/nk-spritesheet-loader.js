/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function SpritesheetLoader ( _objects, _onComplete ) {

    if ( !( this instanceof SpritesheetLoader ) ) return new SpritesheetLoader( _objects );
    this.spritesheetCache = new Nenkraft.Utils.Cache( Nenkraft.Texture.Spritesheet );
    this.xhrLoader = new Nenkraft.Load.XHRLoader();
    this.imageLoader = new Nenkraft.Load.ImageLoader();
    this.onComplete = new Nenkraft.Event.LocalEvent();
    this.onSpritesheetLoaded = new Nenkraft.Event.LocalEvent();

    this.xhrLoader.onXHRLoaded.Add( this.OnPartXHRLoaded, this );
    this.imageLoader.onImageLoaded.Add( this.OnPartImageLoaded, this );

    if ( _onComplete != null ) {

      this.onComplete.Add( _onComplete, this );
    
    }

    if ( _objects != null ) this.Load( _objects );

  }

  SpritesheetLoader.prototype = Object.create( null );
  SpritesheetLoader.prototype.constructor = SpritesheetLoader;
  // Static

  // Members
  SpritesheetLoader.prototype.xhrLoader = null;
  SpritesheetLoader.prototype.imageLoader = null;
  SpritesheetLoader.prototype.spritesheetCache = null;
  SpritesheetLoader.prototype.onSpritesheetLoaded = null;
  SpritesheetLoader.prototype.onComplete = null;
  SpritesheetLoader.prototype.count = 0;
  SpritesheetLoader.prototype.loading = false;
  SpritesheetLoader.prototype.toLoad = null;
  SpritesheetLoader.prototype.pairCount = 0;
  SpritesheetLoader.prototype.tempBasicTexture = null;
  SpritesheetLoader.prototype.tempData = null;

  // Methods
  SpritesheetLoader.prototype.Load = function( _objects ) {

    if ( this.toLoad === null ) this.toLoad = [];

    this.toLoad.push.apply( this.toLoad, _objects );

    if ( this.loading === false ) {

      this.count = 0;
      this.loading = true;
      this.Haul( this.count );
    
    }

  };

  SpritesheetLoader.prototype.Haul = function( _count ) {

    var item = this.toLoad[ _count ];

    if ( item != null ) {

      item.data.id = item.image.id = item.id;
      this.xhrLoader.Load( [ item.data ] );
      this.imageLoader.Load( [ item.image ], true );
      
    } else {

      this.count = 0;
      this.loading = false;
      this.toLoad = null;
      this.onComplete.Dispatch( this, { spritesheetCache: this.spritesheetCache } );
    
    }
  
  };

  SpritesheetLoader.prototype.OnPartLoaded = function() {

    if ( ++this.pairCount === 2 ) {

      var size = this.tempData.meta.size;

      this.tempBasicTexture.fw = size.w;
      this.tempBasicTexture.fh = size.h;

      console.log( this.tempBasicTexture );

      var spritesheet = new Nenkraft.Texture.Spritesheet( this.tempBasicTexture, this.tempData );

      this.spritesheetCache.StoreSafe( spritesheet );

      this.pairCount = 0;
      this.onSpritesheetLoaded.Dispatch( spritesheet, { count: this.count } );
      this.Haul( ++this.count );
    
    }
  
  };

  SpritesheetLoader.prototype.OnPartXHRLoaded = function( _event ) {

    this.tempData = this.xhrLoader.GetData( _event.target.data.id );
    this.OnPartLoaded();
  
  };

  SpritesheetLoader.prototype.OnPartImageLoaded = function( _event ) {

    this.tempBasicTexture = this.imageLoader.GetBasicTexture( _event.target.id );
    this.OnPartLoaded();
  
  };

  SpritesheetLoader.prototype.GetSpritesheet = function( _id ) {

    return this.spritesheetCache.GetById( _id );
  
  };

  Nenkraft.Load.SpritesheetLoader = SpritesheetLoader;
  Nenkraft.SpritesheetLoader = SpritesheetLoader;

};
