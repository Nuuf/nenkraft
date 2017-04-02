module.exports = function ( nk ) {
  "use strict";
  function Shadow( _props ) {
    if ( this instanceof Shadow ) {
      this.shadowColor = '#000000';
      this.shadowBlur = 5;
      this.shadowOffsetX = 5;
      this.shadowOffsetY = 5;
      this.applied = false;
      nk.Utils.ApplyProperties( this, _props );
    }
    else return new Shadow( _props );
  }
  Shadow.prototype = Object.create( null );
  Shadow.prototype.constructor = Shadow;
  Shadow.prototype.Apply = function ( _rc ) {
    _rc.shadowColor = this.shadowColor;
    _rc.shadowBlur = this.shadowBlur;
    _rc.shadowOffsetX = this.shadowOffsetX;
    _rc.shadowOffsetY = this.shadowOffsetY;
  };
  nk.Style.Shadow = Shadow;
};