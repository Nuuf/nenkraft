![alt text][logo]

[![Build Status](https://travis-ci.org/Nuuf/nenkraft.svg?branch=master)](https://travis-ci.org/Nuuf/nenkraft)

# Version 0.0.35 (Omega)

[logo]: ./images/nenkraft-banner.png "nenkraft"

```javascript
//Create a container
var container = nk.Container2D();
//Create a texture
var texture = nk.Path.Polygon2D();
//Construct texture
nk.Geom.Polygon2D.Construct.Circlic( texture, 0, 0, 100, 30 );
//Create a graphic object
var graphic = nk.Graphic2D( 0, 0, texture );
//Add to container
container.AddChild( graphic );
//Draw container
container.Draw( rc ); //Where rc=renderingContext=canvas.getContext
```

```javascript
var canvas = document.createElement('canvas');
canvas.width = 600;
canvas.height = 400;
document.body.appendChild(canvas);

var x = 0, y = 0, start = true;
var stage = new nk.Stage2D( canvas, x, y, !start);

stage.AddChild(new nk.Graphic2D( 0, 0, new nk.Path.Circle(0, 0, 100)));
```