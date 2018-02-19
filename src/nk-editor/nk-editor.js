/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Editor () {

    if ( !( this instanceof Editor ) ) return new Editor();

    var canvas = document.createElement( 'canvas' );

    this.stage = Nenkraft.Entity.Stage2D( canvas, 0, 0, true );
    this.camera = Nenkraft.Entity.Camera2D( 0, 0 );
    this.root = Nenkraft.Entity.Container2D();
    this.camera.AddChild( this.root );
    this.stage.AddChild( this.camera );

    this.root.Mount(
      Nenkraft.Entity.Graphic2D( 0, 0, Nenkraft.Path.Line2D( 0, -1000, 0, 1000 ) ),
      Nenkraft.Entity.Graphic2D( 0, 0, Nenkraft.Path.Line2D( -1000, 0, 1000, 0 ) )
    );

    this.stage.mouse.onDown.Add( this.OnMouseDown, this );
    this.stage.mouse.onUp.Add( this.OnMouseUp, this );
    this.stage.mouse.onMove.Add( this.OnMouseMove, this );

    this.dragStart = Nenkraft.Vector2D();
    this.dragOffset = Nenkraft.Vector2D();
  
  }

  Editor.prototype = Object.create( null );
  Editor.prototype.constructor = Editor;
  // Static

  // Members
  Editor.prototype.draggingEntity = null;
  Editor.prototype.dragStart = null;
  Editor.prototype.dragOffset = null;

  // Methods
  Editor.prototype.MountTo = function( _element ) {

    _element.appendChild( this.stage.canvas );
    this.stage.ticker.StartAF();
  
  };

  Editor.prototype.OnMouseDown = function( _event ) {

    console.log( _event );

    var mousePoint = _event.data.position;

    console.log( mousePoint );

    this.draggingEntity = this.camera;

    this.dragStart.SetV( mousePoint );
    this.dragOffset.SetV( this.draggingEntity.position );
  
  };

  Editor.prototype.OnMouseUp = function ( _event ) {

    // var mousePoint = _event.data.position.SubtractVC( this.camera.position );

    this.draggingEntity = null;

  };

  Editor.prototype.OnMouseMove = function ( _event ) {

    if ( this.draggingEntity !== null ) {

      var mousePoint = _event.data.position;

      var newPos = mousePoint.SubtractVC( this.dragStart );
      newPos.AddV( this.dragOffset );

      this.draggingEntity.position.SetV( newPos );
    
    }

  };
 
  Nenkraft.Editor = Editor;

};
