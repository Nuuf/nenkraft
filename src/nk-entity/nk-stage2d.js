module.exports = function () {
  "use strict";
  var Super = nk.Entity.Container2D;
  function Stage2D( _canvas, _x, _y, _doNotStart ) {
    if ( this instanceof Stage2D ) {
      Super.call( this, _x, _y );
      this.canvas = _canvas;
      this.rc = _canvas.getContext( '2d' );
      this.backgroundColor = 'rgba(0,0,0,1)';
      this.w = _canvas.width;
      this.h = _canvas.height;
      this.ticker = new nk.Time.Ticker( this.Process.bind( this ), 60, _doNotStart );
      this.onProcess = new nk.Event.LocalEvent();
      this.mouse = new nk.Input.Mouse( _canvas, _x, _y );
    }
    else return new Stage2D( _canvas, _x, _y, _doNotStart );
  }
  Stage2D.prototype = Object.create( Super.prototype );
  Stage2D.prototype.constructor = Stage2D;
  Stage2D.prototype.PreDraw = function ( _rc ) {
    _rc.fillStyle = this.backgroundColor;
    _rc.fillRect( 0, 0, this.w, this.h );
  };
  Stage2D.prototype.Process = function ( _delta ) {
    var rc = this.rc;
    this.PreDraw( rc );
    this.Draw( rc );
    this.onProcess.Dispatch( this, _delta );
  };
  nk.Entity.Stage2D = Stage2D;
  nk.Stage2D = Stage2D;
};