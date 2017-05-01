module.exports = function () {
  "use strict";;
  function LocalListener( _holderContext, _listenerContext, _handle, _removeOnNextCall ) {
    if ( !( this instanceof LocalListener ) ) return new LocalListener( _holderContext, _listenerContex, _handle, _removeOnNextCall );
    this.context = _listenerContext;
    this.holderContext = _holderContext;
    this.handle = _handle;
    this.removeOnNextCall = _removeOnNextCall;
  }
  LocalListener.prototype = Object.create( null );
  LocalListener.prototype.constructor = LocalListener;
  //Static

  //Members

  //Methods
  LocalListener.prototype.Execute = function () {
    this.handle.apply( this.context, arguments );
    if ( this.removeOnNextCall === true ) {
      this.Remove();
    }
  };
  LocalListener.prototype.Remove = function () {
    this.holderContext.Remove( this.handle, this.context );
  };
  nk.Event.LocalListener = LocalListener;
  nk.LocalListener = LocalListener;
};