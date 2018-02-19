/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function BasicTexture ( _image, _id, _w, _h, _fullWidth, _fullHeight ) {

    if ( !( this instanceof BasicTexture ) ) return new BasicTexture( _image, _id, _w, _h, _fullWidth, _fullHeight );
    this.image = _image;

    if ( _id != null ) {

      this.id = _id;
    
    } else {

      this.id = _image.id;
    
    }

    if ( _w != null ) {

      this.w = _w;
    
    } else {

      this.w = _image.naturalWidth;
    
    }

    if ( _h != null ) {

      this.h = _h;
    
    } else {

      this.h = _image.naturalHeight;
    
    }

    if ( _fullWidth != null ) {

      this.fw = _fullWidth;
    
    } else {

      this.fw = _image.naturalWidth;
    
    }

    if ( _fullHeight != null ) {

      this.fh = _fullHeight;
    
    } else {

      this.fh = _image.naturalHeight;
    
    }
  
  }

  BasicTexture.prototype = Object.create( null );
  BasicTexture.prototype.constructor = BasicTexture;
  // Static

  // Members
  BasicTexture.prototype.image = null;
  BasicTexture.prototype.id = null;
  BasicTexture.prototype.w = 0;
  BasicTexture.prototype.h = 0;
  BasicTexture.prototype.fw = 0;
  BasicTexture.prototype.fh = 0;
  //
  BasicTexture.prototype.uniformId = 0;
  // Methods
  Nenkraft.Texture.BasicTexture = BasicTexture;
  Nenkraft.BasicTexture = BasicTexture;

};
