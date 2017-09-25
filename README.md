![Nenkraft][logo]

[![Build Status](https://travis-ci.org/Nuuf/nenkraft.svg?branch=master)](https://travis-ci.org/Nuuf/nenkraft)

# Version 0.1.63 (Alpha)
------

#### Nenkraft is a small rendering tool.

### How-to
------

Click [here for the mini-file]

```
  $ git clone https://github.com/Nuuf/nenkraft.git
  $ npm i
  $ npm start
```

> Optional: Dev with electron.

```
  $ npm i -g electron
  $ electron .
```

> Optional: Just serve it

```
  $ npm i -g http-server
  $ http-server dist
```

> Optional: Entity Server

```
  $ cd server 
  $ npm i
  $ node index.js
```

> Optional: Clean/Rebuild

```
  $ npm run clean
  $ npm run build-x
```


### Some Examples
------

> Hello world

```javascript
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    var stageEntity = nk.Stage2D( c, 0 /* OriginX */, 0 /* OriginY */);
    var textEntity = nk.Text(0, 0, 'Hello World!');
    stageEntity.AddChild(textEntity);
```

> Loading an image and creating a sprite

```javascript
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    var stageEntity = nk.Stage2D( c );
    var imageCache = new nk.Load.TextureLoader();
    var spriteEntity = null;
    imageCache.onComplete.Add(Start);
    imageCache.Load([
        {id: 'imageId', src: 'path/to/file'}
    ]);
    function Start() {
        spriteEntity = new nk.Sprite(0, 0, imageCache.Get('imageId'));
        stageEntity.AddChild(spriteEntity);
    }
```

Click [here for more examples]

[logo]: ./images/nenkraft-banner.png "nenkraft"
[here for more examples]: https://github.com/Nuuf/nenkraft/tree/master/tests/nk-tests
[here for the mini-file]: https://raw.githubusercontent.com/Nuuf/nenkraft/master/dist/nk.min.js