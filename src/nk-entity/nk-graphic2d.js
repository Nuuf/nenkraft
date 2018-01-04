/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Container2D;

  function Graphic2D ( _x, _y, _path ) {

    if ( !( this instanceof Graphic2D ) ) return new Graphic2D( _x, _y, _path );
    Super.call( this, _x, _y );
    this.anchor = new Nenkraft.Vector2D();
    this.SetPath( _path );
  
  }

  Graphic2D.prototype = Object.create( Super.prototype );
  Graphic2D.prototype.constructor = Graphic2D;
  // Static

  // Members
  Graphic2D.prototype.path = null;
  Graphic2D.prototype.anchor = null;
  Graphic2D.prototype.alpha = 1.0;
  Graphic2D.prototype.gco = Nenkraft.Style.GCO.DEFAULT;
  Graphic2D.prototype.interactive = true;

  // Methods
  Graphic2D.prototype.Draw = function ( _rc ) {

    this.PreDraw( _rc );

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      this.transform.ApplyWorld( _rc );
      var path = this.path;

      if ( path && path.Draw && this.display === true ) {

        _rc.globalAlpha = this.alpha;
        _rc.globalCompositeOperation = this.gco;
        path.Draw( _rc );
      
      }

      if ( this.children.length > 0 ) {

        this.DrawChildren( _rc );
      
      }
    
    }
  
  };

  Graphic2D.prototype.GLDraw = function ( _gl ) {

    this.GLPreDraw( _gl );

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      var path = this.path;

      if ( path && path.GLDraw && this.display === true ) {

        path.GLDraw( _gl, this.transform );
      
      }

      if ( this.children.length > 0 && this.display === true ) {

        if ( this.isBatchParent === true ) {

          this.GLBatchDrawChildren( _gl );
        
        } else {

          this.GLDrawChildren( _gl );
        
        }
      
      }
    
    }
  
  };

  Graphic2D.prototype.GetBufferData = function () {

    this.UpdateTransform();
    var transformData = this.transform.worldTransform.AsArray( true );

    if ( this.bufferData == null ) {

      this.bufferData = [];
    
    }

    var bufferData = this.bufferData;
    bufferData.length = 0;
    bufferData[ 0 ] = transformData[ 0 ];
    bufferData[ 1 ] = transformData[ 1 ];
    bufferData[ 2 ] = transformData[ 2 ];
    bufferData[ 3 ] = transformData[ 3 ];
    bufferData[ 4 ] = transformData[ 4 ];
    bufferData[ 5 ] = transformData[ 5 ];
    bufferData[ 6 ] = transformData[ 6 ];
    bufferData[ 7 ] = transformData[ 7 ];
    bufferData[ 8 ] = transformData[ 8 ];

    if ( this.path && this.path.GetBufferData ) {

      bufferData.push.apply( bufferData, this.path.GetBufferData() );
    
    }

    return bufferData;
  
  };

  Graphic2D.prototype.UpdateInBuffer = function () {

    this.UpdateTransform();
    var transformData = this.transform.worldTransform.AsArray( true );
    var buffer = this.parent.childDataBuffer;
    var index = this.bufferStartIndex;
    buffer[ index ] = transformData[ 0 ];
    buffer[ index + 1 ] = transformData[ 1 ];
    buffer[ index + 2 ] = transformData[ 2 ];
    buffer[ index + 3 ] = transformData[ 3 ];
    buffer[ index + 4 ] = transformData[ 4 ];
    buffer[ index + 5 ] = transformData[ 5 ];
    buffer[ index + 6 ] = transformData[ 6 ];
    buffer[ index + 7 ] = transformData[ 7 ];
    buffer[ index + 8 ] = transformData[ 8 ];

    if ( this.path && this.path.UpdateInBuffer ) {

      this.path.UpdateInBuffer( buffer, index + 9 );
    
    }
  
  };

  Graphic2D.prototype.IntersectsPoint = function ( _v ) {

    if ( this.interactive === false ) return false;
    var cv = _v.SubtractVC( this.position );
    return this.path.IntersectsPoint( cv );
  
  };

  Graphic2D.prototype.SetPath = function ( _path ) {

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
  
  };

  Nenkraft.Entity.Graphic2D = Graphic2D;
  Nenkraft.Graphic2D = Graphic2D;

};
