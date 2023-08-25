import './styles/main.scss'
import {changeTheme, r, themeBtn} from './uiModule.js'
import {Note, controlNotesForm, notesContainer, noteId, createNote, dueDateChecker, priorityChecker} from './noteModule.js'
import {Folder, folderId, folderContainer, currFolder, controlFolderForm, createFolder, myFolders} from './folderModule.js'

function populateFolderStorage() {

}

function populateNoteStorage() {

}  

controlFolderForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createFolder()
})

controlNotesForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createNote()
})

themeBtn.addEventListener('click', () => {
    changeTheme()
})

window.onload = () => {
    r.style.setProperty('--bkcolor', localStorage.getItem('--bkcolor'))
    r.style.setProperty('--base-color', localStorage.getItem('--base-color'))   
}





// test==============================================================
const todayFolder = document.getElementById('todayFolder')
todayFolder.addEventListener('click', () => {
    currFolder.innerHTML = 'Today'
})

const upcomingFolder = document.getElementById('upcomingFolder')
upcomingFolder.addEventListener('click', () => {
    currFolder.innerHTML = 'Upcoming'
})

