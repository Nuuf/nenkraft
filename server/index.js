var WebSocketServer = require( 'ws' ).Server;
var express = require( 'express' );
var path = require( 'path' );
var app = express();
var server = require( 'http' ).createServer();
var nk = require( '../src/nkb' );

app.use( express.static( path.join( __dirname, '/public' ) ) );

var players = [];

var wss = new WebSocketServer( { server: server } );
wss.on( 'connection', function ( ws ) {

  players.push( ws );
  ws.on( 'close', function () {

    console.log( 'socket disconnected' );

    var i = players.indexOf( ws );

    if ( i !== -1 ) {

      players.splice( i, 1 );
    
    }
  
  } );
  ws.on( 'error', function ( error ) {

    console.log( error );
  
  } );

} );

server.on( 'request', app );
server.listen( 8080, function () {

  console.log( 'Listening on http://localhost:8080' );

} );

var MainCase = new nk.Case2D();
var MotionManager = new nk.MotionManager( MainCase );
var mLeft = MotionManager.Create( 'left', 'x', 100, 45 );
var mRight = MotionManager.Create( 'right', 'x', -100, 45 );

var mUp = MotionManager.Create( 'up', 'y', -100, 60 );
var mDown = MotionManager.Create( 'down', 'y', 100, 60 );

mLeft.onEnd.Add( function () {

  mRight.Start();

} );
mRight.onEnd.Add( function () {

  mLeft.Start();

} );
mUp.onEnd.Add( function () {

  mDown.Start();

} );
mDown.onEnd.Add( function () {

  mUp.Start();

} );

MotionManager.StartMultiple( 'up left' );

function Process() {

  MainCase.Render();
  MotionManager.Process();

  for ( var i = 0, player; i < players.length; ++i ) {

    player = players[i];

    if ( player ) {

      player.send( JSON.stringify( MainCase.position ) );
    
    }
  
  }

}

nk.ServerTicker( Process, 60 );
