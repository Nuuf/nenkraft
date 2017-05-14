module.exports = function ( nk ) {
  "use strict";
  function TransformationMatrix2D () {
    if ( !( this instanceof TransformationMatrix2D ) ) return new TransformationMatrix2D();
    this.matrix = new Float32Array( 7 );
    this.matrix[ 0 ] = this.matrix[ 1 ] = 1;
  }
  TransformationMatrix2D.prototype = Object.create( null );
  TransformationMatrix2D.prototype.constructor = TransformationMatrix2D;
  //Static

  //Members

  //Methods
  TransformationMatrix2D.prototype.GetScaleX = function () {
    return this.matrix[ 0 ];
  };
  TransformationMatrix2D.prototype.GetScaleY = function () {
    return this.matrix[ 1 ];
  };
  TransformationMatrix2D.prototype.GetSkewX = function () {
    return this.matrix[ 2 ];
  };
  TransformationMatrix2D.prototype.GetSkewY = function () {
    return this.matrix[ 3 ];
  };
  TransformationMatrix2D.prototype.GetX = function () {
    return this.matrix[ 4 ];
  };
  TransformationMatrix2D.prototype.GetY = function () {
    return this.matrix[ 5 ];
  };
  TransformationMatrix2D.prototype.GetRotation = function () {
    return this.matrix[ 6 ];
  };
  TransformationMatrix2D.prototype.SetAndGetScaleX = function ( _value ) {
    this.matrix[ 0 ] = _value;
    return _value;
  };
  TransformationMatrix2D.prototype.SetAndGetScaleY = function ( _value ) {
    this.matrix[ 1 ] = _value;
    return _value;
  };
  TransformationMatrix2D.prototype.SetAndGetSkewX = function ( _value ) {
    this.matrix[ 2 ] = _value;
    return _value;
  };
  TransformationMatrix2D.prototype.SetAndGetSkewY = function ( _value ) {
    this.matrix[ 3 ] = _value;
    return _value;
  };
  TransformationMatrix2D.prototype.SetAndGetX = function ( _value ) {
    this.matrix[ 4 ] = _value;
    return _value;
  };
  TransformationMatrix2D.prototype.SetAndGetY = function ( _value ) {
    this.matrix[ 5 ] = _value;
    return _value;
  };
  TransformationMatrix2D.prototype.SetAndGetRotation = function ( _value ) {
    this.matrix[ 6 ] = _value;
    return _value;
  };
  nk.Math.TransformationMatrix2D = TransformationMatrix2D;
};