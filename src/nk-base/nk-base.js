/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  Nenkraft.Geom = Object.create( null );
  Nenkraft.Style = Object.create( null );
  Nenkraft.Math = Object.create( null );
  Nenkraft.Utils = Object.create( null );
  Nenkraft.Texture = Object.create( null );
  Nenkraft.Controller = Object.create( null );
  Nenkraft.Entity = Object.create( null );
  Nenkraft.Path = Object.create( null );
  Nenkraft.Event = Object.create( null );
  Nenkraft.Time = Object.create( null );
  Nenkraft.Input = Object.create( null );
  Nenkraft.CP = Object.create( null );
  Nenkraft.Load = Object.create( null );
  Nenkraft.Animator = Object.create( null );        
  Nenkraft.VERSION = '1.0.5';

  Nenkraft.PRINT_VERSION = function() {

    console.log(
      '%cnenkraft %cversion %c' + Nenkraft.VERSION,
      'color:cyan;background-color:black;font-family:Arial;font-size:16px;font-weight:900;',
      'color:magenta;background-color:black;font-family:Arial;font-size:16px;',
      'color:yellow;background-color:black;font-family:Arial;font-size:18px;'
    );
  
  };

};
