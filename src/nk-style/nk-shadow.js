module.exports = function ( nk ) {
  "use strict";
  function Shadow( _props ) {
    if ( !( this instanceof Shadow ) ) return new Shadow( _props );
    nk.Utils.ApplyProperties( this, _props );
  }
  Shadow.prototype = Object.create( null );
  Shadow.prototype.constructor = Shadow;
  //Static

  //Members
  Shadow.prototype.shadowColor = '#000000';
  Shadow.prototype.shadowBlur = 5;
  Shadow.prototype.shadowOffsetX = 5;
  Shadow.prototype.shadowOffsetY = 5;
  Shadow.prototype.applied = false;
  //Methods
  Shadow.prototype.Apply = function ( _rc ) {
    _rc.shadowColor = this.shadowColor;
    _rc.shadowBlur = this.shadowBlur;
    _rc.shadowOffsetX = this.shadowOffsetX;
    _rc.shadowOffsetY = this.shadowOffsetY;
  };
  nk.Style.Shadow = Shadow;
};