/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Geom.Line2D;

  function Line2D ( _arg0, _arg1, _arg2, _arg3, _style ) {

    if ( !( this instanceof Line2D ) ) return new Line2D( _arg0, _arg1, _arg2, _arg3, _style );
    Super.call( this, _arg0, _arg1, _arg2, _arg3 );
    this.style = Nenkraft.Style.CreateSSa( _style );
  
  }

  Line2D.prototype = Object.create( Super.prototype );
  Line2D.prototype.constructor = Line2D;
  // Static

  // Members
  Line2D.prototype.style = null;
  Line2D.prototype.programController = null;

  // Methods
  Line2D.prototype.Draw = function ( _rc ) {

    var s = this.s, e = this.e, style = this.style, stroke = style.stroke, shadow = style.shadow;
    _rc.beginPath();
    _rc.moveTo( s.x, s.y );
    _rc.lineTo( e.x, e.y );
    _rc.closePath();
    if ( shadow.applied === true ) shadow.Apply( _rc );

    if ( stroke.applied === true ) {

      stroke.Apply( _rc );
      _rc.stroke();
    
    }
  
  };

  Line2D.prototype.GLDraw = function ( _gl, _transform ) {

    if ( this.programController !== null ) {

      this.programController.Execute(
        _transform.worldTransform.AsArray( true ),
        this.s, this.e
      );
    
    }
  
  };

  Line2D.prototype.LinkProgramController = function ( _pc ) {

    this.programController = _pc;
    this.LinkStyle();
  
  };

  Line2D.prototype.UseProgramController = function ( _pc ) {

    this.programController = _pc;
  
  };

  Line2D.prototype.LinkStyle = function () {

    var pc = this.programController;

    if ( pc !== null && pc.color !== null ) {

      pc.color.SetHex( this.style.stroke.color );
      pc.color.Normalize();
    
    }
  
  };

  Nenkraft.Path.Line2D = Line2D;
  Nenkraft.Path.Ray2D = Line2D;

};
