// Modulos
const {app, BrowserWindow, session, webContents} = require('electron')

// Mantenga una referencia global del objeto de la ventana, si no lo hace, la ventana
// se cerrará automáticamente cuando el objeto de JavaScript sea basura recogida.
let mainWindow, secWindow, thirdWindow, FourthWindow

// Crear un nuevo BrowserWindow cuando `app` esté listo
function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1000, height: 800,
    webPreferences: { nodeIntegration: true }
  })
  secWindow = new BrowserWindow({
    width: 800, height: 600,
    x: 200, y: 200,
    webPreferences: {
      nodeIntegration: true
    }
  })

  thirdWindow = new BrowserWindow({
    width: 200, height: 200,
    x: 20, y: 20,
    webPreferences: {
      nodeIntegration: true      
    }
  })

  FourthWindow = new BrowserWindow({
    width: 300, height: 300,
    x: 80, y: 80,
    webPreferences: {
      nodeIntegration: true,
      parent: mainWindow, 
      frame: false, 
      modal: true
    }
  })
  
  let ses = mainWindow.webContents.session
  let ses2 = secWindow.webContents.session
  let defaultSes = session.defaultSession

//  ses.clearStorageData()

  mainWindow.loadFile('index.html')
  secWindow.loadFile('index.html')
  thirdWindow.loadURL('https://www.gmail.com')
  FourthWindow.loadURL('https://www.gmail.com')

  mainWindow.webContents.openDevTools();
  secWindow.webContents.openDevTools();
  
  mainWindow.on('closed',  () => {
    mainWindow = null
  })
  secWindow.on('closed',  () => {
    secWindow = null
  })
  thirdWindow.on('closed',  () => {
    secWindow = null
  })
  FourthWindow.on('closed',  () => {
    secWindow = null
  })

}



app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
