/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  Nenkraft.Geom = Object.create( null );
  Nenkraft.Math = Object.create( null );
  Nenkraft.Utils = Object.create( null );
  Nenkraft.Entity = Object.create( null );
  Nenkraft.Event = Object.create( null );
  Nenkraft.Time = Object.create( null );
  Nenkraft.CP = Object.create( null );
  Nenkraft.VERSION = '0.4.1 (Alpha)';
  console.log( 'nenkraft-behind version ' + Nenkraft.VERSION );
};
