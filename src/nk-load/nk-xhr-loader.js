/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function XHRLoader ( _objects, _onComplete ) {

    if ( !( this instanceof XHRLoader ) ) return new XHRLoader( _objects, _onComplete );
    this.XHRcache = Nenkraft.Utils.Cache( XMLHttpRequest );
    this.dataCache = Nenkraft.Utils.Cache();
    this.onXHRLoaded = Nenkraft.Event.LocalEvent();
    this.onComplete = Nenkraft.Event.LocalEvent();

    if ( _onComplete != null ) {

      this.onComplete.Add( _onComplete, this );
    
    }

    if ( _objects != null ) this.Load( _objects );
  
  }

  XHRLoader.prototype = Object.create( null );
  XHRLoader.prototype.constructor = XHRLoader;
  // Static

  // Members
  XHRLoader.prototype.XHRcache = null;
  XHRLoader.prototype.dataCache = null;
  XHRLoader.prototype.count = 0;
  XHRLoader.prototype.loading = false;
  XHRLoader.prototype.toLoad = null;
  XHRLoader.prototype.onXHRLoaded = null;
  XHRLoader.prototype.onComplete = null;

  // Methods
  XHRLoader.prototype.Load = function ( _objects ) {

    if ( this.toLoad === null ) this.toLoad = [];
    this.toLoad.push.apply( this.toLoad, _objects );

    if ( this.loading === false ) {

      this.count = 0;
      this.loading = true;
      this.Haul( this.count );
    
    }
  
  };

  XHRLoader.prototype.Haul = function ( _count ) {

    var item = this.toLoad[ _count ];

    if ( item != null ) {

      var xhr = new XMLHttpRequest();

      xhr.open( 'GET', item.src );

      switch ( item.type ) {

        case 'json':
          xhr.onreadystatechange = this.OnLoadJSON.bind( this );
          break;
        default:
          xhr.onreadystatechange = this.OnLoadXML.bind( this );
          break;
      
      }

      xhr.onerror = this.OnError.bind( this );

      if ( xhr.data != null ) {

        xhr.data.id = item.id;
      
      } else {

        xhr.data = {
          id: item.id
        };
      
      }

      xhr.send();
    
    } else {

      this.count = 0;
      this.loading = false;
      this.toLoad = null;
      this.onComplete.Dispatch( this, { XHRcache: this.XHRcache, dataCache: this.dataCache } );
    
    }
  
  };

  XHRLoader.prototype.OnLoadXML = function ( _event ) {

    var t = _event.currentTarget;

    if ( ( t.status === 200 || t.responseText != null ) && t.readyState === 4 ) {

      t.onload = null;
      t.onerror = null;
      this.XHRcache.StoreSafe( t );
      this.dataCache.Store( {
        id: t.data.id,
        data: Nenkraft.Utils.XMLToJSON( t.responseText, true )
      } );
      this.onXHRLoaded.Dispatch( t, { count: this.count } );
      this.Haul( ++this.count );

      t.abort();
    
    }
  
  };

  XHRLoader.prototype.OnLoadJSON = function ( _event ) {

    var t = _event.currentTarget;

    if ( ( t.status === 200 || t.responseText != null ) && t.readyState === 4 ) {

      t.onload = null;
      t.onerror = null;
      this.XHRcache.StoreSafe( t );
      this.dataCache.Store( {
        id: t.data.id,
        data: JSON.parse( t.responseText )
      } );
      this.onXHRLoaded.Dispatch( t, { count: this.count } );
      this.Haul( ++this.count );

      t.abort();
    
    }
  
  };

  XHRLoader.prototype.OnError = function ( _event ) {

    console.error( _event );
    throw new Error( 'Request failed' );
  
  };

  XHRLoader.prototype.GetXHR = function ( _id ) {

    return this.XHRcache.GetById( _id );
  
  };

  XHRLoader.prototype.GetData = function ( _id ) {

    return this.dataCache.GetById( _id ).data;
  
  };

  Nenkraft.Load.XHRLoader = XHRLoader;
  Nenkraft.XHRLoader = XHRLoader;

};
