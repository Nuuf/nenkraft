/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  var Super = Nenkraft.Entity.Container2D;
  function Stage2D ( _canvas, _x, _y, _doNotStart, _useWebGL ) {
    if ( !( this instanceof Stage2D ) ) return new Stage2D( _canvas, _x, _y, _doNotStart, _useWebGL );
    Super.call( this, _x, _y );
    if ( typeof _canvas === 'string' ) {
      _canvas = document.getElementById( _canvas );
    }
    this.canvas = _canvas;
    this.w = _canvas.width;
    this.h = _canvas.height;
    if ( _useWebGL === true ) {
      this.gl = _canvas.getContext( 'webgl' );
      if ( this.gl == null ) {
        this.gl = _canvas.getContext( 'experimental-webgl' );
      }
      if ( this.gl == null ) {
        throw new Error( 'WebGL is not supported!' );
      }
      this.gl.clearColor(
        0.0392156862745098,
        0.0784313725490196,
        0.11764705882352941,
        0
      );
      this.usingWebGL = true;
      this.scale.Set( 2 / this.w, -2 / this.h );
      this.position.Add( -1, 1 );
      this.position.Add( _x * this.scale.x, _y * this.scale.y );
      this.UpdateTransform();
      this.ticker = new Nenkraft.Time.Ticker( this.GLProcess.bind( this ), 60, _doNotStart );
    } else {
      this.rc = _canvas.getContext( '2d' );
      this.ticker = new Nenkraft.Time.Ticker( this.Process.bind( this ), 60, _doNotStart );
    }
    this.onProcess = new Nenkraft.Event.LocalEvent();
    this.mouse = new Nenkraft.Input.Mouse( _canvas, _x, _y );
    this.keyboard = new Nenkraft.Input.Keyboard( _canvas );
  }
  Stage2D.prototype = Object.create( Super.prototype );
  Stage2D.prototype.constructor = Stage2D;
  //Static

  //Members
  Stage2D.prototype.backgroundColor = 'rgba(10,20,30,1)';
  Stage2D.prototype.clear = true;
  Stage2D.prototype.fill = true;
  Stage2D.prototype.usingWebGL = false;
  //Methods
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
  Stage2D.prototype.GLPreDraw = function ( _gl ) {
    _gl.viewport( 0, 0, this.w, this.h );
    _gl.clear( _gl.COLOR_BUFFER_BIT );
    _gl.enable( _gl.BLEND );
    _gl.disable( _gl.DEPTH_TEST );
    _gl.blendFunc( _gl.SRC_ALPHA, _gl.ONE_MINUS_SRC_ALPHA );
  };
  Stage2D.prototype.GLPostDraw = function ( _gl ) {
    _gl.flush();
  };
  Stage2D.prototype.Process = function ( _delta ) {
    this.PreDraw( this.rc );
    this.Draw( this.rc );
    this.onProcess.Dispatch( this, _delta );
  };
  Stage2D.prototype.GLProcess = function ( _delta ) {
    this.GLPreDraw( this.gl );
    this.GLDraw( this.gl );
    this.GLPostDraw( this.gl );
    this.onProcess.Dispatch( this, _delta );
  };
  Nenkraft.Entity.Stage2D = Stage2D;
  Nenkraft.Stage2D = Stage2D;
};
