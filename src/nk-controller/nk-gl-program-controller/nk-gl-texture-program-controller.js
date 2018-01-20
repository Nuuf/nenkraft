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
  GLTextureProgramController.prototype.lastUsedUnit = 0;

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
    this.AssignUniform( 'uUnitId' );
    this.AssignUniform( 'uProjection' );
    this.AssignUniform( 'uTranslation' );
    this.AssignUniform( 'uTransformation' );
    this.AssignUniform( 'uTint' );
  
  };

  GLTextureProgramController.prototype.BindBasicTexture = function ( _texture, _unitId ) {

    if ( _unitId == null || _unitId < 0 || _unitId > 3 ) _unitId = 0;
    var gl = this.gl;
    _texture.uniformId = _unitId;
    this['originalTexture' + _unitId] = _texture;
    this['boundTexture' + _unitId] = gl.createTexture();
    this['essenceBuffer' + _unitId] = gl.createBuffer();
    var essence = TRA( 0, 0, _texture.w, _texture.h );
    essence.push.apply( essence, TRA( 0, 0, 1, 1 ) );
    gl.bindTexture( gl.TEXTURE_2D, this['boundTexture' + _unitId] );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _texture.image );
    gl.bindBuffer( gl.ARRAY_BUFFER, this['essenceBuffer' + _unitId] );
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( essence ), gl.STATIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );
    gl.bindTexture( gl.TEXTURE_2D, null );
  
  };

  GLTextureProgramController.prototype.BindUnit = function( _gl, _uniforms, _attributes, _unitId ) {

    if ( this['boundTexture' + _unitId] == null ) return;

    _gl.activeTexture( _gl.TEXTURE0 + _unitId );
    _gl.bindTexture( _gl.TEXTURE_2D, this['boundTexture' + _unitId] );
    _gl.bindBuffer( _gl.ARRAY_BUFFER, this['essenceBuffer' + _unitId] );
    _gl.enableVertexAttribArray( _attributes['aPosition' + _unitId] );
    _gl.vertexAttribPointer( _attributes['aPosition' + _unitId], 2, _gl.FLOAT, false, 0, 0 );
    _gl.enableVertexAttribArray( _attributes['aTexCoord' + _unitId] );
    _gl.vertexAttribPointer( _attributes['aTexCoord' + _unitId], 2, _gl.FLOAT, false, 0, 48 );
  
  };

  GLTextureProgramController.prototype.Execute = function ( _projection, _translation, _transformation, _tint, _unitId ) {

    var gl = this.gl;
    var attributes = this.attributes;
    var uniforms = this.uniforms;

    if ( this !== Super.LAST_USED_CONTROLLER ) {

      gl.useProgram( this.program );

      this.BindUnit( gl, uniforms, attributes, 0 );
      this.BindUnit( gl, uniforms, attributes, 1 );
      this.BindUnit( gl, uniforms, attributes, 2 );
      this.BindUnit( gl, uniforms, attributes, 3 );

      gl.uniform1f( uniforms.uUnitId, _unitId );
      gl.uniform1i( uniforms.uImage, _unitId );
      Super.LAST_USED_CONTROLLER = this;
      this.lastUsedUnit = _unitId;
    
    } else if ( _unitId !== this.lastUsedUnit ) {

      gl.uniform1f( uniforms.uUnitId, _unitId );
      gl.uniform1i( uniforms.uImage, _unitId );
      this.lastUsedUnit = _unitId;
    
    }

    gl.uniform4fv( uniforms.uTint, _tint );
    gl.uniformMatrix3fv( uniforms.uProjection, false, _projection );
    gl.uniformMatrix3fv( uniforms.uTranslation, false, _translation );
    gl.uniformMatrix3fv( uniforms.uTransformation, false, _transformation );
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 6 );
  
  };

  Nenkraft.Controller.GLTextureProgramController = GLTextureProgramController;
  Nenkraft.GLTextureProgramController = GLTextureProgramController;

};
