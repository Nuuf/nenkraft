/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Controller.GLProgramController;
  var TRA = Nenkraft.Math.TriRectArray;
  function GLTextureProgramController ( _gl ) {

    if ( !( this instanceof GLTextureProgramController ) ) return new GLTextureProgramController( _gl );
    Super.call( this, _gl, Nenkraft.SHADER_CODE.TEXTURE_2D );
  
  }

  GLTextureProgramController.prototype = Object.create( Super.prototype );
  GLTextureProgramController.prototype.constructor = GLTextureProgramController;
  //Static

  //Members
  GLTextureProgramController.prototype.originalTexture = null;
  GLTextureProgramController.prototype.boundTexture = null;
  GLTextureProgramController.prototype.essenceBuffer = null;
  //Methods
  GLTextureProgramController.prototype.BindBasicTexture = function ( _texture ) {

    var gl = this.gl;
    this.originalTexture = _texture;
    this.boundTexture = gl.createTexture();
    this.essenceBuffer = gl.createBuffer();
    var essence = TRA( 0, 0, _texture.w, _texture.h );
    essence.push.apply( essence, TRA( 0, 0, 1, 1 ) );
    gl.bindTexture( gl.TEXTURE_2D, this.boundTexture );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _texture.image );
    gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( essence ), gl.STATIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );
    gl.bindTexture( gl.TEXTURE_2D, null );
    this.AssignAttribute( 'aPosition' );
    this.AssignAttribute( 'aTexCoord' );
    this.AssignUniform( 'uImage' );
    this.AssignUniform( 'uProjection' );
    this.AssignUniform( 'uTranslation' );
    this.AssignUniform( 'uTransformation' );
  
  };

  GLTextureProgramController.prototype.Execute = function ( _projection, _translation, _transformation ) {

    var gl = this.gl;
    var attributes = this.attributes;
    var uniforms = this.uniforms;
    if ( this !== Super.LAST_USED_CONTROLLER ) {

      gl.useProgram( this.program );
      gl.activeTexture( gl.TEXTURE0 );
      gl.bindTexture( gl.TEXTURE_2D, this.boundTexture );
      gl.uniform1i( uniforms.uImage, 0 );
      gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
      gl.enableVertexAttribArray( attributes.aPosition );
      gl.vertexAttribPointer( attributes.aPosition, 2, gl.FLOAT, false, 0, 0 );
      gl.enableVertexAttribArray( attributes.aTexCoord );
      gl.vertexAttribPointer( attributes.aTexCoord, 2, gl.FLOAT, false, 0, 48 );
      Super.LAST_USED_CONTROLLER = this;
    
    }

    gl.uniformMatrix3fv( uniforms.uProjection, false, _projection );
    gl.uniformMatrix3fv( uniforms.uTranslation, false, _translation );
    gl.uniformMatrix3fv( uniforms.uTransformation, false, _transformation );
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 6 );
  
  };

  Nenkraft.Controller.GLTextureProgramController = GLTextureProgramController;
  Nenkraft.GLTextureProgramController = GLTextureProgramController;

};
