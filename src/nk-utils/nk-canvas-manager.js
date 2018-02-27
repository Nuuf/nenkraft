/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function CanvasManager ( _canvas, _w, _h, _mode ) {

    if ( !( this instanceof CanvasManager ) ) return new CanvasManager( _canvas, _w, _h, _mode );

    this.canvas = _canvas;
    this.w = _w;
    this.h = _h;

    this.aspectRatio = Nenkraft.Math.SAR( _w, _h );
    this.onChange = Nenkraft.LocalEvent();

    if ( _mode != null ) {

      this.mode = _mode;
    
    }

    _canvas.setAttribute( 'width', _w );
    _canvas.setAttribute( 'height', _h );

    window.addEventListener( 'resize', this.OnWindowResize.bind( this ) );
  
  }

  CanvasManager.prototype = Object.create( null );
  CanvasManager.prototype.constructor = CanvasManager;
  // Static
  CanvasManager.FILL_SCREEN = 'FillScreen';
  CanvasManager.KEEP_ASPECT_RATIO = 'KeepAspectRatio';
  CanvasManager.KEEP_ASPECT_RATIO_MIN = 'KeepAspectRatioMIN';
  CanvasManager.KEEP_ASPECT_RATIO_MAX = 'KeepAspectRatioMAX';
  CanvasManager.KEEP_ASPECT_RATIO_FIT = 'KeepAspectRatioFIT';

  // Members
  CanvasManager.prototype.canvas = null;
  CanvasManager.prototype.stage = null;
  CanvasManager.prototype.container = null;
  CanvasManager.prototype.w = 0;
  CanvasManager.prototype.h = 0;
  CanvasManager.prototype.currentWidth = 0;
  CanvasManager.prototype.currentHeight = 0;
  CanvasManager.prototype.aspectRatio = null;
  CanvasManager.prototype.onChange = null;
  CanvasManager.prototype.mode = CanvasManager.FILL_SCREEN;

  // Methods
  CanvasManager.prototype.OnWindowResize = function() {

    this[this.mode]();
  
  };

  CanvasManager.prototype.Trigger = function() {

    this.OnWindowResize();
    return this;
  
  };

  CanvasManager.prototype.Reconfigure = function( _w, _h, _mode ) {

    this.w = _w;
    this.h = _h;
    this.mode = _mode;
    return this;
  
  };

  CanvasManager.prototype.BindStage = function( _stage ) {

    this.stage = _stage;
    return this;

  };

  CanvasManager.prototype.BindContainer = function( _container ) {

    this.container = _container;
    return this;
  
  };

  CanvasManager.prototype.SetCurrent = function( _w, _h ) {

    this.canvas.setAttribute( 'width', _w );
    this.canvas.setAttribute( 'height', _h );

    this.currentWidth = _w;
    this.currentHeight = _h;

    if ( this.stage !== null ) {

      this.stage.w = _w;
      this.stage.h = _h;

      this.stage.mouse.scale.Set(
        _w / this.w,
        _h / this.h
      );
    
    }

    if ( this.container !== null ) {
      
      this.container.scale.Set(
        _w / this.w,
        _h / this.h
      );

    } 
  
  };

  CanvasManager.prototype.FillScreen = function() {

    this.SetCurrent( window.innerWidth, window.innerHeight );
    
  };

  CanvasManager.prototype.KeepAspectRatio = function() {

    var w = window.innerWidth, h = w / this.aspectRatio[0] * this.aspectRatio[1];

    this.SetCurrent( w, h );

  };

  CanvasManager.prototype.KeepAspectRatioMAX = function() {

    var w = window.innerWidth, h;

    if ( w >= this.w ) {

      w = this.w;
      
    }

    h = w / this.aspectRatio[0] * this.aspectRatio[1];
      
    this.SetCurrent( w, h );

  };

  CanvasManager.prototype.KeepAspectRatioMIN = function() {

    var w = window.innerWidth, h;

    if ( w <= this.w ) {

      w = this.w;
      
    }

    h = w / this.aspectRatio[0] * this.aspectRatio[1];

    this.SetCurrent( w, h );
    
  };

  CanvasManager.prototype.KeepAspectRatioFIT = function() {

    var w = window.innerWidth, h = w / this.aspectRatio[0] * this.aspectRatio[1];

    if ( h >= window.innerHeight ) {

      h = window.innerHeight;
      w = h / this.aspectRatio[1] * this.aspectRatio[0];
    
    }

    this.SetCurrent( w, h );

  };

  Nenkraft.Utils.CanvasManager = CanvasManager;
  Nenkraft.CanvasManager = CanvasManager;

};
