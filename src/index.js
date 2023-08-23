import './styles/main.scss'

let myFolders = []
let folderId = 0
let noteId = 0
let priority = 0

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
const controlFolder = document.getElementById('controlFolder')
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
    controlFolder.reset()
}

function createNote() {
    let titleNote = document.getElementById('titleNote').value
    let txtNote = document.getElementById('txtNote').value
    let dateNote = document.getElementById('dateNote').value
    let lowPrior= document.getElementById('value-1').value
    let midPrior = document.getElementById('value-2').value
    let highPrior = document.getElementById('value-3').value

    const newNote = document.createElement('note')
    notesContainer.appendChild(newNote)
    newNote.classList.add('note')
}

function priorityChecker() {
    if(document.getElementById('value-1').clicked == true)
    {   
        return priority = 1
    }
    else if(document.getElementById('value-2').clicked == true)
    {   
        return priority = 2
    }
    else if(document.getElementById('value-3').clicked == true)
    {   
        return priority = 3
    }
    else {   
        return priority = 0
    }
}

function populateFolderStorage() {

}

const todayFolder = document.getElementById('todayFolder')
todayFolder.addEventListener('click', () => {
    currFolder.innerHTML = 'Today'
})

const upcomingFolder = document.getElementById('upcomingFolder')
upcomingFolder.addEventListener('click', () => {
    currFolder.innerHTML = 'Upcoming'
})

