/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Stadium ( _options ) {

    if ( !( this instanceof Stadium ) ) return new Stadium( _options );
    this.SetOptions( _options );
    this.stages = [];

    this.ticker = Nenkraft.Time.Ticker( this.Process.bind( this ), 60, _options.halt );
  
  }

  Stadium.prototype = Object.create( null );
  Stadium.prototype.constructor = Stadium;
  // Static

  // Members
  Stadium.prototype.stages = null;
  Stadium.prototype.currentStage = null;
  Stadium.prototype.onlyCurrent = false;
  Stadium.prototype.options = null;
  Stadium.prototype.ticker = null;

  // Methods
  Stadium.prototype.SetOptions = function( _options ) {

    if ( _options != null ) {

      this.options = _options; 
    
    }
  
  };

  Stadium.prototype.CreateStage2D = function( _options ) {

    var id = null;

    if ( typeof _options === 'string' ) {

      id = _options;
      _options = null;
    
    }

    if ( _options == null ) _options = this.options;
    if ( _options == null ) _options = {};

    if ( id !== null ) {

      _options.id = id;
    
    }

    var canvas = document.createElement( 'canvas' );
    if ( _options.width != null ) canvas.width = _options.width;
    if ( _options.height != null ) canvas.height = _options.height;
    if ( _options.className != null ) canvas.className = _options.className;

    if ( _options.rootNode == null ) _options.rootNode = document.body;

    _options.rootNode.appendChild( canvas );
    _options.canvas = canvas;
    _options.noTicker = true;
    _options.halt = true;

    var stage = Nenkraft.Stage2D( _options );

    _options.id = undefined;
    _options.canvas = undefined;

    this.stages.push( stage );

    return stage;

  };

  Stadium.prototype.GetStages = function() {

    var rStages = [];

    for ( var i = 0, stages = this.stages, l = stages.length, stage; i < l; ++i ) {

      stage = stages[i];

      for ( var j = 0; j < arguments.length; ++j ) {

        if ( stage.id === arguments[j] ) {

          rStages.push( stage );
        
        } 
      
      }
    
    }

    return rStages;

  };

  Stadium.prototype.Process = function( _delta ) {

    for ( var i = 0, stages = this.stages, l = stages.length; i < l; ++i ) {

      stages[i].MixedProcess( _delta );
    
    }
  
  };

  Nenkraft.Entity.Stadium = Stadium;
  Nenkraft.Stadium = Stadium;

};
