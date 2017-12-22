/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  var Super = Nenkraft.Entity.Sprite;
  var Char = Nenkraft.Utils.Char;
  function BitmapText ( _x, _y, _texture, _data, _text ) {
    if ( !( this instanceof BitmapText ) ) return new BitmapText( _x, _y, _texture, _data, _text );
    Super.call( this, _x, _y, _texture );
    this.fontData = _data;
    this.lineHeight = _data.data.font.common.attributes.lineHeight;
    if ( _text != null ) {
      this.text = _text;
    }
    this.chars = [];
    this.ComputeText();
  }
  BitmapText.prototype = Object.create( Super.prototype );
  BitmapText.prototype.constructor = BitmapText;
  //Static

  //Members
  BitmapText.prototype.maxWidth = 1024;
  BitmapText.prototype.fontData = null;
  BitmapText.prototype.text = '';
  BitmapText.prototype.chars = null;
  BitmapText.prototype.lineHeight = 0;
  //Methods
  BitmapText.prototype.Draw = function ( _rc ) {
    this.PreDraw( _rc );
    if ( this.render === true ) {
      if ( this.transformShouldUpdate === true ) {
        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      }
      this.transform.ApplyWorld( _rc );
      if ( this.display === true ) {
        _rc.globalAlpha = this.alpha;
        _rc.globalCompositeOperation = this.gco;
        this.DrawText( _rc );
      }
      if ( this.children.length > 0 ) {
        this.DrawChildren( _rc );
      }
    }
  };
  BitmapText.prototype.DrawText = function ( _rc ) {
    for ( var i = 0, chars = this.chars, char, l = chars.length; i < l; ++i ) {
      char = chars[ i ];
      _rc.drawImage(
        this.texture.image,
        char.x,
        char.y,
        char.width,
        char.height,
        char.position.x,
        char.position.y,
        char.width,
        char.height
      );
    }
  };
  BitmapText.prototype.ComputeText = function () {
    this.chars.length = 0;
    var kernings = this.fontData.data.font.kernings.kerning;
    var lineNum = 0;
    for ( var i = 0, char, chars = this.chars, prevChar, text = this.text, l = text.length; i < l; ++i ) {
      prevChar = chars[ i - 1 ];
      char = new Char( this.GetCharData( text.charCodeAt( i ) ) );
      char.ApplyKernings( kernings );
      char.Crunch( prevChar );
      if ( ( char.position.x + char.width ) > this.maxWidth ) {
        char.position.Set( 0 );
        char.yadvance = this.lineHeight * ++lineNum;
        char.position.Add( char.xoffset, char.yoffset + char.yadvance );
      }
      chars.push( char );
    }
  };
  BitmapText.prototype.GetCharData = function ( _id ) {
    for ( var i = 0, chars = this.fontData.data.font.chars.char, l = chars.length; i < l; ++i ) {
      if ( parseInt( chars[ i ].attributes.id ) === _id ) {
        return chars[ i ].attributes;
      }
    }
  };
  Nenkraft.Entity.BitmapText = BitmapText;
  Nenkraft.BitmapText = BitmapText;
};
