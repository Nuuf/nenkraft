/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Controller.GLProgramController;

  function GLPixelBatchProgramController ( _gl ) {

    if ( !( this instanceof GLPixelBatchProgramController ) ) return new GLPixelBatchProgramController( _gl );
    Super.call( this, _gl, Nenkraft.SHADER_CODE.PIXEL_BATCH );
    this.Initialise();
  
  }

  GLPixelBatchProgramController.prototype = Object.create( Super.prototype );
  GLPixelBatchProgramController.prototype.constructor = GLPixelBatchProgramController;
  // Static

  // Members
  GLPixelBatchProgramController.prototype.dataBuffer = null;
  GLPixelBatchProgramController.prototype.prevNumElements = 0;

  // Methods
  GLPixelBatchProgramController.prototype.Initialise = function () {

    var gl = this.gl;
    this.dataBuffer = gl.createBuffer();
    this.AssignAttribute( 'aProjection1' );
    this.AssignAttribute( 'aProjection2' );
    this.AssignAttribute( 'aProjection3' );
    this.AssignAttribute( 'aPosition' );
    this.AssignAttribute( 'aColor' );
    this.AssignAttribute( 'aPointSize' );
  
  };

  GLPixelBatchProgramController.prototype.Execute = function ( _data, _numElements ) {

    var gl = this.gl;
    var attributes = this.attributes;

    if ( Super.LAST_USED_CONTROLLER !== this ) {

      gl.useProgram( this.program );
    
    }

    gl.bindBuffer( gl.ARRAY_BUFFER, this.dataBuffer );

    if ( _numElements !== this.prevNumElements ) {

      gl.bufferData( gl.ARRAY_BUFFER, _data, gl.DYNAMIC_DRAW );
    
    } else {

      gl.bufferSubData( gl.ARRAY_BUFFER, 0, _data );
    
    }

    gl.enableVertexAttribArray( attributes.aProjection1 );
    gl.vertexAttribPointer( attributes.aProjection1, 3, gl.FLOAT, false, 64, 0 );
    gl.enableVertexAttribArray( attributes.aProjection2 );
    gl.vertexAttribPointer( attributes.aProjection2, 3, gl.FLOAT, false, 64, 12 );
    gl.enableVertexAttribArray( attributes.aProjection3 );
    gl.vertexAttribPointer( attributes.aProjection3, 3, gl.FLOAT, false, 64, 24 );
    gl.enableVertexAttribArray( attributes.aPosition );
    gl.vertexAttribPointer( attributes.aPosition, 2, gl.FLOAT, false, 64, 36 );
    gl.enableVertexAttribArray( attributes.aColor );
    gl.vertexAttribPointer( attributes.aColor, 4, gl.FLOAT, false, 64, 44 );
    gl.enableVertexAttribArray( attributes.aPointSize );
    gl.vertexAttribPointer( attributes.aPointSize, 1, gl.FLOAT, false, 64, 60 );
    gl.drawArrays( gl.POINTS, 0, _numElements );
    this.prevNumElements = _numElements;
    Super.LAST_USED_CONTROLLER = this;
  
  };

  Nenkraft.Controller.GLPixelBatchProgramController = GLPixelBatchProgramController;
  Nenkraft.GLPixelBatchProgramController = GLPixelBatchProgramController;

};
