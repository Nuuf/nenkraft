/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Container2D;

  function Camera2D ( _focus, _target ) {

    if ( !( this instanceof Camera2D ) ) return new Camera2D( _focus, _target );
    Super.call( this );

    this.focus = _focus;

    if ( _target != null ) {

      this.target = _target;
    
    }

    this.velocity = Nenkraft.Vector2D();
  
  }

  Camera2D.prototype = Object.create( Super.prototype );
  Camera2D.prototype.constructor = Camera2D;
  /*
   *Static
   *Members
   */
  Camera2D.prototype.focus = null;
  Camera2D.prototype.target = null;
  Camera2D.prototype.velocity = null;
  Camera2D.prototype.stopRadiusSq = 1000;
  Camera2D.prototype.EPSILON = 0.0002;

  // Methods
  Camera2D.prototype.Process = function() {

    var target = this.target;

    if ( target !== null ) {

      var targetPosition = target.position.Copy();
      targetPosition.Invert();
      targetPosition.AddV( this.focus );

      var delta = this.position.SubtractVC( targetPosition );

      var distance = delta.GetLengthSquared();

      if ( distance < this.stopRadiusSq ) {

        return;
      
      }

      distance *= this.EPSILON;

      var theta = delta.GetAngle();

      this.velocity.Set( 
        distance * Math.cos( theta ),
        distance * Math.sin( theta )
      );

      this.position.SubtractV( this.velocity );
    
    }
  
  };

  Camera2D.prototype.SetTarget = function( _target ) {

    this.target = _target;
  
  };

  Nenkraft.Entity.Camera2D = Camera2D;
  Nenkraft.Camera2D = Camera2D;

};
