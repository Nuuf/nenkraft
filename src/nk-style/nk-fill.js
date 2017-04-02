module.exports = function ( nk ) {
  "use strict";
  /*
  * @parameter _props: Object
  */
  function Fill( _props ) {
    if ( this instanceof Fill ) {
      this.fillStyle = '#440066';
      this.applied = true;
      nk.Utils.ApplyProperties( this, _props );
    }
    else return new Fill( _props );
  }
  Fill.prototype = Object.create( null );
  Fill.prototype.constructor = Fill;
  Fill.prototype.Apply = function ( _rc ) {
    _rc.fillStyle = this.fillStyle;
  };
  nk.Style.Fill = Fill;
};