'use strict';
const electron = require('electron');
const express  = require('express')
const nodeThermalPrinter = require('node-thermal-printer');
	 
const appExpress = express()
 
appExpress.get('/notes', function(req, res) {
  res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
  //res.json(electronPrinter.list());
})
 
appExpress.listen(3000)

const app = electron.app;

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

let mainWindow;

function onClosed() {
	mainWindow = null;
}

function createMainWindow() {
	const win = new electron.BrowserWindow({
		width: 1200,
		height: 800
	});

	win.webContents.openDevTools()
	win.loadURL(`file://${__dirname}/src/index-electron.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
