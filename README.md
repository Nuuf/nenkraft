![Nenkraft][logo]

[![Build Status](https://travis-ci.org/Nuuf/nenkraft.svg?branch=master)](https://travis-ci.org/Nuuf/nenkraft)

# Version 0.1.51 (Alpha)
------

#### Nenkraft is a small rendering tool.

### How-to
------

Click [here for the mini-file]

1. Clone the repository `git clone https://github.com/Nuuf/nenkraft.git`
2. Run `npm i`
3. Run `npm start`

> Optional: Dev with electron.

1. Install electron `npm i -g electron`
2. Run `electron .`

> Optional: Just serve it

1. Install http-server `npm i -g http-server`
2. Run `http-server dist`

> Optional: Entity Server

1. Run `cd server`
2. Run `npm i`
3. Run `node index.js`

> Optional: Clean/Rebuild

1. Run `npm run clean`
2. Run `npm run build-x`

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