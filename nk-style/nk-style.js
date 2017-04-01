( function () {
  "use strict";
  nk.Style.Create = function () {
    return { fill: new nk.Style.Fill(), stroke: new nk.Style.Stroke(), shadow: new nk.Style.Shadow(), text: new nk.Style.Text() };
  };
}() );