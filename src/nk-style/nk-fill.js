module.exports = function ( nk ) {
  "use strict";
  /*
  * @parameter _props: Object
  */
  function Fill( _props ) {
    if ( !( this instanceof Fill ) ) return new Fill( _props );
    nk.Utils.ApplyProperties( this, _props );
  }
  Fill.prototype = Object.create( null );
  Fill.prototype.constructor = Fill;
  //Static

  //Members
  Fill.prototype.fillStyle = '#440066';
  Fill.prototype.applied = true;
  //Methods
  Fill.prototype.Apply = function ( _rc ) {
    _rc.fillStyle = this.fillStyle;
  };
  nk.Style.Fill = Fill;
};