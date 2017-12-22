/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  function Char ( _data ) {
    if ( !( this instanceof Char ) ) return new Char( _data );
    if ( _data ) {
      this.id = parseInt( _data.id );
      this.position = new Nenkraft.Vector2D();
      this.x = parseInt( _data.x );
      this.y = parseInt( _data.y );
      this.width = parseInt( _data.width );
      this.height = parseInt( _data.height );
      this.xoffset = parseInt( _data.xoffset );
      this.yoffset = parseInt( _data.yoffset );
      this.xadvance = parseInt( _data.xadvance );
      this.kernings = [];
    }
  }
  Char.prototype = Object.create( null );
  Char.prototype.constructor = Char;
  //Static
  //Members
  Char.prototype.id = 0;
  Char.prototype.position = null;
  Char.prototype.x = 0;
  Char.prototype.y = 0;
  Char.prototype.width = 0;
  Char.prototype.height = 0;
  Char.prototype.xoffset = 0;
  Char.prototype.yoffset = 0;
  Char.prototype.xadvance = 0;
  Char.prototype.yadvance = 0;
  Char.prototype.kernings = null;
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
      this.position.x = _prevChar.position.x + _prevChar.xadvance;
      this.position.y = this.yadvance = _prevChar.yadvance;
      if ( _prevChar.kernings.length > 0 && this.kernings.length > 0 ) {
        for ( var i = 0, kernings = this.kernings, l = kernings.length; i < l; i += 3 ) {
          if ( kernings[ i + 1 ] === _prevChar.id ) {
            this.position.x += kernings[ i + 2 ];
            break;
          }
        }
      }
    }
    this.position.Add( this.xoffset, this.yoffset );
  };
  Nenkraft.Utils.Char = Char;
};
