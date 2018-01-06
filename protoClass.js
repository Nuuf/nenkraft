module.exports = function ( namespace ) {

  'use strict';

  // var Super = null;
  function Class ( param ) {

    if ( !( this instanceof Class ) ) return new Class( param );
    // Super.call(this, param);
    this.memExO = {};
  
  }

  Class.prototype = Object.create( null /* Super.prototype*/ );
  Class.prototype.constructor = Class;

  // Static
  Class.SFunc = function () {
    // return null;
  };

  // Members
  Class.prototype.memExV = 1;

  // Methods
  Class.prototype.methEx = function () {
    // return null;
  };

  namespace.Class = Class;

};
