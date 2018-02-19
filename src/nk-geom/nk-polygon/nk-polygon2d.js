/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Polygon2D ( _vertices ) {

    if ( !( this instanceof Polygon2D ) ) return new Polygon2D( _vertices );
    this.vertices = [];
    this.normals = [];
    this.perimeterMidPoints = [];
    this.centroid = Nenkraft.Vector2D();

    if ( _vertices != null ) {

      if ( _vertices[ 0 ] instanceof Nenkraft.Vector2D ) {

        this.AddPoints( _vertices );
      
      } else {

        this.PushPoints( _vertices );
      
      }
    
    }
  
  }

  Polygon2D.prototype = Object.create( null );
  Polygon2D.prototype.constructor = Polygon2D;
  // Static
  Polygon2D.TYPE = 3;

  Polygon2D.CreateCopy = function ( _polygon ) {

    var p = new Polygon2D();

    for ( var i = 0, vertices = _polygon.vertices, l = vertices.length; i < l; ++i ) {

      p.AddPoint( vertices[ i ].Copy() );
    
    }

    return p;
  
  };

  Polygon2D.Construct = Object.create( null );

  Polygon2D.Construct.Rectangular = function ( _po, _x, _y, _w, _h ) {

    var tl = Nenkraft.Vector2D( _x, _y );
    var tr = Nenkraft.Vector2D( _x + _w, _y );
    var br = Nenkraft.Vector2D( _x + _w, _y + _h );
    var bl = Nenkraft.Vector2D( _x, _y + _h );
    _po.Recreate( [ tl, tr, br, bl ] );
    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Isosceles = function ( _po, _x, _y, _w, _h ) {

    var tm = Nenkraft.Vector2D( _x, _y );
    var br = Nenkraft.Vector2D( _x + _w * 0.5, _y + _h );
    var bl = Nenkraft.Vector2D( _x - _w * 0.5, _y + _h );
    _po.Recreate( [ tm, br, bl ] );
    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Cyclic = function ( _po, _x, _y, _ra, _acc ) {

    var i = 0, l = _acc, x, y, th, an = Math.PI * 2 / l;
    _po.Recreate( [] );

    for ( i; i < l; ++i ) {

      th = an * i;
      x = Math.cos( th ) * _ra;
      y = Math.sin( th ) * _ra;
      _po.AddPoint( Nenkraft.Vector2D( _x + x, _y + y ) );
    
    }

    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Equilateral = function ( _po, _x, _y, _side ) {

    var an = 2.0943951023931953;
    var x, y;
    _po.Recreate( [] );
    x = Math.cos( 0 ) * _side;
    y = Math.sin( 0 ) * _side;
    _po.AddPoint( Nenkraft.Vector2D( _x + x, _y + y ) );
    x = Math.cos( an ) * _side;
    y = Math.sin( an ) * _side;
    _po.AddPoint( Nenkraft.Vector2D( _x + x, _y + y ) );
    x = Math.cos( an * 2 ) * _side;
    y = Math.sin( an * 2 ) * _side;
    _po.AddPoint( Nenkraft.Vector2D( _x + x, _y + y ) );
    _po.Rotate( Nenkraft.Math.RADIAN * -90 );
    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Star = function ( _po, _x, _y, _ora, _ira, _cors ) {

    var i = 0, l = _cors * 2, x, y, th, an = Math.PI * 2 / l, ra;
    _po.Recreate( [] );

    for ( i; i < l; ++i ) {

      ra = ( i & 1 ) === 0 ? _ora : _ira;
      th = an * i;
      x = Math.cos( th ) * ra;
      y = Math.sin( th ) * ra;
      _po.AddPoint( Nenkraft.Vector2D( _x + x, _y + y ) );
    
    }

    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Butterfly = function ( _po, _x, _y, _n, _ra ) {

    var i = 0, x, y, u, c = Polygon2D.Construct.Butterfly.C;
    _po.Recreate( [] );

    for ( i; i < _n; ++i ) {

      u = i * c._1 * Math.PI / _n;
      x = Math.cos( u ) * ( Math.exp( Math.cos( u ) ) - c._2 * Math.cos( c._3 * u ) - Math.pow( Math.sin( u / c._4 ), c._5 ) ) * _ra;
      y = Math.sin( u ) * ( Math.exp( Math.cos( u ) ) - c._2 * Math.cos( c._3 * u ) - Math.pow( Math.sin( u / c._4 ), c._5 ) ) * _ra;
      _po.AddPoint( Nenkraft.Vector2D( _x + x, _y + y ) );
    
    }

    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Butterfly.C = {
    _1: 24,
    _2: 2,
    _3: 4,
    _4: 12,
    _5: 5,
    Reset: function () {

      this._1 = 24;
      this._2 = 2;
      this._3 = 4;
      this._4 = 12;
      this._5 = 5;
    
    }
  };

  Polygon2D.Construct.Supershape = function ( _po, _x, _y, _ra, _acc, _m, _n1, _n2, _n3 ) {

    _n1 = _n1 === undefined ? 1 : _n1;
    _n2 = _n2 === undefined ? 1 : _n2;
    _n3 = _n3 === undefined ? 1 : _n3;
    var i = 0, l = _acc, x, y, a, r, c = Polygon2D.Construct.Supershape.C, t1, t2;
    _po.Recreate( [] );

    for ( i; i < l; ++i ) {

      a = i * Math.PI * 2 / _acc;

      t1 = Math.cos( _m * a / 4 ) / c._A;
      t1 = Math.abs( t1 );
      t1 = Math.pow( t1, _n2 );

      t2 = Math.sin( _m * a / 4 ) / c._B;
      t2 = Math.abs( t2 );
      t2 = Math.pow( t2, _n3 );

      r = Math.pow( t1 + t2, 1 / _n1 );

      if ( Math.abs( r ) === 0 ) {

        x = 0;
        y = 0;
      
      }
      else {

        r = 1 / r;
        x = Math.cos( a ) * r * _ra;
        y = Math.sin( a ) * r * _ra;
      
      }

      _po.AddPoint( Nenkraft.Vector2D( _x + x, _y + y ) );
    
    }

    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Supershape.C = {
    _A: 1,
    _B: 1
  };
  // Members
  Polygon2D.prototype.TYPE = Polygon2D.TYPE;
  Polygon2D.prototype.aabb = null;
  Polygon2D.prototype.dirtyBounds = true;
  Polygon2D.prototype.belongsTo = null;

  // Methods
  Polygon2D.prototype.AddPoint = function ( _p ) {

    this.vertices.push( _p );
  
  };

  Polygon2D.prototype.AddPoints = function ( _ps ) {

    this.vertices.push.apply( this.vertices, _ps );
  
  };

  Polygon2D.prototype.PushPoint = function ( _x, _y ) {

    this.vertices.push( Nenkraft.Vector2D( _x, _y ) );
  
  };

  Polygon2D.prototype.PushPoints = function ( _ps ) {

    for ( var i = 0, l = _ps.length; i < l; i += 2 ) {

      this.PushPoint( _ps[ i ], _ps[ i + 1 ] );
    
    }
  
  };

  Polygon2D.prototype.Recreate = function ( _ps ) {

    this.vertices.length = 0;
    if ( _ps != undefined ) this.vertices.push.apply( this.vertices, _ps );
  
  };

  Polygon2D.prototype.ComputeBounds = function () {

    if ( this.aabb === null ) this.aabb = Nenkraft.Geom.AABB2D();
    var mix = Infinity, max = -mix, miy = mix, may = -mix;

    for ( var i = 0, ps = this.vertices, l = ps.length, p; i < l; ++i ) {

      p = ps[ i ];
      if ( p.x < mix ) mix = p.x;
      if ( p.x > max ) max = p.x;
      if ( p.y < miy ) miy = p.y;
      if ( p.y > may ) may = p.y;
    
    }

    this.aabb.Set( mix, miy, max, may );
    this.dirtyBounds = false;
  
  };

  Polygon2D.prototype.Rotate = function ( _angle, _anchorX, _anchorY, _updateBounds ) {

    if ( this.dirtyBounds === true && _updateBounds === true ) this.ComputeBounds();
    else if ( this.aabb === null ) this.ComputeBounds();
    _anchorX = _anchorX === undefined ? 0.5 : _anchorX;
    var aabb = this.aabb;
    var ap = aabb.tl.Copy();
    ap.AddV( aabb.br );
    ap.Multiply( _anchorX, _anchorY === undefined ? _anchorX : _anchorY );
    var i = 0, ps = this.vertices, l = ps.length, p;

    for ( i; i < l; ++i ) {

      p = ps[ i ];
      p.RotateAroundV( ap, _angle );
    
    }

    this.dirtyBounds = true;
  
  };

  Polygon2D.prototype.GetCentroid = function () {

    var centroid = this.centroid;
    centroid.Set( 0, 0 );

    for ( var i = 0, ps = this.vertices, l = ps.length, p; i < l; ++i ) {

      p = ps[ i ];
      centroid.AddV( p );
    
    }

    centroid.Divide( l, l );
    return centroid;
  
  };

  Polygon2D.prototype.GetNormalsA = function () {

    var normals = this.normals;
    normals.length = 0;

    for (
      var i = 0, vertices = this.vertices, vertex = vertices[ i ], l = this.vertices.length - 1;
      i < l;
      vertex = vertices[ ++i ] ) {

      normals.push( vertex.GetNormalAV( vertices[ i + 1 ] ) );
    
    }

    normals.push( vertices[ l ].GetNormalAV( vertices[ 0 ] ) );
    return normals;
  
  };

  Polygon2D.prototype.GetNormalsB = function () {

    var normals = this.normals;
    normals.length = 0;

    for (
      var i = 0, vertices = this.vertices, vertex = vertices[ i ], l = this.vertices.length - 1;
      i < l;
      vertex = vertices[ ++i ] ) {

      normals.push( vertex.GetNormalBV( vertices[ i + 1 ] ) );
    
    }

    normals.push( vertices[ l ].GetNormalBV( vertices[ 0 ] ) );
    return normals;
  
  };

  Polygon2D.prototype.GetPerimeterMidPoints = function () {

    var perimeterMidPoints = this.perimeterMidPoints;
    perimeterMidPoints.length = 0;

    for (
      var i = 0, vertices = this.vertices, vertex = vertices[ i ], l = this.vertices.length - 1;
      i < l;
      vertex = vertices[ ++i ] ) {

      perimeterMidPoints.push( vertex.GetMidPointV( vertices[ i + 1 ] ) );
    
    }

    perimeterMidPoints.push( vertices[ l ].GetMidPointV( vertices[ 0 ] ) );
    return perimeterMidPoints;
  
  };

  Polygon2D.prototype.IntersectsPoint = function ( _v ) {

    if ( this.dirtyBounds === true ) this.ComputeBounds();
    if ( this.aabb.IntersectsPoint( _v ) === false ) return false;
    var x = _v.x;
    var y = _v.y;
    var intersects = false;
    var i, j;
    var vertices = this.vertices;
    var vertexi, vertexj;
    var l = vertices.length;

    for ( i = 0, j = l - 1; i < l; j = i++ ) {

      vertexi = vertices[ i ];
      vertexj = vertices[ j ];

      if (
        ( ( vertexi.y > y ) !== ( vertexj.y > y ) ) &&
        ( x < ( vertexj.x - vertexi.x ) * ( y - vertexi.y ) / ( vertexj.y - vertexi.y ) + vertexi.x )
      ) {

        intersects = !intersects;
      
      }
    
    }

    return intersects;
  
  };

  Nenkraft.Geom.Polygon2D = Polygon2D;

};
