module.exports = function ( nk ) {
  "use strict";
  var PII = nk.Math.PII;
  nk.Debug.Draw = {};
  /*
  * @parameter _rc: RenderingContext
  * @parameter _po: Polygon
  * @parameter _style: StyleObject
  * @parameter _drawBounds: Boolean
  */
  nk.Debug.BOUNDS_STYLE = null;
  nk.Debug.Draw.Polygon2D = function () { };
  nk.Debug.Draw.AABB2D = function () { };
  /*
  * @parameter _rc: RenderingContext
  * @parameter _p: Point
  * @parameter _radius: Number
  * @parameter _style: StyleObject
  */
  nk.Debug.Draw.Circle = function () { };
  /*
  * @parameter _rc: RenderingContext
  * @parameter _p: Point
  * @parameter _text: String
  * @parameter _style: StyleObject
  */
  nk.Debug.Draw.Text = function () { };
};