/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Controller ( _sprite ) {

    if ( !( this instanceof Controller ) ) return new Controller( _sprite );
    this.animations = [];
    if ( _sprite != null ) this.sprite = _sprite;
  
  }

  Controller.prototype = Object.create( null );
  Controller.prototype.constructor = Controller;
  // Static

  // Members
  Controller.prototype.currentAnimation = null;
  Controller.prototype.sprite = null;

  // Methods
  Controller.prototype.CreateAnimation = function ( _id, _rate ) {

    var animation = Nenkraft.Animator.Animation( this, _id, _rate );
    this.animations.push( animation );
    return animation;
  
  };

  Controller.prototype.AddAnimation = function( _animation ) {

    _animation.controller = this;
    this.animations.push( _animation );
  
  };

  Controller.prototype.GetAnimationById = function ( _id ) {

    for ( var i = 0, animations = this.animations, l = animations.length, animation; i < l; ++i ) {

      animation = animations[ i ];
      if ( animation && animation.id === _id ) return animation;
    
    }

    return null;
  
  };

  Controller.prototype.PlayAnimation = function ( _id, _frameIndex ) {

    var animation = this.GetAnimationById( _id );

    if ( animation !== null ) {

      this.currentAnimation = animation;
      animation.Restart( _frameIndex );
    
    }
  
  };

  Controller.prototype.StopCurrentAnimation = function () {

    if ( this.currentAnimation !== null ) {

      this.currentAnimation.Stop();
    
    }
  
  };

  Controller.prototype.Process = function () {

    var currentAnimation = this.currentAnimation;
    if ( currentAnimation !== null ) currentAnimation.Process();
  
  };

  Nenkraft.Animator.Controller = Controller;

};
