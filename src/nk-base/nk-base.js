module.exports = function ( nk ) {
  nk.Geom = {};
  nk.Style = {};
  nk.Debug = {
    Draw: {}
  };
  nk.Math = {};
  nk.Utils = {};
  nk.Entity = {};
  nk.Path = {};
  nk.Event = {};
  nk.Time = {};
  nk.Input = {};
  nk.CP = {};
  nk.Load = {};
  nk.VERSION = '0.0.5 (Omega)';
  console.log(
    '%cnenkraft %cversion %c' + nk.VERSION,
    'color:cyan;background-color:black;font-family:Arial;font-size:16px;font-weight:900;',
    'color:magenta;background-color:black;font-family:Arial;font-size:16px;',
    'color:yellow;background-color:black;font-family:Arial;font-size:18px;'
  );
};