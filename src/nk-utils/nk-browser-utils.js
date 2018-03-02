/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var CANVAS = null;
  var CANVASRC = null;
  var DPARSER = null;

  Nenkraft.Utils.GenerateSimpleBase64Png = function ( _imageFunction, _forceWidth, _forceHeight ) {

    var drawable = _imageFunction();

    if ( CANVAS == null ) {

      CANVAS = document.createElement( 'canvas' );
      CANVASRC = CANVAS.getContext( '2d' );
    
    }

    CANVASRC.clearRect( 0, 0, CANVAS.width, CANVAS.height );

    CANVAS.width = drawable.w;
    CANVAS.height = drawable.h;

    if ( _forceWidth != null ) {

      CANVAS.width = _forceWidth;
    
    }

    if ( _forceHeight != null ) {

      CANVAS.height = _forceHeight;
    
    }

    CANVASRC.setTransform( 1, 0, 0, 1, 0, 0 );
    drawable.Draw( CANVASRC );
    return CANVAS.toDataURL( 'image/png' );
  
  };

  Nenkraft.Utils.ImageFromDataURL = function ( _url, _w, _h, _onLoad ) {

    var image = new Image();
    image.width = _w;
    image.height = _h;
    image.onload = _onLoad;
    image.src = _url;
    return image;
  
  };

  Nenkraft.Utils.ParsedXMLToJSON = function ( _pxml, _deleteWhitespace ) {

    var o = {};
    var i, l, attrs, attr, child, pchild, children = _pxml.childNodes, temp;

    if ( _pxml.nodeType === 1 ) {

      attrs = _pxml.attributes;
      l = attrs.length;

      if ( l > 0 ) {

        o.attributes = {};

        for ( i = 0, attr = attrs.item( i ); i < l; attr = attrs.item( ++i ) ) {

          o.attributes[ attr.nodeName ] = attr.nodeValue;
        
        }
      
      }
    
    } else if ( _pxml.nodeType === 3 ) {

      if ( ! /^\s*$/g.exec( _pxml.nodeValue ) ) {

        o = _pxml.nodeValue;

        if ( _deleteWhitespace === true ) {

          o = o.replace( /^\s+|\s+&|\n/gmi, '' );
        
        }
      
      }
    
    }

    if ( children != null ) {

      l = children.length;

      for ( i = 0, child = children.item( i ); i < l; child = children.item( ++i ) ) {

        if ( o[ child.nodeName ] === undefined ) {

          o[ child.nodeName ] = Nenkraft.Utils.ParsedXMLToJSON( child, _deleteWhitespace );
        
        } else {

          if ( o[ child.nodeName ].push === undefined ) {

            temp = o[ child.nodeName ];
            o[ child.nodeName ] = [];

            if ( !Nenkraft.Utils.IsObjectEmpty( temp ) ) {

              o[ child.nodeName ].push( temp );
            
            }
          
          }

          pchild = Nenkraft.Utils.ParsedXMLToJSON( child, _deleteWhitespace );

          if ( !Nenkraft.Utils.IsObjectEmpty( pchild ) ) {

            o[ child.nodeName ].push( pchild );
          
          }
        
        }
      
      }
    
    }

    if ( o[ '#text' ] && o[ '#text' ].length === 0 ) {

      delete o[ '#text' ];
    
    }

    return o;
  
  };

  Nenkraft.Utils.XMLToJSON = function ( _xml, _deleteWhitespace ) {

    if ( DPARSER == null ) {

      DPARSER = new DOMParser();
    
    }

    return Nenkraft.Utils.ParsedXMLToJSON( DPARSER.parseFromString( _xml, 'text/xml' ), _deleteWhitespace );
  
  };

  Nenkraft.Utils.DownloadAsJSON = function( _obj, _fileName ) {

    var url = 'data:text/json;charset=utf-8,' + encodeURIComponent( JSON.stringify( _obj ) );
    var a = document.createElement( 'a' );
    a.setAttribute( 'href', url );
    a.setAttribute( 'download', _fileName + '.json' );
    a.click();
  
  };

};
