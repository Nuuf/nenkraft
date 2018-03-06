module.exports = function () {

  require( '../../style/editor.css' );

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Editor' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    document.body.style.backgroundColor = '#000';

    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '50%';
    c.style.left = '50%';
    c.style.transform = 'translate(-50%, -50%)';

    var domObjects = {};

    var 
      stage,
      root,
      trunk,
      camera,
      background,
      scene;

    var W = 1920, HW = W * 0.5;
    var H = 1080, HH = H * 0.5;

    nk.Sprite.BUILD_DEFAULT_TEXTURE( function() {

      var imageLoader = nk.ImageLoader();
      imageLoader.onComplete.Add( Init );
      imageLoader.Load( [
        { id: 'backgroundTile', src: './assets/images/editor/tile.png' },
        { id: 'origin', src: './assets/images/editor/origin.png' }
      ], true );
  
      function Init() {
  
        stage = nk.Stage2D( { 
          canvas: c,
          x: 0,
          y: 0
        } );
        root = nk.Container2D();
        trunk = nk.Container2D();
        camera = nk.Camera2D();
        scene = nk.Container2D();
        background = nk.Tilesprite( 0, 0, imageLoader.GetBasicTexture( 'backgroundTile' ) );
        var dragStart = nk.Vector2D();
        var dragOffset = nk.Vector2D();
        var dragger = null;
        var backgroundDrag = false;
        var sceneChildren = scene.children;
        var keyInput = {
          SPACE: false
        };
  
        trunk.AddChild( nk.Sprite( 0, -32, imageLoader.GetBasicTexture( 'origin' ) ) );
  
        stage.backgroundColor = '#666';
        background.GeneratePattern( stage.rc, W, H );
        trunk.position.Set( HW, HH );
    
        nk.CanvasManager( c, W, H, nk.CanvasManager.KEEP_ASPECT_RATIO_FIT )
          .BindStage( stage )
          .BindContainer( root )
          .Trigger();
    
        stage.AddChild( root );
        root.AddChild( background );
        root.AddChild( camera );
        camera.AddChild( trunk );
        trunk.AddChild( scene );

        scene.AddChild( nk.Sprite( 0, 0 ) );

        stage.mouse.onDown.Add( function( event ) {

          dragStart.SetV( event.data.position );

          if ( keyInput.SPACE === true ) {

            backgroundDrag = true;

            dragOffset.SetV( camera.position );
          
          } else {

            var intersectionPoint = dragStart.Copy();
            intersectionPoint.SubtractV( camera.position );

            for ( var i = 0; i < sceneChildren.length; ++i ) {

              console.log( intersectionPoint );

              if ( sceneChildren[i].IntersectsPoint( intersectionPoint ) ) {

                console.log( 0 );

                dragger = sceneChildren[i];
                dragOffset.SetV( dragger.position );
                break;
              
              }

            }
          
          }

        } );

        stage.mouse.onUp.Add( function() {

          backgroundDrag = false;
          dragger = null;

        } );

        stage.mouse.onMove.Add( function( event ) {

          var newPos = event.data.position.Copy();
          newPos.AddV( dragOffset );
          newPos.SubtractV( dragStart );

          if ( backgroundDrag === true ) {

            camera.position.SetV( newPos );
            background.SetPatternOffset( newPos.x, newPos.y );

          } else if ( dragger !== null ) {

            dragger.position.SetV( newPos );
            
          }

        } );

        stage.keyboard.onDown.Add( function( event ) {

          // console.log( event.data.keyCode );

          switch ( event.data.keyCode ) {

            case 32:
              keyInput.SPACE = true;
              break;
            case 46:
              if ( dragger ) {

                dragger.Destroy();
                dragger = null;
              
              }

              break;
            default: break;
          
          }
        
        } );

        stage.keyboard.onUp.Add( function( event ) {

          switch ( event.data.keyCode ) {

            case 32:
              keyInput.SPACE = false;
              break;
            default: break;
          
          }
        
        } );
      
      }
    
    } );

    CreateMenu();
    AddMenuItem( 
      'Sprite',
      DisplayEntityInfo,
      [ 'x', 'y', 'width', 'height', 'rotation' ]
    );
    CreateEIM(); // EIM = Entity Info Module

    document.body.removeChild( buttonContainer );

    // DOM GUI

    function CreateMenu() {

      var 
        menuContainer,
        menuList,
        hideMenuButton,
        showMenuButton,
        saveButton;

      menuContainer = domObjects.menuContainer = document.createElement( 'div' );
      menuContainer.id = 'menuContainer';
      document.body.appendChild( menuContainer );

      menuList = domObjects.menuList = document.createElement( 'ul' );
      menuList.id = 'menuList';
      menuContainer.appendChild( menuList );

      hideMenuButton = domObjects.hideMenuButton = document.createElement( 'button' );
      hideMenuButton.id = 'hideMenuButton';
      hideMenuButton.innerHTML = 'Hide Menu';

      hideMenuButton.onclick = function() {

        menuContainer.style.display = 'none';
        showMenuButton.style.display = 'block';
      
      };

      menuContainer.appendChild( hideMenuButton );

      showMenuButton = domObjects.showMenuButton = document.createElement( 'button' );
      showMenuButton.id = 'showMenuButton';
      showMenuButton.innerHTML = 'Show Menu';

      showMenuButton.onclick = function() {

        menuContainer.style.display = null;
        showMenuButton.style.display = null;

      };

      document.body.appendChild( showMenuButton );

      saveButton = domObjects.saveButton = document.createElement( 'button' );
      saveButton.id = 'saveButton';
      saveButton.innerHTML = 'Save';

      saveButton.onclick = function() {

        var data = [];

        scene.children.forEach( function( child ) {

          var cd = {
            x: child.x,
            y: child.y,
            width: child.width,
            height: child.height,
            rotation: child.rotation
          };
          data.push( cd );
        
        } );

        nk.Utils.DownloadAsJSON( data, 'map' );

      };

      saveButton.innerHTML = 'Save';
      menuContainer.appendChild( saveButton );
    
    }

    function AddMenuItem( id, onClick, propsToSave ) {

      var listItem = document.createElement( 'li' );
      listItem.id = id;
      listItem.innerHTML = id;
      listItem.onclick = onClick;
      listItem.propsToSave = propsToSave;
      listItem.propItems = [];
      propsToSave.forEach( function( prop ) {

        var propItem = document.createElement( 'li' );
        propItem.innerHTML = prop;

        var input = document.createElement( 'input' );
        input.type = 'text';
        propItem.appendChild( input );

        listItem.propItems.push( propItem );
      
      } );
      domObjects.menuList.appendChild( listItem );

    }

    function CreateEIM() {

      var 
        EIMContainer,
        EIMHeader,
        EIMList,
        showEIMButton,
        createEntityButton,
        hideEIMButton;
      
      EIMContainer = domObjects.EIMContainer = document.createElement( 'div' );
      EIMContainer.id = 'EIMContainer';
      document.body.appendChild( EIMContainer );

      EIMHeader = domObjects.EIMHeader = document.createElement( 'h1' );
      EIMHeader.id = 'EIMHeader';
      EIMContainer.appendChild( EIMHeader );

      EIMList = domObjects.EIMList = document.createElement( 'ul' );
      EIMList.id = 'EIMList';
      EIMContainer.appendChild( EIMList );

      hideEIMButton = domObjects.hideEIMButton = document.createElement( 'button' );
      hideEIMButton.id = 'hideEIMButton';
      hideEIMButton.innerHTML = 'Hide EIM';

      hideEIMButton.onclick = function() {

        EIMContainer.style.display = null;
        showEIMButton.style.display = null;
      
      };

      EIMContainer.appendChild( hideEIMButton );

      showEIMButton = domObjects.showEIMButton = document.createElement( 'button' );
      showEIMButton.id = 'showEIMButton';
      showEIMButton.innerHTML = 'Show EIM';

      showEIMButton.onclick = function() {

        EIMContainer.style.display = 'block';
        showEIMButton.style.display = 'none';

      };

      document.body.appendChild( showEIMButton );

      createEntityButton = domObjects.createEntityButton = document.createElement( 'button' );
      createEntityButton.id = 'createEntityButton';
      createEntityButton.innerHTML = 'Create Entity';

      createEntityButton.onclick = function() {

        if ( domObjects.selectedEntityType ) {
          
          var entity = nk[domObjects.selectedEntityType.id]();

          console.dir( domObjects.EIMList );

          domObjects.EIMList.childNodes.forEach( function( node ) {

            entity[node.innerText] = node.children[0].value;
          
          } );

          entity.UpdateShape();

          scene.AddChild( entity );

        }

      };

      EIMContainer.appendChild( createEntityButton );

    }

    function DisplayEntityInfo() {

      domObjects.EIMHeader.innerHTML = this.id;
      domObjects.EIMList.innerHTML = null;

      domObjects.selectedEntityType = this;

      this.propItems.forEach( function( propItem ) {

        domObjects.EIMList.appendChild( propItem );

      } );

    }
  
  }

};
