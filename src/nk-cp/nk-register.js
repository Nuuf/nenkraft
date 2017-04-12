module.exports = function () {
  "use strict";
  function Register( _options ) {
    if ( this instanceof Register ) {

    }
    else return new Register( _options );
  }
  Register.prototype = Object.create( null );
  Register.prototype.constructor = Register;
  nk.CP.Register = Register;
  nk.Register = Register;
};