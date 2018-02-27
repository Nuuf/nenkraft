/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Sprite;

  function Tilesprite ( _x, _y, _texture, _unitId ) {

    if ( !( this instanceof Tilesprite ) ) return new Tilesprite( _x, _y, _texture, _unitId );
    if ( _texture == null ) _texture = Tilesprite.DEFAULT_TEXTURE;
    Super.call( this, _x, _y, _texture, _unitId );
    this.patternOffset = Nenkraft.Vector2D();
  
  }

  Tilesprite.prototype = Object.create( Super.prototype );
  Tilesprite.prototype.constructor = Tilesprite;
  // Static
  Tilesprite.DEFAULT_TEXTURE = null;

  Tilesprite.BUILD_DEFAULT_TEXTURE = function( _onLoad ) {

    Tilesprite.DEFAULT_TEXTURE = Nenkraft.Texture.BasicTexture(
      Nenkraft.Utils.ImageFromDataURL(
        Nenkraft.Utils.GenerateSimpleBase64Png( function () {
  
          // Oooh what fun.
          var path = Nenkraft.Path.Polygon2D();
          path.AddPoint( Nenkraft.Vector2D( 0, 0 ) );
          path.AddPoint( Nenkraft.Vector2D( 64, 0 ) );
          path.AddPoint( Nenkraft.Vector2D( 64, 64 ) );
          path.AddPoint( Nenkraft.Vector2D( 0, 64 ) );
          path.AddPoint( Nenkraft.Vector2D( 0, 0 ) );
          path.AddPoint( Nenkraft.Vector2D( 32, 32 ) );
          path.AddPoint( Nenkraft.Vector2D( 64, 0 ) );
          path.AddPoint( Nenkraft.Vector2D( 32, 32 ) );
          path.AddPoint( Nenkraft.Vector2D( 64, 64 ) );
          path.AddPoint( Nenkraft.Vector2D( 32, 32 ) );
          path.AddPoint( Nenkraft.Vector2D( 0, 64 ) );
          path.ComputeBounds();
          path.style.fill.color = 'rgba(66,66,66,0.5)';
          path.style.stroke.color = '#446644';
          path.style.stroke.lineWidth = 3;
          return Nenkraft.Graphic2D( 0, 0, path );
        
        } ), 64, 64, _onLoad
      ), 'DEFAULT_TILESPRITE_TEXTURE', 64, 64, 64, 64
    );

    delete Tilesprite.BUILD_DEFAULT_TEXTURE;
  
  };

  // Members
  Tilesprite.prototype.pattern = null;
  Tilesprite.prototype.patternOffset = null;

  // Methods
  Tilesprite.prototype.Draw = function( _rc ) {

    this.PreDraw( _rc );

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      this.transform.ApplyWorld( _rc );

      if ( this.display === true && this.pattern !== null ) {

        _rc.globalAlpha = this.tint.channel[3];
        _rc.globalCompositeOperation = this.gco;
        _rc.fillStyle = this.pattern;
        _rc.beginPath();
        _rc.rect( 0, 0, this.width, this.height );
        _rc.closePath();
        _rc.translate( this.patternOffset.x, this.patternOffset.y );
        _rc.fill();
      
      }

      if ( this.children.length > 0 ) {

        this.DrawChildren( _rc );
      
      }
    
    }
  
  };

  Tilesprite.prototype.GeneratePattern = function( _rc, _width, _height ) {

    if ( this.programController == null ) {

      this.pattern = _rc.createPattern( this.texture.image, null );
      this.w = _width;
      this.h = _height;
      this.scale.Set( 1.0 );
    
    } else {

      this.width = _width;
      this.height = _height;
      this.textureTransformation.SetTransform( 0, 0, this.scale.x, this.scale.y );
    
    }
  
  };

  Tilesprite.prototype.OffsetPattern = function( _x, _y ) {

    this.patternOffset.Add( _x, _y );
    this.textureTransformation.Translate( -_x / this.w, -_y / this.h );
  
  };

  Tilesprite.prototype.SetPatternOffset = function ( _x, _y ) {

    this.patternOffset.Set( _x, _y );
    this.textureTransformation.TranslateTo( -_x / this.w, -_y / this.h );
  
  };

  Tilesprite.prototype.GetPatternOffset = function() {

    return this.patternOffset;
  
  };

  Nenkraft.Entity.Tilesprite = Tilesprite;
  Nenkraft.Tilesprite = Tilesprite;

};
