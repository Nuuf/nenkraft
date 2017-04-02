module.exports = function ( nk ) {
  "use strict";
  var Super = nk.Container2D;
  function Text( _x, _y, _text ) {
    if ( this instanceof Text ) {
      Super.call( this, _x, _y );
      this.visible = true;
      this.text = _text === undefined ? 'Empty' : _text;
      this.maxWidth = undefined;
      this.style = nk.Style.CreateSaT();
    }
    else return new Text( _x, _y );
  }
  Text.prototype = Object.create( Super.prototype );
  Text.prototype.constructor = Text;
  Text.prototype.Draw = function ( _rc ) {
    if ( this.render === true ) {
      var position = this.position, scale = this.scale, style = this.style;
      _rc.save();
      _rc.translate( position.x, position.y );
      _rc.rotate( this.rotation );
      _rc.scale( scale.x, scale.y );
      if ( this.visible === true ) {
        if ( style.shadow.applied === true ) {
          style.shadow.Apply( _rc );
        }
        if ( style.text.applied === true ) {
          style.text.Apply( _rc );
          _rc.fillText( this.text, 0, 0 );
        }
      }
      this.DrawChildren( _rc );
      _rc.restore();
    }
  };
  nk.Entity.Text = Text;
  nk.Text = Text;
};