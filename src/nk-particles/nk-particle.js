/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var MinMaxOrValue = Nenkraft.Utils.MinMaxOrValue;

  function Particle ( _options ) {

    if ( !( this instanceof Particle ) ) return new Particle( _options );
    this.velocity = Nenkraft.Vector2D();
    this.torque = 0;
    this.spin = 0;
    this.grow = Nenkraft.Vector2D( 1, 1 );
    this.acceleration = Nenkraft.Vector2D( 1, 1 );
    this.gravity = Nenkraft.Vector2D();
    this.Renew( _options );
  
  }

  Particle.prototype = Object.create( null );
  Particle.prototype.constructor = Particle;
  // Static
  Particle.Pool = Nenkraft.Utils.Pool( Particle );

  Particle.Pool.Retrieve = function( _options ) {

    if ( this.objects.length === 0 ) {

      this.Flood();
    
    }

    var p = this.objects.pop();
    p.Renew( _options );
    return p;
  
  };

  Particle.USE_POOL = true;

  // Members
  Particle.prototype.velocity = null;
  Particle.prototype.torque = null;
  Particle.prototype.spin = null;
  Particle.prototype.grow = null;
  Particle.prototype.acceleration = null;
  Particle.prototype.fade = false;
  Particle.prototype.deflate = false;
  Particle.prototype.gravity = null;
  Particle.prototype.lifespan = 0;
  Particle.prototype.lifespanTot = 0;
  Particle.prototype.dead = false;
  Particle.prototype.entity = null;
  Particle.prototype.system = null;

  // Methods
  Particle.prototype.Process = function () {

    if ( this.dead === true ) return;

    if ( this.lifespan-- > 0 ) {

      var entity = this.entity, velocity = this.velocity;
      var lifespanPerc = this.lifespan / this.lifespanTot;

      velocity.AddV( this.gravity );
      velocity.MultiplyV( this.acceleration );
      velocity.Rotate( this.torque );
  
      entity.position.AddV( velocity );

      if ( this.fade === true ) {

        entity.alpha = lifespanPerc;

      }

      if ( this.deflate === true ) {

        entity.scale.Set( lifespanPerc );
      
      } else {

        entity.scale.MultiplyV( this.grow );
      
      }

      entity.rotation += this.spin;
    
    } else {

      this.dead = true;
      this.entity.display = false;
    
    }
  
  };

  Particle.prototype.Renew = function( _options ) {

    this.dead = false;
    var entity = this.entity;

    if ( _options == null ) return;

    if ( _options.path != null ) {

      if ( entity === null ) {

        entity = this.entity = Nenkraft.Graphic2D( 0, 0, _options.path );
      
      } else {

        this.ResetEntity();
      
      }

    } else if ( _options.texture ) {

      if ( entity === null ) {
      
        entity = this.entity = Nenkraft.Sprite( 0, 0, _options.texture );
        
        if ( _options.anchor != null ) {

          entity.anchor.Set( _options.anchor );
          entity.UpdateTextureTransform();
        
        }

      } else {

        this.ResetEntity();
    
      }

    } else {

      throw new Error( 'Path or Texture needed!' );
    
    }

    if ( _options.position != null ) {

      entity.position.Set(
        MinMaxOrValue( _options.position.x ), 
        MinMaxOrValue( _options.position.y )
      );
    
    }

    if ( _options.rotation != null ) {

      entity.rotation = MinMaxOrValue( _options.rotation );
    
    }

    if ( _options.lifespan != null ) {

      this.SetLifespan( _options.lifespan );
    
    }

    if ( _options.velocity != null ) {

      this.velocity.Set( 
        MinMaxOrValue( _options.velocity.x ), 
        MinMaxOrValue( _options.velocity.y )
      );

    }

    if ( _options.acceleration != null ) {

      this.acceleration.Set( 
        MinMaxOrValue( _options.acceleration.x ), 
        MinMaxOrValue( _options.acceleration.y )
      );
    
    }

    if ( _options.grow != null ) {

      this.grow.Set(
        MinMaxOrValue( _options.grow.x ), 
        MinMaxOrValue( _options.grow.y )
      );
    
    }

    if ( _options.torque != null ) {

      this.torque = MinMaxOrValue( _options.torque );
    
    }

    if ( _options.spin != null ) {

      this.spin = MinMaxOrValue( _options.spin );
    
    }

    if ( _options.fade != null ) {

      this.fade = _options.fade;
    
    }

    if ( _options.deflate != null ) {

      this.deflate = _options.deflate;
    
    }

  };

  Particle.prototype.SetLifespan = function( _value ) {

    this.lifespan = this.lifespanTot = _value;
  
  };

  Particle.prototype.ResetEntity = function() {

    var entity = this.entity;
    entity.scale.Set( 1, 1 );
    entity.alpha = 1;
    entity.display = true;
    entity.rotation = 0;

  };

  Particle.prototype.Destroy = function( _ifDead ) {

    if ( _ifDead === true ) {

      if ( this.dead === false ) return false;
    
    }

    if ( this.system !== null ) {

      this.system.RemoveParticle( this );

    }

    if ( Particle.USE_POOL ) {

      Particle.Pool.Store( this );
    
    }

    return true;

  };

  Particle.Pool.Flood( function () {}, 1000 );

  Nenkraft.Particle = Particle;

};
