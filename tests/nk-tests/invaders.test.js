module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Invaders' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', 1024 );
    c.setAttribute( 'height', 800 );
    c.style.border = '2px solid black';
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '50%';
    c.style.transform = 'translateX(-50%)';

    var W = c.width, HW = W * 0.5;
    var H = c.height;

    var RI = nk.Utils.RandomInteger;
    var RF = nk.Utils.RandomFloat;
    var COLLIDE = nk.Math.Collision2D.AABB2DvsAABB2D.Relative.Collide;

    var stage = new nk.Stage2D( c, 0, 0, true, true );
    stage.gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    var pc = new nk.GLTextureProgramController( stage.gl );

    var worldBounds = new nk.AABB2D();
    stage.ComputeBounds();
    worldBounds.SetC( stage.bounds );

    var playerBulletPool = new nk.Pool();
    var enemyPool = new nk.Pool();

    var worldScale = new nk.Vector2D( 2.0, 2.0 );
    var ship = null;
    // var enemyBullets = [];
    var playerBullets = [];
    var enemies = [];
    var shields = [];

    var shieldHealth = 3;
    var numShields = 22;

    var shieldVerticalPosition = 500;

    var enemySpawnRate = 2;
    var enemySpeed = 3.0;
    var enemyHealth = 20;

    var root = new nk.QuadtreeNode( worldBounds, 0, 5, 5 );

    var imageLoader = new nk.ImageLoader( [ {
      id: 'sheet',
      src: './../assets/images/invaders/invaders.png',
      w: 16, h: 16, fw: 128, fh: 16
    }], true, function () {

      go();
    
    } );

    function go () {

      stage.ticker.Start();
      pc.BindBasicTexture( imageLoader.GetBasicTexture( 'sheet' ) );
      playerBulletPool.Flood( function () {

        var b = new nk.Sprite( 0, 0, pc );
        b.scale.SetV( worldScale );
        b.UpdateShape();
        b.anchor.Set( 0.5 );
        b.data.velocity = new nk.Vector2D();
        b.data.body = {
          relative: b.position,
          shape: b.shape,
          anchor: b.anchor
        };
        b.clip.Set( 16 * 7, 0, 16, 16 );
        return b;
      
      }, 1000 );
      enemyPool.Flood( function () {

        var e = new nk.Sprite( 0, 0, pc );
        e.scale.SetV( worldScale );
        e.UpdateShape();
        e.anchor.Set( 0.5 );
        e.data.velocity = new nk.Vector2D();
        e.data.body = {
          relative: e.position,
          shape: e.shape,
          anchor: e.anchor
        };
        e.clip.Set( 16 * RI( 1, 2 ), 0, 16, 16 );
        return e;
      
      }, 1000 );
      createShip();
      createShields();
      setupListeners();
      setupProcess();
    
    }

    function createShip () {

      if ( ship ) return;
      ship = new nk.Sprite( 0, 0, pc );
      ship.scale.SetV( worldScale );
      ship.UpdateShape();
      ship.anchor.Set( 0.5 );
      ship.x = HW;
      ship.y = H - ship.height * 0.5;
      ship.data.velocity = new nk.Vector2D();
      ship.data.moveSpeed = 8;
      ship.data.fire = false;
      ship.data.fireRate = 2;
      ship.data.fireTimer = 0;
      ship.data.bulletsPerBlast = 50;
      stage.Mount( ship );
    
    }

    function createPlayerBullet () {

      var i = ship.data.bulletsPerBlast;
      while ( i-- ) {

        var b = playerBulletPool.Retrieve();
        b.x = ship.x;
        b.y = ship.y;
        b.data.velocity.x = 0;
        b.data.velocity.y = RF( -20, -1 );
        b.data.velocity.Rotate( nk.Math.DTR(
          nk.Math.Spread( 0, ship.data.bulletsPerBlast, RF( 1, 2 ), i )
        ) );
        if ( b.data.velocity.y > 0 ) {

          b.data.velocity.y = -b.data.velocity.y;
        
        }

        b.data.lifeSpan = 200;
        playerBullets.push( b );
        stage.Mount( b );
      
      }
    
    }

    function createEnemy () {

      var e = enemyPool.Retrieve();
      e.x = RF( 0, W );
      e.y = 0 - e.height * 0.5;
      e.data.velocity.x = 0;
      e.data.velocity.y = enemySpeed;
      e.data.health = enemyHealth;
      enemies.push( e );
      stage.Mount( e );
    
    }

    function createShields () {

      for ( var i = 0; i < numShields; ++i ) {

        var s = new nk.Sprite( 0, 0, pc );
        s.transformAutomaticUpdate = false;
        s.scale.SetV( worldScale );
        s.UpdateShape();
        s.anchor.Set( 0.5 );
        s.data.health = shieldHealth;
        s.data.body = {
          relative: s.position,
          shape: s.shape,
          anchor: s.anchor
        };
        s.x = nk.Math.Spread( HW, numShields, s.width * 1.2, i );
        s.y = shieldVerticalPosition;
        s.clip.Set( 16 * 3, 0, 16, 16 );
        shields.push( s );
        stage.Mount( s );
      
      }
    
    }

    function setupListeners () {

      stage.keyboard.onDown.Add( onKeyDown, ship );
      stage.keyboard.onUp.Add( onKeyUp, ship );

      function onKeyDown ( event ) {

        var kc = event.data.keyCode;
        //console.log( kc );
        switch ( kc ) {

          case 37:
            this.data.moveLeft = true;
            break;
          case 39:
            this.data.moveRight = true;
            break;
          case 32:
            this.data.fire = true;
            break;
          default: break;
        
        }
      
      }

      function onKeyUp ( event ) {

        var kc = event.data.keyCode;
        switch ( kc ) {

          case 37:
            this.data.moveLeft = false;
            break;
          case 39:
            this.data.moveRight = false;
            break;
          case 32:
            this.data.fire = false;
            break;
          default: break;
        
        }
      
      }
    
    }

    function setupProcess () {

      stage.onProcess.Add( onProcess, stage );

      function onProcess () {

        handleShip();
        if ( RI( 1, enemySpawnRate ) === enemySpawnRate ) {

          createEnemy();
        
        }

        handleEnemies();
        root.Dump();
        var i;
        for ( i = 0; i < enemies.length; ++i ) {

          root.Add( enemies[ i ].bounds );
        
        }

        handlePlayerBullets();
        if ( this.ticker.GetTPS() < 40 ) {

          console.log( this.ticker.GetTPS() );
        
        }
      
      }

      function handleShip () {

        var shipWHalf = ship.width * 0.5;
        if ( ship.data.moveLeft && ship.x > 0 + shipWHalf ) {

          ship.data.velocity.x = -ship.data.moveSpeed;
        
        } else if ( ship.data.moveRight && ship.x < W - shipWHalf ) {

          ship.data.velocity.x = ship.data.moveSpeed;
        
        } else {

          ship.data.velocity.x = 0;
        
        }

        ship.position.AddV( ship.data.velocity );
        if ( ship.x < 0 + shipWHalf ) {

          ship.x = 0 + shipWHalf;
        
        } else if ( ship.x > W - shipWHalf ) {

          ship.x = W - shipWHalf;
        
        }

        if ( ship.data.fire && ship.data.fireTimer === 0 ) {

          createPlayerBullet();
          ship.data.fireTimer = ship.data.fireRate;
        
        }

        if ( ship.data.fireTimer > 0 ) {

          ship.data.fireTimer--;
        
        }
      
      }

      function handlePlayerBullets () {

        for ( var i = 0, bullet; i < playerBullets.length; ++i ) {

          bullet = playerBullets[ i ];
          if ( bullet ) {

            bullet.position.AddV( bullet.data.velocity );
            if ( bullet.x > W - bullet.width * 0.5 || bullet.x < 0 + bullet.width * 0.5 ) {

              bullet.data.velocity.x = -bullet.data.velocity.x;
            
            }

            bullet.ComputeBounds();
            if ( --bullet.data.lifeSpan <= 0 ) {

              bullet.Detach();
              playerBullets.splice( i, 1 );
              playerBulletPool.Store( bullet );
            
            } else {

              // We can cheat, because we have so many objects.
              if ( RI( 1, 3 ) === 2 ) {

                handlePlayerBullet_EnemyCollision( bullet, i );
              
              }
            
            }
          
          }

        }
      
      }

      function handleEnemies () {

        for ( var i = 0, enemy; i < enemies.length; ++i ) {

          enemy = enemies[ i ];
          if ( enemy ) {

            enemy.position.AddV( enemy.data.velocity );
            enemy.ComputeBounds();
            if ( enemy.data.health <= 0 || enemy.y > H + enemy.height * 0.5 ) {

              enemy.Detach();
              enemies.splice( i, 1 );
              enemyPool.Store( enemy );
            
            } else {

              handleEnemy_ShieldCollision( enemy, i );
            
            }
          
          }
        
        }
      
      }

      function handlePlayerBullet_EnemyCollision ( bullet, index ) {

        if ( bullet && bullet.x > 0 && bullet.x < W && bullet.y > 0 && bullet.y < H ) {

          var convergence = root.Converge( bullet.bounds );
          for ( var i = 0, enemy; i < convergence.length; ++i ) {

            enemy = convergence[ i ].belongsTo;
            if ( enemy ) {

              if ( COLLIDE( bullet.data.body, enemy.data.body ) ) {

                enemy.data.health--;
                bullet.Detach();
                playerBullets.splice( index, 1 );
                break;
              
              }
            
            }
          
          }
        
        }
      
      }

      function handleEnemy_ShieldCollision ( enemy, index ) {

        if ( !enemy || enemy.y < shieldVerticalPosition - enemy.height ) return;
        for ( var i = 0, shield; i < shields.length; ++i ) {

          shield = shields[ i ];
          if ( shield ) {

            if ( COLLIDE( enemy.data.body, shield.data.body ) ) {

              enemy.Detach();
              enemies.splice( index, 1 );
              enemyPool.Store( enemy );
              if ( --shield.data.health <= 0 ) {

                shield.Detach();
                shields.splice( i, 1 );
                break;
              
              } else {

                shield.clip.tl.x += 16;
              
              }

              break;
            
            }
          
          }
        
        }
      
      }

    }

    document.body.removeChild( buttonContainer );
  
  }

};
