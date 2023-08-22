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
        this.id = noteId++
    }
}

const folderContainer = document.getElementById('folderContainer')
const currFolder = document.getElementById('currFolder')
const submitForm = document.getElementById('controlFolder')
const titleFolder = document.getElementById('titleFolder')

submitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let titleFolder = document.getElementById("titleFolder").value

    const newFolder = document.createElement('div')
    newFolder.classList.add('newFolder')
    folderContainer.appendChild(newFolder)

    const folderName = document.createElement("button")
    folderName.innerHTML = titleFolder
    folderName.classList.add('folderName')
    newFolder.appendChild(folderName)
    
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.classList.add('delFolderBtn')
    newFolder.appendChild(deleteBtn)
})












const todayFolder = document.getElementById('todayFolder')
todayFolder.addEventListener('click', () => {
    currFolder.innerHTML = 'Today'
})

const upcomingFolder = document.getElementById('upcomingFolder')
upcomingFolder.addEventListener('click', () => {
    currFolder.innerHTML = 'Upcoming'
})