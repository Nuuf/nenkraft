/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Math.Vector2D;

  function Pixel ( _x, _y, _style ) {

    if ( !( this instanceof Pixel ) ) return new Pixel( _x, _y, _style );
    Super.call( this, _x, _y );
    this.style = new Nenkraft.Style.CreateP( _style );
    this.colorObj = new Nenkraft.Color();
  
  }

  Pixel.prototype = Object.create( Super.prototype );
  Pixel.prototype.constructor = Pixel;
  // Static

  // Members
  Pixel.prototype.colorObj = null;
  Pixel.prototype.style = null;
  Pixel.prototype.programController = null;
  Pixel.prototype.bufferData = null;

  // Methods
  /*
   * Pixel.prototype.Draw = function ( _rc ) {
   * //TODO
   *}; 
   */
  Pixel.prototype.GLDraw = function ( _gl, _transform ) {

    if ( this.programController !== null ) {

      this.programController.Execute(
        _transform.worldTransform.AsArray( true ),
        this.x, this.y
      );
    
    }
  
  };

  Pixel.prototype.LinkProgramController = function ( _pc ) {

    this.programController = _pc;
    this.LinkStyle();
  
  };

  Pixel.prototype.UseProgramController = function ( _pc ) {

    this.programController = _pc;
  
  };

  Pixel.prototype.LinkStyle = function () {

    var pc = this.programController;

    if ( pc !== null && pc.color !== null ) {

      pc.color.SetHex( this.style.pixel.color );
      pc.color.Normalize();
    
    }
  
  };

  Pixel.prototype.GetBufferData = function () {

    if ( this.bufferData == null ) {

      this.bufferData = [];
    
    }

    var bufferData = this.bufferData;
    bufferData[ 0 ] = this.x;
    bufferData[ 1 ] = this.y;
    bufferData[ 2 ] = this.colorObj.r;
    bufferData[ 3 ] = this.colorObj.g;
    bufferData[ 4 ] = this.colorObj.b;
    bufferData[ 5 ] = this.colorObj.a;
    bufferData[ 6 ] = this.style.pixel.size;
    return bufferData;
  
  };

  Pixel.prototype.UpdateInBuffer = function ( _buffer, _index ) {

    _buffer[ _index ] = this.x;
    _buffer[ _index + 1 ] = this.y;
    _buffer[ _index + 2 ] = this.colorObj.r;
    _buffer[ _index + 3 ] = this.colorObj.g;
    _buffer[ _index + 4 ] = this.colorObj.b;
    _buffer[ _index + 5 ] = this.colorObj.a;
    _buffer[ _index + 6 ] = this.style.pixel.size;
  
  };

  Nenkraft.Path.Pixel = Pixel;

};
