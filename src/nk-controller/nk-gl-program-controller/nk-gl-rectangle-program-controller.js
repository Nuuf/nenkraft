/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Controller.GLProgramController;
  var TriRectArray = Nenkraft.Math.TriRectArray;
  function GLRectangleProgramController ( _gl ) {

    if ( !( this instanceof GLRectangleProgramController ) ) return new GLRectangleProgramController( _gl );
    Super.call( this, _gl, Nenkraft.SHADER_CODE.RECTANGLE );
    this.Initialise();
  
  }

  GLRectangleProgramController.prototype = Object.create( Super.prototype );
  GLRectangleProgramController.prototype.constructor = GLRectangleProgramController;
  //Static

  //Members
  GLRectangleProgramController.prototype.geometricBuffer = null;
  GLRectangleProgramController.prototype.vertices = null;
  GLRectangleProgramController.prototype.fillColor = null;
  GLRectangleProgramController.prototype.outlineColor = null;
  GLRectangleProgramController.prototype.outline = 5.0;
  //Methods
  GLRectangleProgramController.prototype.Initialise = function () {

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
    this.AssignUniform( 'uSize' );
    this.AssignUniform( 'uOutline' );
  
  };

  GLRectangleProgramController.prototype.Execute = function ( _projection, _x, _y, _w, _h ) {

    var gl = this.gl;
    var attributes = this.attributes;
    var uniforms = this.uniforms;
    var vertices = this.vertices;
    var fillChannel = this.fillColor.channel;
    var outlineChannel = this.outlineColor.channel;
    TriRectArray( _x, _y, _w, _h, vertices );
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
    gl.uniform2f( uniforms.uSize, _w, _h );
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 6 );
  
  };

  Nenkraft.Controller.GLRectangleProgramController = GLRectangleProgramController;
  Nenkraft.GLRectangleProgramController = GLRectangleProgramController;

};
