/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Transform2D ( _x, _y ) {

    if ( !( this instanceof Transform2D ) ) return new Transform2D( _x, _y );
    this.position = Nenkraft.Vector2D( _x, _y );
    this.scale = Nenkraft.Vector2D( 1, 1 );
    this.skew = Nenkraft.Vector2D( 0, 0 );
    this.pivot = Nenkraft.Vector2D( 0, 0 );
    this.localTransform = Nenkraft.Matrix2D();
    this.worldTransform = Nenkraft.Matrix2D();
  
  }

  Transform2D.prototype = Object.create( null );
  Transform2D.prototype.constructor = Transform2D;
  // Static

  // Members
  Transform2D.prototype.rotation = 0;
  Transform2D.prototype.skewCX = 1;
  Transform2D.prototype.skewSX = 0;
  Transform2D.prototype.skewCY = 0;
  Transform2D.prototype.skewSY = 1;

  // Methods
  Transform2D.prototype.Set = function ( _matrix ) {

    _matrix.Decompose( this );
    this.UpdateSkew();
  
  };

  Transform2D.prototype.UpdateLocal = function () {

    var localTransform = this.localTransform, position = this.position, scale = this.scale, pivot = this.pivot;

    localTransform.a = this.skewCX * scale.x;
    localTransform.b = this.skewSX * scale.x;
    localTransform.c = this.skewCY * scale.y;
    localTransform.d = this.skewSY * scale.y;

    localTransform.e = position.x - pivot.x * localTransform.a + pivot.y * localTransform.c;
    localTransform.f = position.y - pivot.y * localTransform.b + pivot.y * localTransform.d;
  
  };

  Transform2D.prototype.UpdateWorld = function ( _parentWorldTransform ) {

    var localTransform = this.localTransform, worldTransform = this.worldTransform, position = this.position, scale = this.scale, pivot = this.pivot;

    localTransform.a = this.skewCX * scale.x;
    localTransform.b = this.skewSX * scale.x;
    localTransform.c = this.skewCY * scale.y;
    localTransform.d = this.skewSY * scale.y;

    localTransform.e = position.x - pivot.x * localTransform.a + pivot.y * localTransform.c;
    localTransform.f = position.y - pivot.y * localTransform.b + pivot.y * localTransform.d;

    worldTransform.a = localTransform.a * _parentWorldTransform.a + localTransform.b * _parentWorldTransform.c;
    worldTransform.b = localTransform.a * _parentWorldTransform.b + localTransform.b * _parentWorldTransform.d;
    worldTransform.c = localTransform.c * _parentWorldTransform.a + localTransform.d * _parentWorldTransform.c;
    worldTransform.d = localTransform.c * _parentWorldTransform.b + localTransform.d * _parentWorldTransform.d;

    worldTransform.e = localTransform.e * _parentWorldTransform.a + localTransform.f * _parentWorldTransform.c + _parentWorldTransform.e;
    worldTransform.f = localTransform.e * _parentWorldTransform.b + localTransform.f * _parentWorldTransform.d + _parentWorldTransform.f;
  
  };

  Transform2D.prototype.UpdateSkew = function () {

    var skew = this.skew, rotation = this.rotation;
    this.skewCX = Math.cos( rotation + skew.y );
    this.skewSX = Math.sin( rotation + skew.y );
    this.skewCY = -Math.sin( rotation - skew.x );
    this.skewSY = Math.cos( rotation - skew.x );
  
  };

  Transform2D.prototype.ApplyWorld = function ( _rc ) {

    this.worldTransform.ApplyToContext( _rc );
  
  };

  Nenkraft.Math.Transform2D = Transform2D;

};
