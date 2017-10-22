module.exports = function ( Nenkraft ) {
  'use strict';
  var Super = Nenkraft.Entity.Container2D;
  function Stage2D ( _canvas, _x, _y, _doNotStart ) {
    if ( !( this instanceof Stage2D ) ) return new Stage2D( _canvas, _x, _y, _doNotStart );
    Super.call( this, _x, _y );
    this.canvas = _canvas;
    this.rc = _canvas.getContext( '2d' );
    this.w = _canvas.width;
    this.h = _canvas.height;
    this.ticker = new Nenkraft.Time.Ticker( this.Process.bind( this ), 60, _doNotStart );
    this.onProcess = new Nenkraft.Event.LocalEvent();
    this.mouse = new Nenkraft.Input.Mouse( _canvas, _x, _y );
    this.keyboard = new Nenkraft.Input.Keyboard( _canvas );
  }
  Stage2D.prototype = Object.create( Super.prototype );
  Stage2D.prototype.constructor = Stage2D;
  //Static

  //Members
  Stage2D.prototype.backgroundColor = 'rgba(0,0,0,1)';
  Stage2D.prototype.clear = true;
  Stage2D.prototype.fill = true;
  Stage2D.prototype.alpha = 1.0;
  Stage2D.prototype.gco = Nenkraft.Style.GCO.DEFAULT;
  //Methods
  Stage2D.prototype.PreDraw = function ( _rc ) {
    _rc.setTransform( 1, 0, 0, 1, 0, 0 );
    _rc.globalAlpha = this.alpha;
    _rc.globalCompositeOperation = this.gco;
    if ( this.clear === true ) {
      _rc.clearRect( 0, 0, this.w, this.h );
    }
    else if ( this.fill === true ) {
      _rc.fillStyle = this.backgroundColor;
      _rc.fillRect( 0, 0, this.w, this.h );
    }
  };
  Stage2D.prototype.Process = function ( _delta ) {
    var rc = this.rc;
    this.PreDraw( rc );
    this.Draw( rc );
    this.onProcess.Dispatch( this, _delta );
  };
  delete Stage2D.prototype.alpha;
  delete Stage2D.prototype.gco;
  Nenkraft.Entity.Stage2D = Stage2D;
  Nenkraft.Stage2D = Stage2D;
};
