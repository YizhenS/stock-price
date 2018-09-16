const {app, BrowserWindow, Menu,ipcMain} = require('electron')
const path = require('path')
const url = require('url')


let mainWindow = null;
let ChangeSyWindow = null;


// Wait until the app is ready
app.once('ready', () => {
  // Create a new window
  mainWindow = new BrowserWindow({
    // Set the initial width to 800px
    width: 400,
    // Set the initial height to 600px
    height: 455,
    // Set the default background color of the window to match the CSS
    // background color of the page, this prevents any white flickering
    
    //resizable: false,
    
    
    // Don't show the window until it's ready, this prevents any white flickering
    show: false
  })

  // Load a URL in the window to the local index.html path
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Show window when page is ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  //Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
})

// create menu template
const mainMenuTemplate = [
  {
   
    label:'File',
    submenu:[
      {
        label: 'Change Company symbol',
        click(){
          createChangeSyWindow();
        }
      },
      {
        label: 'Set Your Buy in Price'
      },
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command + Q': 'Ctrl+Q', 
        click(){
          app.quit();
        }
      }
    ]
  }
];
// If mac, add empty object to menu
if(process.platform == 'darwin'){
  mainMenuTemplate.unshift({});
}
//Add dev tools item if not in prod mode
if(process.env.NODE_ENV !== 'production'){
  mainMenuTemplate.push({
    label: 'Develop Tools',
    submenu:[
      {
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ? 'Command + T': 'Ctrl+T', 
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  });
}

//  change company symbol windows
function createChangeSyWindow(){
  // Create a new window
  ChangeSyWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title:'Change company symbol',
    //resizable: false,
  });
  ChangeSyWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'ChangeSy.html'),
    protocol: 'file:',
    slashes: true
  }));
  //Garbage collection handle
  ChangeSyWindow.on('close',function(){
    ChangeSyWindow = null;
  })
}





