/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  function Stroke ( _props ) {
    if ( !( this instanceof Stroke ) ) return new Stroke( _props );
    Nenkraft.Utils.ApplyProperties( this, _props );
  }
  Stroke.prototype = Object.create( null );
  Stroke.prototype.constructor = Stroke;
  //Static
  Nenkraft.Style.LINE_CAP = {
    ROUND: 'round',
    BUTT: 'butt',
    SQUARE: 'square'
  };
  Nenkraft.Style.LINE_JOIN = {
    BEVEL: 'bevel',
    ROUND: 'round',
    MITER: 'miter'
  };
  //Members
  Stroke.prototype.color = '#00FFFF';
  Stroke.prototype.lineCap = Nenkraft.Style.LINE_CAP.ROUND;
  Stroke.prototype.lineJoin = Nenkraft.Style.LINE_JOIN.ROUND;
  Stroke.prototype.lineWidth = 1;
  Stroke.prototype.miterLimit = 10;
  Stroke.prototype.applied = true;
  //Methods
  Stroke.prototype.Apply = function ( _rc ) {
    _rc.strokeStyle = this.color;
    _rc.lineCap = this.lineCap;
    _rc.lineJoin = this.lineJoin;
    _rc.lineWidth = this.lineWidth;
    _rc.miterLimit = this.miterLimit;
  };

  Nenkraft.Style.Stroke = Stroke;
};
