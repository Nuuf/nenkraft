/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Container2D;

  function Sprite ( _x, _y, _texture, _unitId ) {

    if ( !( this instanceof Sprite ) ) return new Sprite( _x, _y, _texture );
    Super.call( this, _x, _y );
    this.anchor = new Nenkraft.Vector2D( 0, 0 );
    this.clip = new Nenkraft.Geom.AABB2D();
    this.shape = new Nenkraft.Geom.AABB2D();
    this.textureTransformation = new Nenkraft.Math.Matrix2D();
    this.textureTranslation = new Nenkraft.Math.Matrix2D();
    this.originalShape = new Nenkraft.Geom.AABB2D();

    if ( _texture instanceof Nenkraft.GLTextureProgramController ) {

      this.programController = _texture;

      if ( _unitId != null ) {

        this.SetTexture( _texture['originalTexture' + _unitId] );
      
      } else {

        this.SetTexture( _texture.originalTexture0 );
      
      }
    
    }
    else if ( _texture == null ) {

      this.SetTexture( Sprite.DEFAULT_TEXTURE );
    
    } else {

      this.SetTexture( _texture );
    
    }
  
  }

  Sprite.prototype = Object.create( Super.prototype );
  Sprite.prototype.constructor = Sprite;

  // Static
  Sprite.DEFAULT_TEXTURE = null;

  Sprite.BUILD_DEFAULT_TEXTURE = function() {

    Sprite.DEFAULT_TEXTURE = new Nenkraft.Texture.BasicTexture(
      Nenkraft.Utils.ImageFromDataURL(
        Nenkraft.Utils.GenerateSimpleBase64Png( function () {
  
          // Oooh what fun.
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
        
        } )
      ), 'DEFAULT_SPRITE_TEXTURE', 64, 64, 64, 64
    );

    delete Sprite.BUILD_DEFAULT_TEXTURE;
  
  };

  // Members
  Sprite.prototype.shape = null;
  Sprite.prototype.originalShape = null;
  Sprite.prototype.clip = null;
  Sprite.prototype.texture = null;
  Sprite.prototype.anchor = null;
  Sprite.prototype.alpha = 1.0;
  Sprite.prototype.gco = Nenkraft.Style.GCO.DEFAULT;
  Sprite.prototype.interactive = true;
  Sprite.prototype.programController = null;
  Sprite.prototype.textureTransformation = null;
  Sprite.prototype.textureTranslation = null;
  Sprite.prototype.animationController = null;

  // Methods
  Sprite.prototype.Draw = function ( _rc ) {

    this.PreDraw( _rc );

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      this.transform.ApplyWorld( _rc );

      if ( this.display === true ) {

        var clip = this.clip, tl = clip.tl, br = clip.br, w = this.w, h = this.h, anchor = this.anchor;
        _rc.globalAlpha = this.alpha;
        _rc.globalCompositeOperation = this.gco;
        _rc.drawImage(
          this.texture.image,
          tl.x, tl.y, br.x, br.y, -w * anchor.x, -h * anchor.y, w, h
        );
      
      }

      if ( this.children.length > 0 ) {

        this.DrawChildren( _rc );
      
      }
    
    }
  
  };

  Sprite.prototype.GLDraw = function ( _gl ) {

    this.GLPreDraw( _gl );

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      if ( this.display === true && this.programController !== null ) {

        this.programController.Execute(
          this.transform.worldTransform.AsArray( true ),
          this.textureTranslation.AsArray( true ),
          this.textureTransformation.AsArray( true ),
          this.alpha,
          this.texture.uniformId
        );
      
      }

      if ( this.children.length > 0 && this.display === true ) {

        if ( this.isBatchParent === true ) {

          this.GLBatchDrawChildren( _gl );
        
        } else {

          this.GLDrawChildren( _gl );
        
        }
      
      }
    
    }
  
  };

  Sprite.prototype.GetBufferData = function () {

    this.UpdateTransform();
    this.UpdateTextureTransform();
    var transformData = this.transform.worldTransform.AsArray( true );
    var textureTranslationData = this.textureTranslation.AsArray( true );
    var textureTransformationData = this.textureTransformation.AsArray( true );

    if ( this.bufferData == null ) {

      this.bufferData = [];
    
    }

    var bufferData = this.bufferData;
    bufferData.length = 0;
    bufferData[ 0 ] = transformData[ 0 ];
    bufferData[ 1 ] = transformData[ 1 ];
    bufferData[ 2 ] = transformData[ 2 ];
    bufferData[ 3 ] = transformData[ 3 ];
    bufferData[ 4 ] = transformData[ 4 ];
    bufferData[ 5 ] = transformData[ 5 ];
    bufferData[ 6 ] = transformData[ 6 ];
    bufferData[ 7 ] = transformData[ 7 ];
    bufferData[ 8 ] = transformData[ 8 ];
    bufferData[ 9 ] = textureTranslationData[ 0 ];
    bufferData[ 10 ] = textureTranslationData[ 1 ];
    bufferData[ 11 ] = textureTranslationData[ 2 ];
    bufferData[ 12 ] = textureTranslationData[ 3 ];
    bufferData[ 13 ] = textureTranslationData[ 4 ];
    bufferData[ 14 ] = textureTranslationData[ 5 ];
    bufferData[ 15 ] = textureTranslationData[ 6 ];
    bufferData[ 16 ] = textureTranslationData[ 7 ];
    bufferData[ 17 ] = textureTranslationData[ 8 ];
    bufferData[ 18 ] = textureTransformationData[ 0 ];
    bufferData[ 19 ] = textureTransformationData[ 1 ];
    bufferData[ 20 ] = textureTransformationData[ 2 ];
    bufferData[ 21 ] = textureTransformationData[ 3 ];
    bufferData[ 22 ] = textureTransformationData[ 4 ];
    bufferData[ 23 ] = textureTransformationData[ 5 ];
    bufferData[ 24 ] = textureTransformationData[ 6 ];
    bufferData[ 25 ] = textureTransformationData[ 7 ];
    bufferData[ 26 ] = textureTransformationData[ 8 ];
    return bufferData;
  
  };

  Sprite.prototype.UpdateInBuffer = function () {

    this.UpdateTransform();
    this.UpdateTextureTransform();
    var transformData = this.transform.worldTransform.AsArray( true );
    var textureTranslationData = this.textureTranslation.AsArray( true );
    var textureTransformationData = this.textureTransformation.AsArray( true );
    var buffer = this.parent.childDataBuffer;
    var index = this.bufferStartIndex;
    buffer[ index ] = transformData[ 0 ];
    buffer[ index + 1 ] = transformData[ 1 ];
    buffer[ index + 2 ] = transformData[ 2 ];
    buffer[ index + 3 ] = transformData[ 3 ];
    buffer[ index + 4 ] = transformData[ 4 ];
    buffer[ index + 5 ] = transformData[ 5 ];
    buffer[ index + 6 ] = transformData[ 6 ];
    buffer[ index + 7 ] = transformData[ 7 ];
    buffer[ index + 8 ] = transformData[ 8 ];
    buffer[ index + 9 ] = textureTranslationData[ 0 ];
    buffer[ index + 10 ] = textureTranslationData[ 1 ];
    buffer[ index + 11 ] = textureTranslationData[ 2 ];
    buffer[ index + 12 ] = textureTranslationData[ 3 ];
    buffer[ index + 13 ] = textureTranslationData[ 4 ];
    buffer[ index + 14 ] = textureTranslationData[ 5 ];
    buffer[ index + 15 ] = textureTranslationData[ 6 ];
    buffer[ index + 16 ] = textureTranslationData[ 7 ];
    buffer[ index + 17 ] = textureTranslationData[ 8 ];
    buffer[ index + 18 ] = textureTransformationData[ 0 ];
    buffer[ index + 19 ] = textureTransformationData[ 1 ];
    buffer[ index + 20 ] = textureTransformationData[ 2 ];
    buffer[ index + 21 ] = textureTransformationData[ 3 ];
    buffer[ index + 22 ] = textureTransformationData[ 4 ];
    buffer[ index + 23 ] = textureTransformationData[ 5 ];
    buffer[ index + 24 ] = textureTransformationData[ 6 ];
    buffer[ index + 25 ] = textureTransformationData[ 7 ];
    buffer[ index + 26 ] = textureTransformationData[ 8 ];
  
  };

  Sprite.prototype.UpdateTextureTransform = function () {

    var tscaleX = this.w / this.texture.fw;
    var tscaleY = this.h / this.texture.fh;

    this.textureTranslation.TranslateTo(
      -this.w * this.anchor.x,
      -this.h * this.anchor.y
    );
    this.textureTransformation.TranslateTo(
      tscaleX * this.clip.tl.x / this.w,
      tscaleY * this.clip.tl.y / this.h
    );
  
  };

  Sprite.prototype.IntersectsPoint = function ( _v ) {

    if ( this.interactive === false ) return false;
    var cv = _v.SubtractVC( this.position );
    cv.Add( this.width * this.anchor.x, this.height * this.anchor.y );
    return this.shape.IntersectsPoint( cv );
  
  };

  Sprite.prototype.UpdateShape = function ( _newShape ) {

    if ( _newShape != null ) {

      this.originalShape = _newShape;
    
    }

    this.shape.SetC( this.originalShape );
    this.shape.Scale( this.scale.x, this.scale.y );
  
  };

  Sprite.prototype.SetTexture = function ( _texture ) {

    this.texture = _texture;
    this.ClipReconfigure( 0, 0, _texture.w, _texture.h );
    this.shape.SetC( this.clip );
    this.originalShape.SetC( this.clip );
  
  };

  Sprite.prototype.ClipReconfigure = function( _x, _y, _w, _h ) {

    var tscaleX = _w / this.texture.fw;
    var tscaleY = _h / this.texture.fh;

    var width = this.width;
    var height = this.height;

    this.clip.Set( _x, _y, _w, _h );
    this.w = _w;
    this.h = _h;

    if ( width !== 0 && height !== 0 ) {

      this.width = width;
      this.height = height;
    
    }
    
    this.textureTranslation.SetTransform( 
      -_w * this.anchor.x,
      -_h * this.anchor.y,
      tscaleX, tscaleY
    );
    this.textureTransformation.SetTransform( 
      tscaleX * this.clip.tl.x / _w,
      tscaleY * this.clip.tl.y / _h,
      tscaleX, tscaleY
    );
  
  };

  Sprite.prototype.CreateAnimation = function( _data ) {

    if ( this.animationController === null ) {

      this.animationController = new Nenkraft.Animator.Controller( this );
    
    }

    var animation = this.animationController.CreateAnimation( _data.id, _data.rate );

    if ( _data.spritesheet != null ) {

      for ( var i = 0; i < _data.frames.length; ++i ) {

        animation.AddFrame( _data.spritesheet.GetFrameById( _data.frames[i] ) );
      
      }
    
    }

    return animation;
    
  };

  Object.defineProperty( Sprite.prototype, 'width', {
    get: function () {

      return this.w * this.scale.x;
    
    },
    set: function ( _value ) {

      this.scale.x = _value / this.w;
    
    }
  } );
  Object.defineProperty( Sprite.prototype, 'height', {
    get: function () {

      return this.h * this.scale.y;
    
    },
    set: function ( _value ) {

      this.scale.y = _value / this.h;
    
    }
  } );

  Nenkraft.Entity.Sprite = Sprite;
  Nenkraft.Sprite = Sprite;

};
