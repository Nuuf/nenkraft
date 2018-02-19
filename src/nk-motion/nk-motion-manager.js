/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function MotionManager ( _target ) {

    if ( !( this instanceof MotionManager ) ) return new MotionManager( _target );
    this.motions = [];
    this.target = _target;
  
  }

  MotionManager.prototype = Object.create( null );
  MotionManager.prototype.constructor = MotionManager;
  // Static

  // Members
  MotionManager.prototype.target = null;
  MotionManager.prototype.motions = null;

  // Methods
  MotionManager.prototype.Create = function ( _id, _propertyString, _value, _duration, _easing ) {

    var exists = this.GetMotion( _id );

    if ( exists === null ) {

      var motion = Nenkraft.Motion( _id, this.target, _propertyString, _value, _duration, _easing );
      this.motions.push( motion );
      return motion;
    
    }

    return null;
  
  };

  MotionManager.prototype.Add = function ( _motion ) {

    var exists = this.GetMotion( _motion.id );

    if ( exists === null ) {

      this.motions.push( _motion );
    
    }
  
  };

  MotionManager.prototype.Start = function ( _id ) {

    var motion = this.GetMotion( _id );

    if ( motion !== null ) {

      motion.Start();
    
    }

    return motion;
  
  };

  MotionManager.prototype.StartMultiple = function ( _ids ) {

    _ids = _ids.split( ' ' );

    for ( var i = 0, l = _ids.length; i < l; ++i ) {

      this.Start( _ids[ i ] );
    
    }
  
  };

  MotionManager.prototype.Stop = function ( _id ) {

    var motion = this.GetMotion( _id );

    if ( motion !== null ) {

      motion.Stop();
    
    }

    return motion;
  
  };

  MotionManager.prototype.StopMultiple = function ( _ids ) {

    _ids = _ids.split( ' ' );

    for ( var i = 0, l = _ids.length; i < l; ++i ) {

      this.Stop( _ids[ i ] );
    
    }
  
  };

  MotionManager.prototype.Reset = function ( _id ) {

    var motion = this.GetMotion( _id );

    if ( motion !== null ) {

      motion.Reset();
    
    }

    return motion;
  
  };

  MotionManager.prototype.ResetMultiple = function ( _ids ) {

    _ids = _ids.split( ' ' );

    for ( var i = 0, l = _ids.length; i < l; ++i ) {

      this.Reset( _ids[ i ] );
    
    }
  
  };

  MotionManager.prototype.Process = function () {

    for ( var i = 0, motions = this.motions, l = motions.length, motion; i < l; ++i ) {

      motion = motions[ i ];
      motion.Process();
    
    }
  
  };

  MotionManager.prototype.GetMotion = function ( _id ) {

    for ( var i = 0, motions = this.motions, l = motions.length, motion; i < l; ++i ) {

      motion = motions[ i ];
      if ( motion.id === _id ) return motion;
    
    }

    return null;
  
  };

  Nenkraft.MotionManager = MotionManager;

};
