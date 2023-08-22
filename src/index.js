import './styles/main.scss'

let myFolders = []
let folderId = 0
let noteId = 0
class Note {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.id = noteId++
    }
}

const currFolder = document.getElementById('currFolder')
const submitForm = document.getElementById('controlFolder')

submitForm.addEventListener('submit', (e) => {
    e.preventDefault()
})

const todayFolder = document.getElementById('todayFolder')
todayFolder.addEventListener('click', () => {
    currFolder.innerHTML = 'Today'
})

const upcomingFolder = document.getElementById('upcomingFolder')
upcomingFolder.addEventListener('click', () => {
    currFolder.innerHTML = 'Upcoming'
})