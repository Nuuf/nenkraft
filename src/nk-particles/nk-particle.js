/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var MinMaxOrValue = Nenkraft.Utils.MinMaxOrValue;
  var RandomInArray = Nenkraft.Utils.RandomInArray;
  var Oscillate = Nenkraft.Math.Oscillate;
  var RI = Nenkraft.Utils.RandomInteger;

  /** Oscillation */
  function Oscillation() {

    if ( !( this instanceof Oscillation ) ) return new Oscillation();
  
  }

  Oscillation.prototype = Object.create( null );
  Oscillation.prototype.constructor = Oscillation;

  // Static

  // Members
  Oscillation.prototype.velocityX = null;
  Oscillation.prototype.velocityY = null;
  Oscillation.prototype.torque = null;
  Oscillation.prototype.accelerationX = null;
  Oscillation.prototype.accelerationY = null;
  Oscillation.prototype.spin = null;
  Oscillation.prototype.growthX = null;
  Oscillation.prototype.growthY = null;
  Oscillation.prototype.gravityX = null;
  Oscillation.prototype.gravityY = null;

  // Methods
  Oscillation.prototype.CreateOscillatingObject = function( _key, _from, _to, _amplitude ) {

    if ( this[_key] !== null ) throw new Error( 'Invalid key' );

    this[_key] = {
      from: _from,
      to: _to,
      amplitude: _amplitude
    };
  
  };

  Oscillation.prototype.SetOscillatingObject = function( _key, _from, _to, _amplitude ) {

    var obj = this[_key];

    if ( obj == null ) {

      return this.CreateOscillatingObject( _key, _from, _to, _amplitude );
    
    }

    obj.from = _from;
    obj.to = _to;
    obj.amplitude = _amplitude;
  
  };

  /** Oscillation */

  function Particle ( _options ) {

    if ( !( this instanceof Particle ) ) return new Particle( _options );
    this.velocity = Nenkraft.Vector2D();
    this.torque = 0;
    this.spin = 0;
    this.growth = Nenkraft.Vector2D( 1, 1 );
    this.acceleration = Nenkraft.Vector2D( 1, 1 );
    this.gravity = Nenkraft.Vector2D();
    this.initialScale = Nenkraft.Vector2D( 1, 1 );
    this.Renew( _options );
  
  }

  Particle.prototype = Object.create( null );
  Particle.prototype.constructor = Particle;
  // Static
  Particle.Pool = Nenkraft.Utils.Pool( Particle );
  Particle.Oscillation = Oscillation;

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
  Particle.prototype.growth = null;
  Particle.prototype.acceleration = null;
  Particle.prototype.initialScale = null;
  Particle.prototype.fade = false;
  Particle.prototype.deflate = false;
  Particle.prototype.gravity = null;
  Particle.prototype.lifespan = 0;
  Particle.prototype.lifespanTot = 0;
  Particle.prototype.dead = false;
  Particle.prototype.entity = null;
  Particle.prototype.system = null;
  Particle.prototype.oscillation = null;
  Particle.prototype.oscillationOffset = 0;

  // Methods
  Particle.prototype.Process = function () {

    if ( this.dead === true ) return;

    if ( this.lifespan++ < this.lifespanTot ) {

      var entity = this.entity, velocity = this.velocity;
      var lifespanPerc = 1 - this.lifespan / this.lifespanTot;
      var osc = this.oscillation;

      velocity.AddV( this.gravity );
      velocity.MultiplyV( this.acceleration );

      if ( this.torque !== 0 ) velocity.Rotate( this.torque );
  
      entity.position.AddV( velocity );

      if ( this.fade === true ) {

        entity.alpha = lifespanPerc;

      }

      if ( this.deflate === true ) {

        entity.scale.Set( 
          lifespanPerc * this.initialScale.x,
          lifespanPerc * this.initialScale.y
        );
      
      } else {

        entity.scale.MultiplyV( this.growth );
      
      }

      entity.rotation += this.spin;

      if ( osc !== null ) {

        var oscTime = this.lifespan + this.oscillationOffset;

        if ( osc.torque != null ) {

          this.torque = Oscillate(
            oscTime, 
            osc.torque.from,
            osc.torque.to,
            osc.torque.amplitude
          );
        
        }

        if ( osc.spin != null ) {

          this.spin = Oscillate(
            oscTime, 
            osc.spin.from,
            osc.spin.to,
            osc.spin.amplitude
          );
        
        }

        if ( osc.velocityX != null ) {

          this.velocity.x = Oscillate(
            oscTime, 
            osc.velocityX.from,
            osc.velocityX.to,
            osc.velocityX.amplitude
          );
        
        }

        if ( osc.velocityY != null ) {

          this.velocity.y = Oscillate(
            oscTime, 
            osc.velocityY.from,
            osc.velocityY.to,
            osc.velocityY.amplitude
          );
        
        }

        if ( osc.gravityX != null ) {

          this.gravity.x = Oscillate(
            oscTime, 
            osc.gravityX.from,
            osc.gravityX.to,
            osc.gravityX.amplitude
          );
        
        }

        if ( osc.gravityY != null ) {

          this.gravity.y = Oscillate(
            oscTime, 
            osc.gravityY.from,
            osc.gravityY.to,
            osc.gravityY.amplitude
          );
        
        }

        if ( osc.accelerationX != null ) {

          this.acceleration.x = Oscillate(
            oscTime, 
            osc.accelerationX.from,
            osc.accelerationX.to,
            osc.accelerationX.amplitude
          );
        
        }

        if ( osc.accelerationY != null ) {

          this.acceleration.y = Oscillate(
            oscTime, 
            osc.accelerationY.from,
            osc.accelerationY.to,
            osc.accelerationY.amplitude
          );
        
        }

        if ( osc.growthX != null ) {

          this.growth.x = Oscillate(
            oscTime, 
            osc.growthX.from,
            osc.growthX.to,
            osc.growthX.amplitude
          );
        
        }

        if ( osc.growthY != null ) {

          this.growth.y = Oscillate(
            oscTime, 
            osc.growthY.from,
            osc.growthY.to,
            osc.growthY.amplitude
          );
        
        }
      
      }
    
    } else {

      this.dead = true;
      this.entity.display = false;
    
    }
  
  };

  Particle.prototype.Renew = function( _options ) {

    if ( _options == null ) return;

    this.dead = false;
    var entity = this.entity;

    if ( _options.path != null ) {

      if ( entity === null ) {

        entity = this.entity = Nenkraft.Graphic2D( 0, 0, _options.path );
      
      } else {

        this.ResetEntity();
      
      }

    } else if ( _options.texture != null ) {

      if ( entity === null ) {
      
        entity = this.entity = Nenkraft.Sprite( 0, 0, _options.texture );
        
        if ( _options.anchor != null ) {

          entity.anchor.Set( _options.anchor );
          entity.UpdateTextureTransform();
        
        }

      } else {

        this.ResetEntity();
    
      }

      if ( _options.frames != null ) {

        _options.frames[RI( 0, _options.frames.length - 1 )].Apply( entity );
        entity.scale.Set( 1 );
        entity.UpdateTextureTransform();
      
      }

    } else {

      throw new Error( 'Path or Texture needed!' );
    
    }

    this.RenewVector( _options.position, entity.position );

    this.RenewVector( _options.velocity, this.velocity );

    this.RenewVector( _options.gravity, this.gravity );

    this.RenewVector( _options.acceleration, this.acceleration );

    this.RenewVector( _options.growth, this.growth );

    this.RenewVector( _options.scale, entity.scale );

    this.RenewVector( _options.scale, this.initialScale );

    if ( _options.rotation != null ) {

      entity.rotation = MinMaxOrValue( _options.rotation );
    
    }

    if ( _options.lifespan != null ) {

      this.SetLifespan( _options.lifespan );
    
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

    if ( _options.oscillation != null ) {

      var optOsc = _options.oscillation;
      var osc = this.oscillation;

      if ( osc === null ) {

        osc = this.oscillation = Oscillation();
      
      }

      if ( optOsc.offset != null ) {
        
        this.oscillationOffset = MinMaxOrValue( optOsc.offset );

      }

      if ( optOsc.torque != null ) {

        osc.SetOscillatingObject( 
          'torque', 
          optOsc.torque.from,
          optOsc.torque.to,
          optOsc.torque.amplitude
        );
        
      }

      if ( optOsc.spin != null ) {

        osc.SetOscillatingObject( 
          'spin', 
          optOsc.spin.from,
          optOsc.spin.to,
          optOsc.spin.amplitude
        );
        
      }

      if ( optOsc.velocity != null ) {

        if ( optOsc.velocity.x != null ) {

          osc.SetOscillatingObject( 
            'velocityX', 
            optOsc.velocity.x.from,
            optOsc.velocity.x.to,
            optOsc.velocity.x.amplitude
          );

        }

        if ( optOsc.velocity.y != null ) {

          osc.SetOscillatingObject( 
            'velocityY', 
            optOsc.velocity.y.from,
            optOsc.velocity.y.to,
            optOsc.velocity.y.amplitude
          );

        }
      
      }

      if ( optOsc.gravity != null ) {

        if ( optOsc.gravity.x != null ) {

          osc.SetOscillatingObject( 
            'gravityX', 
            optOsc.gravity.x.from,
            optOsc.gravity.x.to,
            optOsc.gravity.x.amplitude
          );

        }

        if ( optOsc.gravity.y != null ) {

          osc.SetOscillatingObject( 
            'gravityY', 
            optOsc.gravity.y.from,
            optOsc.gravity.y.to,
            optOsc.gravity.y.amplitude
          );

        }
      
      }

      if ( optOsc.acceleration != null ) {

        if ( optOsc.acceleration.x != null ) {

          osc.SetOscillatingObject( 
            'accelerationX', 
            optOsc.acceleration.x.from,
            optOsc.acceleration.x.to,
            optOsc.acceleration.x.amplitude
          );

        }

        if ( optOsc.acceleration.y != null ) {

          osc.SetOscillatingObject( 
            'accelerationY', 
            optOsc.acceleration.y.from,
            optOsc.acceleration.y.to,
            optOsc.acceleration.y.amplitude
          );

        }
      
      }

      if ( optOsc.growth != null ) {

        if ( optOsc.growth.x != null ) {

          osc.SetOscillatingObject( 
            'growthX', 
            optOsc.growth.x.from,
            optOsc.growth.x.to,
            optOsc.growth.x.amplitude
          );

        }

        if ( optOsc.growth.y != null ) {

          osc.SetOscillatingObject( 
            'growthY', 
            optOsc.growth.y.from,
            optOsc.growth.y.to,
            optOsc.growth.y.amplitude
          );

        }
      
      }

    }

  };

  Particle.prototype.RenewVector = function( _object, _vector ) {

    if ( _object != null ) {

      if ( _object.points != null ) {

        _vector.SetV( RandomInArray( _object.points ) );
        
      } else if ( _object.xy != null ) {

        _vector.x = _vector.y = MinMaxOrValue( _object.xy );

      } else {

        if ( _object.x != null ) {

          _vector.x = MinMaxOrValue( _object.x );
          
        }
    
        if ( _object.y != null ) {
    
          _vector.y = MinMaxOrValue( _object.y );
          
        }
      
      }
    
    }
  
  };

  Particle.prototype.SetLifespan = function( _value ) {

    this.lifespan = 0;
    this.lifespanTot = _value;
  
  };

  Particle.prototype.ResetEntity = function() {

    var entity = this.entity;
    entity.scale.Set( 1 );
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
