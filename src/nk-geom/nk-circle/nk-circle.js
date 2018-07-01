/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  var RF = Nenkraft.Utils.RandomFloat;
  var RI = Nenkraft.Utils.RandomInteger;
  var DTR = Nenkraft.Math.DTR;

  function Circle ( _x, _y, _radius ) {

    if ( !( this instanceof Circle ) ) return new Circle( _x, _y, _radius );
    this.center = Nenkraft.Vector2D( _x, _y );
    this.radius = _radius === undefined ? 32 : _radius;
  
  }

  Circle.prototype = Object.create( null );
  Circle.prototype.constructor = Circle;
  // Static
  Circle.TYPE = 2;

  Circle.GenerateRandomPoints = function( _circle, _amount, _int, _outside ) {

    if ( _outside == null ) _outside = false;

    var randFunc = RF;
    var tl = Nenkraft.Vector2D( _circle.x - _circle.radius, _circle.y - _circle.radius );
    var br = Nenkraft.Vector2D( _circle.x + _circle.radius, _circle.y + _circle.radius );
    var points = [];

    if ( _int === true ) randFunc = RI;

    for ( var i = 0; i < _amount; ++i ) {
      
      var point = Nenkraft.Vector2D( randFunc( tl.x, br.x ), randFunc( tl.y, br.y ) );

      while ( _circle.IntersectsPoint( point ) === _outside ) {

        point.Set( randFunc( tl.x, br.x ), randFunc( tl.y, br.y ) );

      }

      points.push( point );

    }

    return points;

  };

  Circle.PerimeterPoints = function( _circle, _amount, _margin ) {

    _amount *= _margin;
    var points = [];

    for ( var i = 0; i < _amount; i += _margin ) {

      points.push(
        Nenkraft.Vector2D(
          _circle.x + Math.cos( DTR( i ) ) * _circle.radius,
          _circle.y + Math.sin( DTR( i ) ) * _circle.radius
        )
      );
    
    }

    return points;
  
  };

  // Members
  Circle.prototype.TYPE = Circle.TYPE;
  Circle.prototype.diameter = 0;
  Circle.prototype.w = 0;
  Circle.prototype.h = 0;
  Circle.prototype.radiusSquared = 0;
  Circle.prototype.radiusUnsquared = 0;
  Circle.prototype.area = 0;
  Circle.prototype.belongsTo = null;

  // Methods
  Circle.prototype.Set = function ( _x, _y, _radius ) {

    this.center.Set( _x, _y );
    this.radius = _radius;
  
  };

  Circle.prototype.SetC = function ( _circle ) {

    this.center.SetV( _circle );
    this.radius = _circle.radius;
  
  };

  Circle.prototype.Scale = function ( _scale ) {

    this.radius *= _scale;
  
  };

  Circle.prototype.IntersectsCircle = function ( _circle ) {

    var radii = this.radius + _circle.radius;
    return ( radii * radii >= this.center.GetDistanceSquaredV( _circle.center ) );
  
  };

  Circle.prototype.IntersectsPoint = function ( _v ) {

    return ( this.radiusSquared >= this.center.GetDistanceSquaredV( _v ) );
  
  };

  Object.defineProperty( Circle.prototype, 'x', {
    set: function ( _value ) {

      this.center.x = _value;
    
    },
    get: function () {

      return this.center.x;
    
    }
  } );
  Object.defineProperty( Circle.prototype, 'y', {
    set: function ( _value ) {

      this.center.y = _value;
    
    },
    get: function () {

      return this.center.y;
    
    }
  } );
  Object.defineProperty( Circle.prototype, 'radius', {
    set: function ( _value ) {

      this.radiusUnsquared = _value;
      this.radiusSquared = _value * _value;
      this.diameter = this.w = this.h = _value * 2;
      this.area = Math.PI * _value * _value;
    
    },
    get: function () {

      return this.radiusUnsquared;
    
    }
  } );
  Nenkraft.Geom.Circle = Circle;

};
