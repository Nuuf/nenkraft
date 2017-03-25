( function ()
{
	"use strict";
    nk.Debug.Draw.Polygon = function(_rc, _po, _style, _drawBounds)
    {
        if (_po.vertices.length === 0) return;
        _rc.save();
        _rc.beginPath();
        var i = 1, vertices = _po.vertices, l = vertices.length, vertex = vertices[0];
        _rc.moveTo(vertex.x, vertex.y);
        for (i; i < l; ++i)
        {
            vertex = vertices[i];
            _rc.lineTo(vertex.x, vertex.y);
        }
        _rc.closePath();
        if (_style.lineWidth) _rc.lineWidth = _style.lineWidth;
        if (_style.fillStyle)
        {
            _rc.fillStyle = _style.fillStyle;
            _rc.fill();
        }
        if (_style.strokeStyle)
        {
            _rc.strokeStyle = _style.strokeStyle;
            _rc.stroke();
        }
        _rc.restore();
        if (_drawBounds === true)
        {
            _rc.save();
            _rc.beginPath();
            var aabb = _po.aabb;
            _rc.moveTo(aabb.tl.x, aabb.tl.y);
            _rc.lineTo(aabb.br.x, aabb.tl.y);
            _rc.lineTo(aabb.br.x, aabb.br.y);
            _rc.lineTo(aabb.tl.x, aabb.br.y);
            _rc.closePath();
            _rc.lineWidth = 0.5;
            _rc.strokeStyle = '#00FFFF';
            _rc.stroke();
            _rc.restore();
        }
    };
}());