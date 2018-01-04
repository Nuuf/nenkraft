/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Geom.Circle;

  function Circle ( _x, _y, _radius, _style ) {

    if ( !( this instanceof Circle ) ) return new Circle( _x, _y, _radius, _style );
    Super.call( this, _x, _y, _radius );
    this.style = Nenkraft.Style.CreateFSSa( _style );
  
  }

  Circle.prototype = Object.create( Super.prototype );
  Circle.prototype.constructor = Circle;
  // Static

  // Members

  // Methods
  Circle.prototype.Draw = function ( _rc ) {

    var center = this.center, style = this.style, fill = style.fill, stroke = style.stroke, shadow = style.shadow;
    _rc.beginPath();
    _rc.arc( center.x, center.y, this.radius, 0, Nenkraft.Math.PII, false );
    _rc.closePath();
    if ( shadow.applied === true ) shadow.Apply( _rc );

    if ( fill.applied === true ) {

      fill.Apply( _rc );
      _rc.fill();
    
    }

    if ( stroke.applied === true ) {

      stroke.Apply( _rc );
      _rc.stroke();
    
    }
  
  };

  Circle.prototype.GLDraw = function ( _gl, _transform ) {

    if ( this.programController !== null ) {

      this.programController.Execute(
        _transform.worldTransform.AsArray( true ),
        this.center.x, this.center.y, this.radius
      );
    
    }
  
  };

  Circle.prototype.LinkProgramController = function ( _pc ) {

    this.programController = _pc;
    this.LinkStyle();
  
  };

  Circle.prototype.UseProgramController = function ( _pc ) {

    this.programController = _pc;
  
  };

  Circle.prototype.LinkStyle = function () {

    var pc = this.programController;

    if ( pc !== null && pc.fillColor !== null && pc.outlineColor !== null && pc.outline !== null ) {

      pc.fillColor.SetHex( this.style.fill.color );
      pc.fillColor.Normalize();
      pc.outlineColor.SetHex( this.style.stroke.color );
      pc.outlineColor.Normalize();
      pc.outline = this.style.stroke.lineWidth + 0.2;
    
    }
  
  };

  Nenkraft.Path.Circle = Circle;

};
