/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.CoreEntity2D;
  function Char ( _data ) {

    if ( !( this instanceof Char ) ) return new Char( _data );
    Super.call( this );
    if ( _data ) {

      this.id = parseInt( _data.id );
      this.cx = parseInt( _data.x );
      this.cy = parseInt( _data.y );
      this.w = parseInt( _data.width );
      this.h = parseInt( _data.height );
      this.xoffset = parseInt( _data.xoffset );
      this.yoffset = parseInt( _data.yoffset );
      this.xadvance = parseInt( _data.xadvance );
      this.kernings = [];
      this.translation = new Nenkraft.Matrix2D();
      this.transformation = new Nenkraft.Matrix2D();
    
    }
  
  }

  Char.prototype = Object.create( Super.prototype );
  Char.prototype.constructor = Char;
  //Static
  //Members
  Char.prototype.id = 0;
  Char.prototype.xoffset = 0;
  Char.prototype.yoffset = 0;
  Char.prototype.xadvance = 0;
  Char.prototype.yadvance = 0;
  Char.prototype.kernings = null;
  //
  Char.prototype.translation = null;
  Char.prototype.transformation = null;
  //Methods
  Char.prototype.ApplyKernings = function ( _kernings ) {

    for ( var i = 0, attributes, l = _kernings.length; i < l; ++i ) {

      attributes = _kernings[ i ].attributes;
      if ( parseInt( attributes.first ) === this.id ) {

        this.kernings.push(
          parseInt( attributes.first ),
          parseInt( attributes.second ),
          parseInt( attributes.amount )
        );
      
      }
    
    }
  
  };

  Char.prototype.Crunch = function ( _prevChar ) {

    this.position.Set( 0 );
    if ( _prevChar != null ) {

      this.x = _prevChar.x + _prevChar.xadvance;
      this.y = this.yadvance = _prevChar.yadvance;
      if ( _prevChar.kernings.length > 0 && this.kernings.length > 0 ) {

        for ( var i = 0, kernings = this.kernings, l = kernings.length; i < l; i += 3 ) {

          if ( kernings[ i + 1 ] === _prevChar.id ) {

            this.x += kernings[ i + 2 ];
            break;
          
          }
        
        }
      
      }
    
    }

    this.position.Add( this.xoffset, this.yoffset );
  
  };

  Char.prototype.UpdateMatrices = function () {

    if ( this.parent != null ) {

      var texture = this.parent.texture;
      var scaleX = this.width / texture.fw;
      var scaleY = this.height / texture.fh;
      this.UpdateTransform();
      this.translation.SetTransform( 0, 0, scaleX, scaleY );
      this.transformation.SetTransform( scaleX * this.cx / this.width, scaleY * this.cy / this.height, scaleX, scaleY );
    
    }
  
  };

  Nenkraft.Entity.Char = Char;

};
