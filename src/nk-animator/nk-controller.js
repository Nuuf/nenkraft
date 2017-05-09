module.exports = function ( nk ) {
  "use strict";
  function Controller () {
    if ( !( this instanceof Controller ) ) return new Controller();

  }
  Controller.prototype = Object.create( null );
  Controller.prototype.constructor = Controller;
  //Static

  //Members

  //Methods

  nk.Animation.Controller = Controller;
};