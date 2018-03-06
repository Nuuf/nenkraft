module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'MultipleCanvases' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    document.getElementsByTagName( 'canvas' )[ 0 ].style.display = 'none';

    var stadium = nk.Stadium( {
      width: 600,
      height: 400,
      className: 'mcnvs',
      mode: '2d',
      fill: false
    } );
    
    stadium.CreateStage2D( 'stage1' );
    stadium.CreateStage2D( 'stage2' );
    stadium.CreateStage2D( 'stage3' );
    stadium.CreateStage2D( 'stage4' );

    stadium.GetStages( 'stage1', 'stage2', 'stage3' ).forEach( function( stage ) {

      var i = 10;

      while ( i-- ) {

        var child = stage.AddChild( 
          nk.Graphic2D( 
            nk.Utils.RandomFloat( 100, 500 ),
            nk.Utils.RandomFloat( 50, 350 ),
            nk.Path.Circle( 0, 0, nk.Utils.RandomInteger( 10, 50 ) )
          ) 
        );
        child.data.velocity = nk.Vector2D(
          nk.Utils.RandomFloat( -1, 1 ),
          nk.Utils.RandomFloat( -1, 1 )
        );
        child.data.torque = nk.Utils.RandomFloat( -nk.Math.RADIAN, nk.Math.RADIAN );
      
      }

      stage.onProcess.Add( OnMove, stage );
    
    } );

    stadium.GetStages( 'stage4' ).forEach( function( stage ) {

      var i = 10;

      while ( i-- ) {

        var child = stage.AddChild( 
          nk.Graphic2D( 
            nk.Utils.RandomFloat( 100, 500 ),
            nk.Utils.RandomFloat( 50, 350 ),
            nk.Path.Circle( 0, 0, nk.Utils.RandomInteger( 10, 50 ) )
          ) 
        );
        child.data.velocity = nk.Vector2D(
          nk.Utils.RandomFloat( -1, 1 ),
          nk.Utils.RandomFloat( -1, 1 )
        );
        child.path.style.fill.color = 'rgba(100, 255, 50, 0.4)';
        child.data.torque = nk.Utils.RandomFloat( -nk.Math.RADIAN, nk.Math.RADIAN );
      
      }

      stage.onProcess.Add( OnMove, stage );
    
    } );

    function OnMove() {

      this.children.forEach( ChildMove );
    
    }

    function ChildMove( child ) {

      child.position.AddV( child.data.velocity );
      child.data.velocity.Rotate( child.data.torque );
    
    }

    console.log( stadium );

    document.body.removeChild( buttonContainer );
  
  }

};
