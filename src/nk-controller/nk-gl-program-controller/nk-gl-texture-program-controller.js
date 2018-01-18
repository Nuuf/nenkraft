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
    this.Initialise();
  
  }

  GLTextureProgramController.prototype = Object.create( Super.prototype );
  GLTextureProgramController.prototype.constructor = GLTextureProgramController;
  // Static

  // Members
  GLTextureProgramController.prototype.originalTexture0 = null;
  GLTextureProgramController.prototype.boundTexture0 = null;
  GLTextureProgramController.prototype.essenceBuffer0 = null;
  GLTextureProgramController.prototype.originalTexture1 = null;
  GLTextureProgramController.prototype.boundTexture1 = null;
  GLTextureProgramController.prototype.essenceBuffer1 = null;
  GLTextureProgramController.prototype.originalTexture2 = null;
  GLTextureProgramController.prototype.boundTexture2 = null;
  GLTextureProgramController.prototype.essenceBuffer2 = null;
  GLTextureProgramController.prototype.originalTexture3 = null;
  GLTextureProgramController.prototype.boundTexture3 = null;
  GLTextureProgramController.prototype.essenceBuffer3 = null;
  GLTextureProgramController.prototype.lastUsedOTF = 0;

  // Methods
  GLTextureProgramController.prototype.Initialise = function() {

    this.AssignAttribute( 'aPosition0' );
    this.AssignAttribute( 'aTexCoord0' );
    this.AssignAttribute( 'aPosition1' );
    this.AssignAttribute( 'aTexCoord1' );
    this.AssignAttribute( 'aPosition2' );
    this.AssignAttribute( 'aTexCoord2' );
    this.AssignAttribute( 'aPosition3' );
    this.AssignAttribute( 'aTexCoord3' );
    this.AssignUniform( 'uImage' );
    this.AssignUniform( 'uOTF' );
    this.AssignUniform( 'uProjection' );
    this.AssignUniform( 'uTranslation' );
    this.AssignUniform( 'uTransformation' );
  
  };

  GLTextureProgramController.prototype.BindBasicTexture = function ( _texture, _otf ) {

    if ( _otf == null || _otf < 0 || _otf > 3 ) _otf = 0;
    var gl = this.gl;
    _texture.uniformId = _otf;
    this['originalTexture' + _otf] = _texture;
    this['boundTexture' + _otf] = gl.createTexture();
    this['essenceBuffer' + _otf] = gl.createBuffer();
    var essence = TRA( 0, 0, _texture.w, _texture.h );
    essence.push.apply( essence, TRA( 0, 0, 1, 1 ) );
    gl.bindTexture( gl.TEXTURE_2D, this['boundTexture' + _otf] );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _texture.image );
    gl.bindBuffer( gl.ARRAY_BUFFER, this['essenceBuffer' + _otf] );
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( essence ), gl.STATIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );
    gl.bindTexture( gl.TEXTURE_2D, null );
  
  };

  GLTextureProgramController.prototype.BindOTF = function( _gl, _uniforms, _attributes, _otf ) {

    if ( this['boundTexture' + _otf] == null ) return;

    _gl.activeTexture( _gl.TEXTURE0 + _otf );
    _gl.bindTexture( _gl.TEXTURE_2D, this['boundTexture' + _otf] );
    _gl.bindBuffer( _gl.ARRAY_BUFFER, this['essenceBuffer' + _otf] );
    _gl.enableVertexAttribArray( _attributes['aPosition' + _otf] );
    _gl.vertexAttribPointer( _attributes['aPosition' + _otf], 2, _gl.FLOAT, false, 0, 0 );
    _gl.enableVertexAttribArray( _attributes['aTexCoord' + _otf] );
    _gl.vertexAttribPointer( _attributes['aTexCoord' + _otf], 2, _gl.FLOAT, false, 0, 48 );
  
  };

  GLTextureProgramController.prototype.Execute = function ( _projection, _translation, _transformation, _uniformId ) {

    var gl = this.gl;
    var attributes = this.attributes;
    var uniforms = this.uniforms;

    if ( this !== Super.LAST_USED_CONTROLLER ) {

      gl.useProgram( this.program );

      this.BindOTF( gl, uniforms, attributes, 0 );
      this.BindOTF( gl, uniforms, attributes, 1 );
      this.BindOTF( gl, uniforms, attributes, 2 );
      this.BindOTF( gl, uniforms, attributes, 3 );

      gl.uniform1f( uniforms.uOTF, _uniformId );
      gl.uniform1i( uniforms.uImage, _uniformId );
      Super.LAST_USED_CONTROLLER = this;
      this.lastUsedOTF = _uniformId;
    
    } else if ( _uniformId !== this.lastUsedOTF ) {

      gl.uniform1f( uniforms.uOTF, _uniformId );
      gl.uniform1i( uniforms.uImage, _uniformId );
      this.lastUsedOTF = _uniformId;
    
    }

    gl.uniformMatrix3fv( uniforms.uProjection, false, _projection );
    gl.uniformMatrix3fv( uniforms.uTranslation, false, _translation );
    gl.uniformMatrix3fv( uniforms.uTransformation, false, _transformation );
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 6 );
  
  };

  Nenkraft.Controller.GLTextureProgramController = GLTextureProgramController;
  Nenkraft.GLTextureProgramController = GLTextureProgramController;

};
