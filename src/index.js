import './styles/main.scss'
import {changeTheme, r, themeBtn} from './uiModule.js'
import {Note, controlNotesForm, notesContainer, noteId, createNote} from './noteModule.js'
import {Folder, folderId, folderContainer, currFolder, controlFolderForm, createFolder, myFolders, folderName} from './folderModule.js'

controlFolderForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createFolder()
})

controlNotesForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createNote(titleFolder)
})

themeBtn.addEventListener('click', () => {
    changeTheme()
})

window.onload = () => {
    r.style.setProperty('--bkcolor', localStorage.getItem('--bkcolor'))
    r.style.setProperty('--base-color', localStorage.getItem('--base-color'))   
}

function populateFolderStorage() {

}

function populateNoteStorage() {

}  



