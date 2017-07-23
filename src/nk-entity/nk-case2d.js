module.exports = function ( Nenkraft ) {
  'use strict';
  var Super = Nenkraft.Entity.Container2D;
  function Case2D ( _x, _y ) {
    if ( !( this instanceof Case2D ) ) return new Case2D( _x, _y );
    Super.call( this, _x, _y );
  }
  Case2D.prototype = Object.create( Super.prototype );
  Case2D.prototype.constructor = Case2D;
  //Static
  //Members
  //Methods
  delete Case2D.prototype.Draw;
  delete Case2D.prototype.DrawChildren;
  Case2D.prototype.Render = function () {
    if ( this.display === true ) {
      if ( this.transformShouldUpdate === true ) {
        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      }
      this.RenderChildren( _rc );
    }
  };
  Case2D.prototype.RenderChildren = function () {
    for ( var i = 0, children = this.children, l = children.length, child; i < l; ++i ) {
      child = children[ i ];
      if ( child.Render ) child.Render();
    }
  };
  Nenkraft.Entity.Case2D = Case2D;
  Nenkraft.Case2D = Case2D;
};