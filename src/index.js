import './styles/main.scss'
import {changeTheme, r, themeBtn} from './uiModule.js'
import {controlNotesForm, createNote} from './noteModule.js'
import {controlFolderForm, createFolder, chosenFolder, myFolders, showFolders} from './folderModule.js'

controlFolderForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createFolder()
})

controlNotesForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (chosenFolder === undefined) {
        alert("Choose a folder you want to save in!")
        return
    }
    let requiredFolder = myFolders.find((folder) => folder.folderId == chosenFolder)
    let noteToWrite = createNote()
    requiredFolder.notes.push(noteToWrite)
    console.log(requiredFolder)
    // location.reload()
    let myFoldersString = localStorage.getItem("MyFolders")
    // Store the updated array back in local storage
    myFoldersString = JSON.stringify(myFolders)
    localStorage.setItem("MyFolders", myFoldersString)
    console.log(JSON.parse(localStorage.getItem("MyFolders")))
    requiredFolder = myFolders.find((folder) => folder.folderId == chosenFolder)
    
})

themeBtn.addEventListener('click', () => {
    changeTheme()
})

window.onload = () => {
    r.style.setProperty('--bkcolor', localStorage.getItem('--bkcolor'))
    r.style.setProperty('--base-color', localStorage.getItem('--base-color'))   
    showFolders()
}




