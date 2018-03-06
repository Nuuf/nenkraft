/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Container2D;

  function Stage2D ( _options ) {

    if ( !( this instanceof Stage2D ) ) return new Stage2D( _options );
    Super.call( this, _options.x, _options.y );
    this.positionReconfiguration = Nenkraft.Vector2D( _options.x, _options.y );

    if ( typeof _options.canvas === 'string' ) {

      _options.canvas = document.getElementById( _options.canvas );
    
    }

    this.canvas = _options.canvas;
    this.w = _options.canvas.width;
    this.h = _options.canvas.height;

    if ( _options.mode === 'WebGL' ) {

      this.gl = _options.canvas.getContext( 'webgl', {
        antialias: _options.antialias,
        preserveDrawingBuffer: true
      } );

      if ( this.gl == null ) {

        this.gl = _options.canvas.getContext( 'experimental-webgl' );
      
      }

      if ( this.gl == null ) {

        throw new Error( 'WebGL is not supported!' );
      
      }

      this.gl.clearColor(
        0.0392156862745098,
        0.0784313725490196,
        0.11764705882352941,
        1.0
      );
      this.usingWebGL = true;

      if ( _options.noTicker !== true ) {

        this.ticker = Nenkraft.Time.Ticker( this.GLProcess.bind( this ), 60, _options.halt );
      
      }

      this.GLConfig( this.gl );
    
    } else {

      this.rc = _options.canvas.getContext( '2d' );

      if ( _options.noTicker !== true ) {

        this.ticker = Nenkraft.Time.Ticker( this.Process.bind( this ), 60, _options.halt );
      
      }
    
    }

    if ( _options.backgroundColor != null ) {

      this.backgroundColor = _options.backgroundColor;
    
    }

    if ( _options.clear === false ) {

      this.clear = false;
    
    }

    if ( _options.fill === false ) {

      this.fill = false;
    
    }

    if ( _options.id != null ) {

      this.id = _options.id;
    
    }

    this.onProcess = Nenkraft.Event.LocalEvent();
    this.mouse = Nenkraft.Input.Mouse( _options.canvas, _options.x, _options.y );
    this.keyboard = Nenkraft.Input.Keyboard( _options.canvas );
  
  }

  Stage2D.prototype = Object.create( Super.prototype );
  Stage2D.prototype.constructor = Stage2D;
  // Static

  // Members
  Stage2D.prototype.id = null;
  Stage2D.prototype.canvas = null;
  Stage2D.prototype.backgroundColor = 'rgba(10,20,30,1)';
  Stage2D.prototype.clear = true;
  Stage2D.prototype.fill = true;
  Stage2D.prototype.usingWebGL = false;
  Stage2D.prototype.positionReconfiguration = null;
  Stage2D.prototype.canvasManager = null;

  // Methods
  Stage2D.prototype.PreDraw = function ( _rc ) {

    _rc.setTransform( 1, 0, 0, 1, 0, 0 );
    _rc.globalAlpha = 1.0;
    _rc.globalCompositeOperation = 'source-over';

    if ( this.fill === true ) {

      _rc.fillStyle = this.backgroundColor;
      _rc.fillRect( 0, 0, this.w, this.h );
    
    }
    else if ( this.clear === true ) {

      _rc.clearRect( 0, 0, this.w, this.h );
    
    }
  
  };

  Stage2D.prototype.GLConfig = function( _gl ) {

    if ( _gl == null ) _gl = this.gl;

    this.position.Set( 0, 0 );
    this.scale.Set( 2 / this.w, -2 / this.h );
    this.position.Add( -1, 1 );
    this.position.Add( 
      this.positionReconfiguration.x * this.scale.x, 
      this.positionReconfiguration.y * this.scale.y
    );
    this.UpdateTransform();
    _gl.viewport( 0, 0, this.w, this.h );
    _gl.enable( _gl.BLEND );
    _gl.disable( _gl.DEPTH_TEST );
    _gl.blendFunc( _gl.SRC_ALPHA, _gl.ONE_MINUS_SRC_ALPHA );
  
  };

  Stage2D.prototype.GLPreDraw = function ( _gl ) {

    if ( this.clear === true ) {

      _gl.clear( _gl.COLOR_BUFFER_BIT );
    
    }
  
  };

  Stage2D.prototype.GLPostDraw = function ( _gl ) {

    _gl.flush();
  
  };

  Stage2D.prototype.Process = function ( _delta ) {

    this.Draw( this.rc );
    this.onProcess.Dispatch( this, _delta );
  
  };

  Stage2D.prototype.GLProcess = function ( _delta ) {

    this.GLDraw( this.gl );
    this.GLPostDraw( this.gl );
    this.onProcess.Dispatch( this, _delta );
  
  };

  Stage2D.prototype.MixedProcess = function( _delta ) {

    if ( this.usingWebGL === true ) {

      this.GLDraw( this.gl );
      this.GLPostDraw( this.gl );
    
    } else {

      this.Draw( this.rc );
    
    }

    this.onProcess.Dispatch( this, _delta );

  };

  Nenkraft.Entity.Stage2D = Stage2D;
  Nenkraft.Stage2D = Stage2D;

};
