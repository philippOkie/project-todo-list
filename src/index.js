import './styles/main.scss'

const folderContainer = document.getElementById('folderContainer')
const currFolder = document.getElementById('currFolder')
const controlFolderForm = document.getElementById('controlFolder')
const controlNotesForm = document.getElementById("controlNotes")
const notesContainer = document.getElementById('notes')
const themeBtn = document.getElementById('themeBtn')
const r = document.querySelector(':root')
let myFolders = []
let folderId = 0
let noteId = 0

class Note {
    constructor(noteTitle, description, dueDate, priority) {
        this.noteTitle = noteTitle
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.noteId = noteId++
    }
}

class Folder {
    constructor(folderTitle) {
        this.folderName = folderTitle
        this.folderId = folderId++
        let notes = []
    }
}

function createFolder() {
    let titleFolder = document.getElementById("titleFolder").value

    const newFolder = document.createElement('div')
    newFolder.classList.add('newFolder')
    folderContainer.appendChild(newFolder)

    const folderName = document.createElement("button")
    folderName.innerHTML = titleFolder
    folderName.classList.add('folderName')
    folderName.setAttribute("id", titleFolder)
    newFolder.appendChild(folderName)
        
    const deleteFolderBtn = document.createElement("button")
    deleteFolderBtn.innerHTML = "Del"
    deleteFolderBtn.classList.add('delBtn')
    deleteFolderBtn.setAttribute("id", 'deleteFolderBtn')
    newFolder.appendChild(deleteFolderBtn)

    const folderToArr = new Folder(titleFolder)
    myFolders.push(folderToArr)
    console.log(myFolders)
    currFolder.innerHTML = 'New Folder Created!'

    deleteFolderBtn.addEventListener('click', () => {
        if (newFolder && newFolder.parentNode) {
            newFolder.parentNode.removeChild(newFolder)
            currFolder.innerHTML = 'Folder Deleted!'
        }
    })
    // WHICH FOLDER YOU ARE IN
    folderName.addEventListener('click', () => {
        currFolder.innerHTML = titleFolder
    })

    controlFolderForm.reset()
}

function createNote() {
    const newNote = document.createElement('div')
    notesContainer.appendChild(newNote)
    newNote.classList.add('note')
   
    const titleNote = document.getElementById('titleNote').value
    const toolTip = document.createElement('p')
    newNote.appendChild(toolTip)
    toolTip.innerHTML = titleNote
    toolTip.classList.add('tooltip')
    toolTip.classList.add('leftBorder')
    toolTip.classList.add('doubleWNE')

    const txtNote = document.getElementById('txtNote').value
    if (txtNote !== '') {
        const toolTipSpan = document.createElement('span')
        toolTip.appendChild(toolTipSpan)
        toolTipSpan.classList.add('tooltiptext')
        toolTipSpan.innerHTML = txtNote         
    }

    const dateNote = document.getElementById('dateNote').value
    const dueDate = document.createElement('p')
    newNote.appendChild(dueDate)
    dueDateChecker(dateNote, dueDate)

    const lowPrior= document.getElementById('value-1')
    const midPrior = document.getElementById('value-2')
    const highPrior = document.getElementById('value-3')
    const prior = document.createElement('p')
    newNote.appendChild(prior)
    let priority = ''
    priorityChecker(lowPrior, midPrior, highPrior, prior, priority)
    
    const deleteNoteBtn = document.createElement("button")
    deleteNoteBtn.innerHTML = "Del"
    deleteNoteBtn.classList.add('delBtn')
    deleteNoteBtn.setAttribute("id", 'deleteNoteBtn')
    newNote.appendChild(deleteNoteBtn)

    controlNotesForm.reset()
}

function populateFolderStorage() {

}

function populateNoteStorage() {

}  

function changeTheme() {
    if (getComputedStyle(r).getPropertyValue('--base-color') != "#f9f9f9") {
        return r.style.setProperty("--base-color", "#f9f9f9"), 
               r.style.setProperty("--bkcolor", "#04080f"), 
               localStorage.setItem('--base-color', "#f9f9f9"), 
               localStorage.setItem('--bkcolor', "#04080f")
    } 
    else if (getComputedStyle(r).getPropertyValue('--base-color') == "#f9f9f9") {
        return r.style.setProperty("--base-color", "#04080f"), 
               r.style.setProperty("--bkcolor", "#f9f9f9"), 
               localStorage.setItem('--base-color', "#04080f"), 
               localStorage.setItem('--bkcolor', "#f9f9f9")
    }
}

function dueDateChecker(dateNote, dueDate) {
    if (dateNote !== '') {
        return dueDate.innerHTML = dateNote
    }
    else {
        return dueDate.innerHTML = "No due-date!"
    }
}

function priorityChecker(lowPrior, midPrior, highPrior, prior, priority) {
    if(lowPrior.checked)
    {   
        return priority = 'Low-Priority', prior.classList.add('lowPrior'), prior.innerHTML = priority
    }
    else if(midPrior.checked)
    {   
        return priority = 'Mid-Priority', prior.classList.add('midPrior'), prior.innerHTML = priority
    }
    else if(highPrior.checked)
    {   
        return priority = 'High-Priority', prior.classList.add('highPrior'), prior.innerHTML = priority
    }
    else {   
        return priority = "Low-Priority", prior.classList.add('lowPrior'), prior.innerHTML = priority
    }
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
// get values for THEME from the localStorage, when the page is reloaded
window.onload = () => {
    r.style.setProperty('--bkcolor', localStorage.getItem('--bkcolor'))
    r.style.setProperty('--base-color', localStorage.getItem('--base-color'))   
}







// ==============================================================
const todayFolder = document.getElementById('todayFolder')
todayFolder.addEventListener('click', () => {
    currFolder.innerHTML = 'Today'
})

const upcomingFolder = document.getElementById('upcomingFolder')
upcomingFolder.addEventListener('click', () => {
    currFolder.innerHTML = 'Upcoming'
})

