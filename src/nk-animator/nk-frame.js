module.exports = function ( nk ) {
  "use strict";
  function Frame ( _x, _y, _w, _h ) {
    if ( !( this instanceof Frame ) ) return new Frame();
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
  }
  Frame.prototype = Object.create( null );
  Frame.prototype.constructor = Frame;
  //Static

  //Members

  //Methods

  nk.Animation.Frame = Frame;
};