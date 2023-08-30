import './styles/main.scss'
import {changeTheme, r, themeBtn} from './uiModule.js'
import {Note, controlNotesForm, notesContainer, noteId, active, createNote} from './noteModule.js'
import {Folder, folderId, folderContainer, currFolder, controlFolderForm, createFolder, chosenFolder, myFolders, folderName, showFolders} from './folderModule.js'

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
    myFolders.filter((folderToArr) => folderToArr.folderId !== chosenFolder)
    chosenFolder = folderToArr.folderId
    createNote()
})

themeBtn.addEventListener('click', () => {
    changeTheme()
})

window.onload = () => {
    r.style.setProperty('--bkcolor', localStorage.getItem('--bkcolor'))
    r.style.setProperty('--base-color', localStorage.getItem('--base-color'))   
    showFolders()
}




