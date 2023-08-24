import './styles/main.scss'

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

const folderContainer = document.getElementById('folderContainer')
const currFolder = document.getElementById('currFolder')
const submitForm = document.getElementById('controlFolder')
const controlFolderForm = document.getElementById('controlFolder')
const controlNotesForm = document.getElementById("controlNotes")
const notesContainer = document.getElementById('notes')

submitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createFolder()
})

controlNotesForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createNote()
})

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

    deleteFolderBtn.addEventListener('click', () => {
        if (newFolder && newFolder.parentNode) {
            newFolder.parentNode.removeChild(newFolder)
        }
        currFolder.innerHTML = titleFolder, 'was deleted!'
    })

    // WHICH FOLDER YOU ARE
    newFolder.addEventListener('click', () => {
        currFolder.innerHTML = titleFolder
    })
    controlFolderForm.reset()
}

function createNote() {
    let titleNote = document.getElementById('titleNote').value
    let txtNote = document.getElementById('txtNote').value
    let dateNote = document.getElementById('dateNote').value
    const lowPrior= document.getElementById('value-1')
    const midPrior = document.getElementById('value-2')
    const highPrior = document.getElementById('value-3')

    const newNote = document.createElement('note')
    notesContainer.appendChild(newNote)
    newNote.classList.add('note')

    const toolTip = document.createElement('div')
    newNote.appendChild(toolTip)
    toolTip.innerHTML = titleNote
    toolTip.classList.add('noteElement')
    toolTip.classList.add('tooltip')
    toolTip.classList.add('leftBorder')
    toolTip.classList.add('doubleWNE')
    if (txtNote !== '') {
        const toolTipSpan = document.createElement('span')
        toolTip.appendChild(toolTipSpan)
        toolTipSpan.classList.add('tooltiptext')
        toolTipSpan.innerHTML = txtNote         
    }

    const dueDate = document.createElement('div')
    newNote.appendChild(dueDate)
    dueDate.classList.add('noteElement')
    dueDateChecker(dateNote, dueDate)

    const prior = document.createElement('div')
    newNote.appendChild(prior)
    prior.classList.add('noteElement')
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
        return priority = 'Mid-Priority' , prior.classList.add('midPrior'), prior.innerHTML = priority
    }
    else if(highPrior.checked)
    {   
        return priority = 'High-Priority', prior.classList.add('highPrior'), prior.innerHTML = priority
    }
    else {   
        return priority = "Low-Priority", prior.classList.add('lowPrior'), prior.innerHTML = priority
    }
}

const todayFolder = document.getElementById('todayFolder')
todayFolder.addEventListener('click', () => {
    currFolder.innerHTML = 'Today'
})

const upcomingFolder = document.getElementById('upcomingFolder')
upcomingFolder.addEventListener('click', () => {
    currFolder.innerHTML = 'Upcoming'
})

