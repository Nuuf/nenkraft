module.exports = function ( Nenkraft ) {
  'use strict';
  function Pool ( _class ) {
    if ( !( this instanceof Pool ) ) return new Pool( _class );
    this.class = _class;
    this.objects = [];
  }
  Pool.prototype = Object.create( null );
  Pool.prototype.constructor = Pool;
  //Static

  //Members
  Pool.prototype.class = null;
  Pool.prototype.objects = null;
  Pool.prototype.floodFunction = null;
  Pool.prototype.floodAmount = 0;
  Pool.prototype.context = null;
  //Methods
  Pool.prototype.Store = function ( _object ) {
    this.objects.push( _object );
  };
  Pool.prototype.Retrieve = function () {
    if ( this.objects.length === 0 ) {
      this.Flood();
    }
    return this.objects.splice( this.objects.length - 1, 1 )[ 0 ];
  };
  Pool.prototype.Flood = function ( _func, _amount, _context ) {
    if ( _func ) this.floodFunction = _func;
    if ( _amount ) this.floodAmount = _amount;
    if ( _context ) this.context = _context;
    for ( var i = 0; i < this.floodAmount; ++i ) {
      var object = new this.class();
      this.Store( object );
      this.floodFunction.call( this.context, object );
    }
  };
  Pool.prototype.Flush = function () {
    this.objects.length = 0;
  };
  Nenkraft.Utils.Pool = Pool;
  Nenkraft.Pool = Pool;
};