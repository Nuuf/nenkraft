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
};