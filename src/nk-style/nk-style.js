module.exports = function ( Nenkraft ) {
  'use strict';
  Nenkraft.Style.CreateAll = function () {
    return { fill: new Nenkraft.Style.Fill(), stroke: new Nenkraft.Style.Stroke(), shadow: new Nenkraft.Style.Shadow(), text: new Nenkraft.Style.Text() };
  };
  Nenkraft.Style.CreateFSSa = function () {
    return { fill: new Nenkraft.Style.Fill(), stroke: new Nenkraft.Style.Stroke(), shadow: new Nenkraft.Style.Shadow() };
  };
  Nenkraft.Style.CreateSSa = function () {
    return { stroke: new Nenkraft.Style.Stroke(), shadow: new Nenkraft.Style.Shadow() };
  };
  Nenkraft.Style.CreateFSa = function () {
    return { fill: new Nenkraft.Style.Fill(), shadow: new Nenkraft.Style.Shadow() };
  };
  Nenkraft.Style.CreateSaT = function () {
    return { shadow: new Nenkraft.Style.Shadow(), text: new Nenkraft.Style.Text() };
  };
  Nenkraft.Style.GCO = Object.create( null );
  Nenkraft.Style.GCO.SOURCE_OVER = Nenkraft.Style.GCO.DEFAULT = 'source-over';
  Nenkraft.Style.GCO.SOURCE_IN = 'source-in';
  Nenkraft.Style.GCO.SOURCE_OUT = 'source-out';
  Nenkraft.Style.GCO.SOURCE_ATOP = 'source-atop';
  Nenkraft.Style.GCO.DESTINATION_OVER = 'destination-over';
  Nenkraft.Style.GCO.DESTINATION_IN = 'destination-in';
  Nenkraft.Style.GCO.DESTINATION_OUT = 'destination-out';
  Nenkraft.Style.GCO.DESTINATION_ATOP = 'destination-atop';
  Nenkraft.Style.GCO.LIGHTER = 'lighter';
  Nenkraft.Style.GCO.COPY = 'copy';
  Nenkraft.Style.GCO.XOR = 'xor';
  Nenkraft.Style.GCO.MULTIPLY = 'multiply';
  Nenkraft.Style.GCO.OVERLAY = 'overlay';
  Nenkraft.Style.GCO.DARKEN = 'darken';
  Nenkraft.Style.GCO.LIGHTEN = 'lighten';
  Nenkraft.Style.GCO.COLOR_DODGE = 'color-dodge';
  Nenkraft.Style.GCO.COLOR_BURN = 'color-burn';
  Nenkraft.Style.GCO.HARD_LIGHT = 'hard-light';
  Nenkraft.Style.GCO.SOFT_LIGHT = 'soft-light';
  Nenkraft.Style.GCO.DIFFERENCE = 'difference';
  Nenkraft.Style.GCO.EXCLUSION = 'exclusion';
  Nenkraft.Style.GCO.HUE = 'hue';
  Nenkraft.Style.GCO.SATURATION = 'saturation';
  Nenkraft.Style.GCO.COLOR = 'color';
  Nenkraft.Style.GCO.LUMINOSITY = 'luminosity';
};
