![alt text][logo]

[![Build Status](https://travis-ci.org/Nuuf/nenkraft.svg?branch=master)](https://travis-ci.org/Nuuf/nenkraft)

# Version 0.0.3 (Omega)

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
