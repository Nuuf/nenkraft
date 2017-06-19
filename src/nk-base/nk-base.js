module.exports = function ( nk ) {
  nk.Geom = Object.create( null );
  nk.Style = Object.create( null );
  nk.Debug = Object.create( null );
  nk.Math = Object.create( null );
  nk.Utils = Object.create( null );
  nk.Entity = Object.create( null );
  nk.Path = Object.create( null );
  nk.Event = Object.create( null );
  nk.Time = Object.create( null );
  nk.Input = Object.create( null );
  nk.CP = Object.create( null );
  nk.Load = Object.create( null );
  nk.Animator = Object.create( null );
  nk.VERSION = '0.1.12 (Alpha)';
  console.log(
    '%cnenkraft %cversion %c' + nk.VERSION,
    'color:cyan;background-color:black;font-family:Arial;font-size:16px;font-weight:900;',
    'color:magenta;background-color:black;font-family:Arial;font-size:16px;',
    'color:yellow;background-color:black;font-family:Arial;font-size:18px;'
  );
};