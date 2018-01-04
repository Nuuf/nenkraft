/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function GLProgramController ( _gl, _shader ) {

    if ( !( this instanceof GLProgramController ) ) return new GLProgramController( _gl, _shader );
    this.gl = _gl;
    this.data = Object.create( null );

    if ( _gl != null && _shader != null ) {

      this.Init( _shader.v, _shader.f );
    
    }
  
  }

  GLProgramController.prototype = Object.create( null );
  GLProgramController.prototype.constructor = GLProgramController;
  // Static
  GLProgramController.LAST_USED_CONTROLLER = null;
  // Members
  GLProgramController.prototype.program = null;
  GLProgramController.prototype.gl = null;
  GLProgramController.prototype.attributes = null;
  GLProgramController.prototype.uniforms = null;
  GLProgramController.prototype.data = null;

  // Methods
  GLProgramController.prototype.Init = function ( _vs, _fs ) {

    var gl = this.gl;
    var vShader = this.CreateShader( _vs, gl.VERTEX_SHADER );
    var fShader = this.CreateShader( _fs, gl.FRAGMENT_SHADER );
    var program = this.program = gl.createProgram();
    gl.attachShader( program, vShader );
    gl.attachShader( program, fShader );
    gl.linkProgram( program );

    if ( !gl.getProgramParameter( program, gl.LINK_STATUS ) ) {

      var info = gl.getProgramInfoLog( program );
      throw new Error( 'Program link failed:' + info );
    
    }

    gl.detachShader( program, vShader );
    gl.detachShader( program, fShader );
    gl.deleteShader( vShader );
    gl.deleteShader( fShader );
    this.attributes = {};
    this.uniforms = {};
  
  };

  GLProgramController.prototype.CreateShader = function ( _script, _type ) {

    var gl = this.gl;
    var shader = gl.createShader( _type );
    gl.shaderSource( shader, _script );
    gl.compileShader( shader );

    if ( !gl.getShaderParameter( shader, gl.COMPILE_STATUS ) ) {

      var info = gl.getShaderInfoLog( shader );
      throw new Error( 'Shader compilation failed:' + info );
    
    }

    return shader;
  
  };

  GLProgramController.prototype.AssignAttribute = function ( _attribute ) {

    this.attributes[ _attribute ] = this.gl.getAttribLocation( this.program, _attribute );
  
  };

  GLProgramController.prototype.AssignUniform = function ( _uniform ) {

    this.uniforms[ _uniform ] = this.gl.getUniformLocation( this.program, _uniform );
  
  };

  GLProgramController.prototype.Execute = function () {
    // Override
  };

  Nenkraft.Controller.GLProgramController = GLProgramController;
  Nenkraft.GLProgramController = GLProgramController;

};
