( function () {
  "use strict";
  nk.Style.CreateAll = function () {
    return { fill: new nk.Style.Fill(), stroke: new nk.Style.Stroke(), shadow: new nk.Style.Shadow(), text: new nk.Style.Text() };
  };
  nk.Style.CreateFSSa = function () {
    return { fill: new nk.Style.Fill(), stroke: new nk.Style.Stroke(), shadow: new nk.Style.Shadow() };
  };
  nk.Style.CreateSSa = function () {
    return { stroke: new nk.Style.Stroke(), shadow: new nk.Style.Shadow() };
  };
  nk.Style.CreateFSa = function () {
    return { fill: new nk.Style.Fill(), shadow: new nk.Style.Shadow() };
  };
  nk.Style.CreateSaT = function () {
    return { shadow: new nk.Style.Shadow(), text: new nk.Style.Text() };
  };
}() );