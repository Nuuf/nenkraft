/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  var Super = Nenkraft.Controller.GLProgramController;
  var TriRectArray = Nenkraft.Math.TriRectArray;
  function GLCircleProgramController ( _gl ) {
    if ( !( this instanceof GLCircleProgramController ) ) return new GLCircleProgramController( _gl );
    Super.call( this, _gl, Nenkraft.SHADER_CODE.CIRCLE );
    this.Initialise();
  }
  GLCircleProgramController.prototype = Object.create( Super.prototype );
  GLCircleProgramController.prototype.constructor = GLCircleProgramController;
  //Static

  //Members
  GLCircleProgramController.prototype.essenceBuffer = null;
  GLCircleProgramController.prototype.vertices = null;
  GLCircleProgramController.prototype.fillColor = null;
  GLCircleProgramController.prototype.outlineColor = null;
  GLCircleProgramController.prototype.outline = 5.0;
  //Methods
  GLCircleProgramController.prototype.Initialise = function () {
    var gl = this.gl;
    this.essenceBuffer = gl.createBuffer();
    this.vertices = new Float32Array( Nenkraft.Math.TriRectArray( 0, 0, 1, 1 ) );
    this.fillColor = new Nenkraft.Color();
    this.outlineColor = new Nenkraft.Color();
    gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );
    this.AssignAttribute( 'aPosition' );
    this.AssignUniform( 'uProjection' );
    this.AssignUniform( 'uFillColor' );
    this.AssignUniform( 'uOutlineColor' );
    this.AssignUniform( 'uRadius' );
    this.AssignUniform( 'uOutline' );
  };
  GLCircleProgramController.prototype.Execute = function ( _projection, _x, _y, _radius ) {
    var gl = this.gl;
    var attributes = this.attributes;
    var uniforms = this.uniforms;
    var vertices = this.vertices;
    var fillChannel = this.fillColor.channel;
    var outlineChannel = this.outlineColor.channel;
    TriRectArray( _x - _radius, _y - _radius, _radius * 2, _radius * 2, vertices );
    if ( this !== Super.LAST_USED_CONTROLLER ) {
      gl.useProgram( this.program );
      Super.LAST_USED_CONTROLLER = this;
    }
    gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
    gl.bufferSubData( gl.ARRAY_BUFFER, 0, vertices );
    gl.enableVertexAttribArray( attributes.aPosition );
    gl.vertexAttribPointer( attributes.aPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.uniformMatrix3fv( uniforms.uProjection, false, _projection );
    gl.uniform4f( uniforms.uFillColor, fillChannel[ 0 ], fillChannel[ 1 ], fillChannel[ 2 ], fillChannel[ 3 ] );
    gl.uniform4f( uniforms.uOutlineColor, outlineChannel[ 0 ], outlineChannel[ 1 ], outlineChannel[ 2 ], outlineChannel[ 3 ] );
    gl.uniform1f( uniforms.uOutline, this.outline );
    gl.uniform1f( uniforms.uRadius, _radius );
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 6 );
  };
  Nenkraft.Controller.GLCircleProgramController = GLCircleProgramController;
  Nenkraft.GLCircleProgramController = GLCircleProgramController;
};
