( function () {
  "use strict";
  //var Super = null;
  function Class() {
    if ( this instanceof Class ) {
      //Super.call(this);
    }
    else return new Class();
  }
  Class.prototype = Object.create( null /*Super.prototype*/ );
  Class.prototype.constructor = Class;
  nk.Class = Class;
}() );