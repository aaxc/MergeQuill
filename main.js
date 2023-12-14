const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 550,
        height: 350,
        backgroundColor: '#333',
        frame: false, // This will create a frameless window
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');

    // This is a simple way to create a close function for the window
    global.closeApp = () => {
        win.close();
    };
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
