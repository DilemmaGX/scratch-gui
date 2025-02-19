/* eslint-disable */
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280, height: 720, title: 'GekoWarp', frame: false, titleBarStyle: 'hidden', titleBarOverlay: {
            color: '#ffffff00',
            symbolColor: '#ffffff'
        }
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});