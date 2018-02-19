/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Basetransform2D ( _x, _y ) {

    if ( !( this instanceof Basetransform2D ) ) return new Basetransform2D( _x, _y );
    this.position = Nenkraft.Vector2D( _x, _y );
    this.scale = Nenkraft.Vector2D( 1, 1 );
    this.localTransform = Nenkraft.Vector2D( 0, 0 );
    this.worldTransform = Nenkraft.Vector2D( 0, 0 );
  
  }

  Basetransform2D.prototype = Object.create( null );
  Basetransform2D.prototype.constructor = Basetransform2D;
  // Static

  // Members

  // Methods
  Basetransform2D.prototype.UpdateLocal = function () {

    this.localTransform.SetV( this.position );
  
  };

  Basetransform2D.prototype.UpdateWorld = function ( _parentWorldTransform ) {

    var localTransform = this.localTransform;
    localTransform.SetV( this.position );
    this.worldTransform.Set( _parentWorldTransform.e + localTransform.x, _parentWorldTransform.f + localTransform.y );
  
  };

  Basetransform2D.prototype.ApplyWorld = function ( _rc ) {

    _rc.setTransform( this.scale.x, 0, 0, this.scale.y, this.worldTransform.x, this.worldTransform.y );
  
  };

  Nenkraft.Math.Basetransform2D = Basetransform2D;

};
