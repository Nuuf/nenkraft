/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function LocalEvent () {

    if ( !( this instanceof LocalEvent ) ) return new LocalEvent();
    this.listeners = [];
  
  }

  LocalEvent.prototype = Object.create( null );
  LocalEvent.prototype.constructor = LocalEvent;
  // Static

  // Members
  LocalEvent.prototype.stopPropagation = false;
  LocalEvent.prototype.target = null;
  LocalEvent.prototype.data = null;

  // Methods
  LocalEvent.prototype.GetListenerIndex = function ( _handle, _context ) {

    var listeners = this.listeners;
    if ( listeners.length === 0 ) return -1;

    for ( var i = 0, l = listeners.length, listener; i < l; ++i ) {

      listener = listeners[ i ];

      if ( listener.context === _context && listener.handle === _handle ) {

        return i;
      
      }
    
    }

    return -1;
  
  };

  LocalEvent.prototype.Add = function ( _handle, _context, _removeOnNextCall ) {

    var listener = Nenkraft.LocalListener( this, _context, _handle, _removeOnNextCall );
    this.listeners.push( listener );
  
  };

  LocalEvent.prototype.Remove = function ( _handle, _context ) {

    var ix = this.GetListenerIndex( _handle, _context );

    if ( ix !== -1 ) {

      this.listeners.fickleSplice( ix );
    
    }
  
  };

  LocalEvent.prototype.Dump = function ( _context ) {

    var listeners = this.listeners;
    if ( listeners.length === 0 ) return;

    if ( _context !== undefined ) {

      for ( var i = 0, l = listeners.length, listener; i < l; ++i ) {

        listener = listeners[ i ];

        if ( listener.context === _context ) {

          this.listeners.fickleSplice( i );
        
        }
      
      }
    
    }
    else {

      this.listeners.length = 0;
    
    }
  
  };

  LocalEvent.prototype.Dispatch = function ( _target, _data ) {

    var listeners = this.listeners;
    if ( listeners.length === 0 ) return;
    listeners = listeners.slice();
    this.stopPropagation = false;
    this.target = _target;
    this.data = _data;

    for ( var i = 0, l = listeners.length, listener; i < l; ++i ) {

      listener = listeners[ i ];
      listener.Execute( this );
      if ( this.stopPropagation === true ) break;
    
    }

    delete this.target;
    delete this.data;
  
  };

  Nenkraft.Event.LocalEvent = LocalEvent;
  Nenkraft.LocalEvent = LocalEvent;

};
