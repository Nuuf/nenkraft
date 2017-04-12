module.exports = function () {
  "use strict";
  function Command( _id, _handle, _info ) {
    if ( this instanceof Command ) {

    }
    else return new Command( _id, _handle, _info );
  }
  Command.prototype = Object.create( null );
  Command.prototype.constructor = Command;
  nk.CP.Command = Command;
  nk.Command = Command;
};