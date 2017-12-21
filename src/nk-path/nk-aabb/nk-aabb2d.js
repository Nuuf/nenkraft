/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  var Super = Nenkraft.Geom.AABB2D;
  function AABB2D ( _arg0, _arg1, _arg2, _arg3, _style ) {
    if ( !( this instanceof AABB2D ) ) return new AABB2D( _arg0, _arg1, _arg2, _arg3, _style );
    Super.call( this, _arg0, _arg1, _arg2, _arg3 );
    this.style = Nenkraft.Style.CreateFSSa( _style );
  }
  AABB2D.prototype = Object.create( Super.prototype );
  AABB2D.prototype.constructor = AABB2D;
  //Static

  //Members

  //Methods
  AABB2D.prototype.Draw = function ( _rc ) {
    var tl = this.tl, br = this.br, style = this.style, fill = style.fill, stroke = style.stroke, shadow = style.shadow;
    _rc.beginPath();
    _rc.moveTo( tl.x, tl.y );
    _rc.lineTo( br.x, tl.y );
    _rc.lineTo( br.x, br.y );
    _rc.lineTo( tl.x, br.y );
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
  AABB2D.prototype.GLDraw = function ( _gl, _transform ) {
    if ( this.programController !== null ) {
      this.programController.Execute(
        _transform.worldTransform.AsArray( true ),
        this.tl.x, this.tl.y, this.w, this.h
      );
    }
  };
  AABB2D.prototype.LinkProgramController = function ( _pc ) {
    this.programController = _pc;
    this.LinkStyle();
  };
  AABB2D.prototype.UseProgramController = function ( _pc ) {
    this.programController = _pc;
  };
  AABB2D.prototype.LinkStyle = function () {
    var pc = this.programController;
    if ( pc !== null && pc.fillColor !== null && pc.outlineColor !== null && pc.outline !== null ) {
      pc.fillColor.SetHex( this.style.fill.color );
      pc.fillColor.Normalize();
      pc.outlineColor.SetHex( this.style.stroke.color );
      pc.outlineColor.Normalize();
      pc.outline = this.style.stroke.lineWidth + 0.2;
    }
  };
  Nenkraft.Path.AABB2D = AABB2D;
};
