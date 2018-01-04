/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Plain2D;

  function Plaingraphic2D ( _x, _y, _path ) {

    if ( !( this instanceof Plaingraphic2D ) ) return new Plaingraphic2D( _x, _y, _path );
    Super.call( this, _x, _y );

    if ( _path !== undefined ) {

      if ( _path.w !== undefined && _path.h !== undefined ) {

        this.w = _path.w;
        this.h = _path.h;
      
      }
      else if ( _path.GetLength !== undefined ) this.w = this.h = _path.GetLength();
      else if ( _path.diameter !== undefined ) this.w = this.h = _path.diameter;
      else if ( _path.aabb !== undefined ) {

        this.w = _path.aabb.w;
        this.h = _path.aabb.h;
      
      }

      this.path = _path;
    
    }
  
  }

  Plaingraphic2D.prototype = Object.create( Super.prototype );
  Plaingraphic2D.prototype.constructor = Plaingraphic2D;
  // Static

  // Members
  Plaingraphic2D.prototype.path = null;
  Plaingraphic2D.prototype.interactive = true;

  // Methods
  Plaingraphic2D.prototype.Draw = function ( _rc ) {

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      this.transform.ApplyWorld( _rc );
      var path = this.path;

      if ( path && path.Draw && this.display === true ) {

        path.Draw( _rc );
      
      }
    
    }
  
  };

  Plaingraphic2D.prototype.IntersectsPoint = function ( _v ) {

    if ( this.interactive === false ) return false;
    var cv = _v.SubtractVC( this.position );
    cv.DivideV( this.scale );
    return this.path.IntersectsPoint( cv );
  
  };

  Nenkraft.Entity.Plaingraphic2D = Plaingraphic2D;
  Nenkraft.Plaingraphic2D = Plaingraphic2D;

};
