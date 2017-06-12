module.exports = function ( nk ) {
  'use strict';
  var Super = nk.Entity.Container2D;
  function Text ( _x, _y, _text ) {
    if ( !( this instanceof Text ) ) return new Text( _x, _y );
    Super.call( this, _x, _y );
    if ( _text !== undefined ) this.text = _text;
    this.style = nk.Style.CreateSaT();
  }
  Text.prototype = Object.create( Super.prototype );
  Text.prototype.constructor = Text;
  //Static

  //Members
  Text.prototype.text = '';
  Text.prototype.visible = true;
  Text.prototype.maxWidth = undefined;
  //Methods
  Text.prototype.Draw = function ( _rc ) {
    if ( this.display === true ) {
      this.UpdateAndApplyTransform( _rc );
      if ( this.render === true ) {
        var style = this.style;
        if ( style.shadow.applied === true ) {
          style.shadow.Apply( _rc );
        }
        if ( style.text.applied === true ) {
          style.text.Apply( _rc );
          _rc.fillText( this.text, 0, 0, this.maxWidth );
          _rc.strokeText( this.text, 0, 0, this.maxWidth );
        }
      }
      this.DrawChildren( _rc );
    }
  };
  Text.prototype.IntersectsPoint = function ( _v ) {
    return false;
  };
  nk.Entity.Text = Text;
  nk.Text = Text;
};