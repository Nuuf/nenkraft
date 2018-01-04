/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Controller.GLProgramController;

  function GLLine2DProgramController ( _gl ) {

    if ( !( this instanceof GLLine2DProgramController ) ) return new GLLine2DProgramController( _gl );
    Super.call( this, _gl, Nenkraft.SHADER_CODE.LINE2D );
    this.Initialise();
  
  }

  GLLine2DProgramController.prototype = Object.create( Super.prototype );
  GLLine2DProgramController.prototype.constructor = GLLine2DProgramController;
  // Static

  // Members
  GLLine2DProgramController.prototype.essenceBuffer = null;
  GLLine2DProgramController.prototype.vertices = null;
  GLLine2DProgramController.prototype.color = null;

  // Methods
  GLLine2DProgramController.prototype.Initialise = function () {

    var gl = this.gl;
    this.essenceBuffer = gl.createBuffer();
    this.vertices = new Float32Array( [ -1, 0, 1, 0 ] );
    this.color = new Nenkraft.Color();
    gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );
    this.AssignAttribute( 'aPosition' );
    this.AssignUniform( 'uProjection' );
    this.AssignUniform( 'uColor' );
  
  };

  GLLine2DProgramController.prototype.Execute = function ( _projection, _s, _e ) {

    var gl = this.gl;
    var attributes = this.attributes;
    var uniforms = this.uniforms;
    var vertices = this.vertices;
    var channel = this.color.channel;
    vertices[ 0 ] = _s.x;
    vertices[ 1 ] = _s.y;
    vertices[ 2 ] = _e.x;
    vertices[ 3 ] = _e.y;

    if ( this !== Super.LAST_USED_CONTROLLER ) {

      gl.useProgram( this.program );
      Super.LAST_USED_CONTROLLER = this;
    
    }

    gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
    gl.bufferSubData( gl.ARRAY_BUFFER, 0, vertices );
    gl.enableVertexAttribArray( attributes.aPosition );
    gl.vertexAttribPointer( attributes.aPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.uniformMatrix3fv( uniforms.uProjection, false, _projection );
    gl.uniform4f( uniforms.uColor, channel[ 0 ], channel[ 1 ], channel[ 2 ], channel[ 3 ] );
    gl.drawArrays( gl.LINES, 0, 2 );
  
  };

  Nenkraft.Controller.GLLine2DProgramController = GLLine2DProgramController;
  Nenkraft.GLLine2DProgramController = GLLine2DProgramController;

};
