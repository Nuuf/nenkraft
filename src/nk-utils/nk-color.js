module.exports = function ( nk ) {
  "use strict";
  var HexMap = nk.Utils.B16ToB10;
  function Color( _r, _g, _b, _a ) {
    if ( !( this instanceof Color ) ) return new Color( _r, _g, _b, _a );
    this.channel = [
      _r === undefined ? 0 : _r,
      _g === undefined ? 0 : _g,
      _b === undefined ? 0 : _b,
      _a === undefined ? 1 : _a,
    ];
    this.ComputeValueRGBA();
  }
  Color.prototype = Object.create( null );
  Color.prototype.constructor = Color;
  //Static

  //Members
  Color.prototype.value = '';
  Color.prototype.currentConversion = '';
  //Methods
  Color.prototype.Copy = function () {
    var color = new Color( this.channel[ 0 ], this.channel[ 1 ], this.channel[ 2 ], this.channel[ 3 ] );
    color.value = this.value;
    color.currentConversion = this.currentConversion;
    return color;
  };
  Color.prototype.ComputeValueRGBA = function () {
    this.value = 'rgba('.concat( this.channel.join( ',' ).concat( ')' ) );
  };
  Color.prototype.ComputeValueHSLA = function () {
    this.value = 'hsla(' + this.channel[ 0 ] + ',' + this.channel[ 1 ] + '%,' + this.channel[ 2 ] + '%,' + this.channel[ 3 ] + ')';
  };

  Color.prototype.ConvertToHSLA = function ( _round ) {
    var r = this.channel[ 0 ] / 255, g = this.channel[ 1 ] / 255, b = this.channel[ 2 ] / 255;
    var max = Math.max( r, g, b ), min = Math.min( r, g, b ), maxnmin = max - min, maxpmin = max + min;
    var h = 0, s = 0, l = maxpmin * 0.5;
    if ( max !== min ) {

      s = ( l > 0.5 ) ? maxnmin / ( 2 - max - min ) : maxnmin / ( max + min );

      if ( max === r ) h = ( g - b ) / maxnmin + ( ( g < b ) ? 6 : 0 );
      else if ( max === g ) h = ( b - r ) / maxnmin + 2;
      else h = ( r - g ) / maxnmin + 4;

      h /= 6;
    }
    this.channel[ 0 ] = h * 360, this.channel[ 1 ] = s * 100, this.channel[ 2 ] = l * 100;
    if ( _round === true ) {
      this.channel[ 0 ] = Math.round( this.channel[ 0 ] );
      this.channel[ 1 ] = Math.round( this.channel[ 1 ] );
      this.channel[ 2 ] = Math.round( this.channel[ 2 ] );
    }
    this.currentConversion = 'hsl';
    this.ComputeValueHSLA();
  };
  Color.prototype.SetRGB = function ( _r, _g, _b ) {
    var Clamp = nk.Utils.Clamp, min = 0, max = 255;
    this.channel[ 0 ] = Clamp( _r, min, max );
    this.channel[ 1 ] = Clamp( _g, min, max );
    this.channel[ 2 ] = Clamp( _b, min, max );
    this.currentConversion = 'rgb';
    this.ComputeValueRGBA();
  };
  Color.prototype.SetHex = function ( _hex ) {
    _hex = _hex.replace( /#/g, '' );
    var strs = _hex.match( /.{2}/g );
    strs = strs.map( HexMap );
    this.SetRGB( strs[ 0 ], strs[ 1 ], strs[ 2 ] );
  };
  Color.prototype.IncreaseChannel = function ( _channel, _value ) {
    this.channel[ _channel ] += _value;
    if ( this.currentConversion === 'rgb' ) this.ComputeValueRGBA();
    else if ( this.currentConversion === 'hsl' ) this.ComputeValueHSLA();
  };

  nk.Color = Color;
};