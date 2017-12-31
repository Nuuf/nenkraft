var electron = require( 'electron' );
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var Menu = electron.Menu;
var MenuItem = electron.MenuItem;
var path = require( 'path' );
var url = require( 'url' );

var WINDOW = null;

function CreateWindow () {
  WINDOW = new BrowserWindow( { width: 600, height: 400, title: 'Nenkraft' } );
  var menu = new Menu();
  menu.append( new MenuItem( { role: 'toggledevtools', label: 'DT' } ) );
  menu.append( new MenuItem( { role: 'reload', label: 'R' } ) );
  menu.append( new MenuItem( { role: 'togglefullscreen', label: 'FS' } ) );
  Menu.setApplicationMenu( menu );
  WINDOW.loadURL( url.format( {
    pathname: path.join( __dirname, '../dist/index.html' ),
    protocol: 'file',
    slashes: true
  } ) );
  WINDOW.webContents.openDevTools();
  WINDOW.on( 'closed', function () {
    WINDOW = null;
  } );
}

app.on( 'ready', CreateWindow );
app.on( 'window-all-closed', function () {
  if ( process.platform !== 'darwin' ) {
    app.quit();
  }
} );
app.on( 'activate', function () {
  if ( WINDOW === null ) {
    CreateWindow();
  }
} );
