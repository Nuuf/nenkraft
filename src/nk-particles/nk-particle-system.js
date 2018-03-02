/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Container2D;
  var Particle = Nenkraft.Particle;

  function ParticleSystem ( _x, _y ) {

    if ( !( this instanceof ParticleSystem ) ) return new ParticleSystem( _x, _y );
    Super.call( this, _x, _y );
    this.particles = [];
    this.deletionTimer = Nenkraft.Timer( 60 );
    this.deletionTimer.onFinish.Add( this.HandleParticleDeletion, this );
    this.deletionTimer.Start();
  
  }

  ParticleSystem.prototype = Object.create( Super.prototype );
  ParticleSystem.prototype.constructor = ParticleSystem;
  // Static

  // Members
  ParticleSystem.prototype.particles = null;
  ParticleSystem.prototype.deletionTimer = null;

  // Methods
  ParticleSystem.prototype.Process = function () {
  
    this.HandleParticles();
    this.deletionTimer.Process();

  };

  ParticleSystem.prototype.HandleParticles = function() {

    for ( var i = 0, particles = this.particles, l = particles.length; i < l; ++i ) {

      particles[ i ].Process();
    
    }
  
  };

  ParticleSystem.prototype.HandleParticleDeletion = function() {

    for ( var i = 0, particles = this.particles, l = particles.length, particle; i < l; ++i ) {

      particle = particles[ i ];

      if ( particle ) {

        if ( particle.Destroy( true ) ) {

          i--;
        
        }
      
      }
    
    }

    this.deletionTimer.Start();

  };

  ParticleSystem.prototype.AddParticle = function( _particle ) {

    _particle.system = this;
    this.AddChild( _particle.entity );
    this.particles.push( _particle );
    return _particle;

  };

  ParticleSystem.prototype.RemoveParticle = function( _particle ) {

    var particles = this.particles;
    var ix = particles.indexOf( _particle );

    if ( ix !== -1 ) {
      
      _particle.system = null;
      this.RemoveChild( _particle.entity );
      return particles.fickleSplice( ix );

    }

  };

  ParticleSystem.prototype.Emit = function( _options ) {

    for ( var i = 0; i < _options.amount; ++i ) {

      if ( Particle.USE_POOL === true ) {

        this.AddParticle( Particle.Pool.Retrieve( _options ) );
      
      } else {

        this.AddParticle( Particle( _options ) );

      }

    }
  
  };

  Nenkraft.ParticleSystem = ParticleSystem;

};
