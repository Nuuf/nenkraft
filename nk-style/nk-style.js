( function () {
  "use strict";
  nk.Style.Create = function () {
    return { fill: new nk.Style.Fill(), line: new nk.Style.Line(), shadow: new nk.Style.Shadow(), text: new nk.Style.Text() };
  };
}() );