module.exports = function ( Nenkraft ) {
  'use strict';
  var Super = Nenkraft.Entity.Container2D;
  function Text ( _x, _y, _text ) {
    if ( !( this instanceof Text ) ) return new Text( _x, _y );
    Super.call( this, _x, _y );
    if ( _text !== undefined ) this.text = _text;
    this.style = Nenkraft.Style.CreateSaT();
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
    if ( this.render === true ) {
      if ( this.transformShouldUpdate === true ) {
        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      }
      this.transform.ApplyWorld( _rc );
      if ( this.display === true ) {
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
      if ( this.children.length > 0 ) {
        this.DrawChildren( _rc );
      }
    }
  };
  Text.prototype.IntersectsPoint = function ( _v ) {
    return false;
  };
  Nenkraft.Entity.Text = Text;
  Nenkraft.Text = Text;
};
