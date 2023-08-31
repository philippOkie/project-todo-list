import {dueDateChecker} from './noteModule.js'

export const folderContainer = document.getElementById('folderContainer')
export const currFolder = document.getElementById('currFolder')
export const controlFolderForm = document.getElementById('controlFolder')
const notesContainer = document.getElementById('notes')

export let chosenFolder = undefined
export let myFolders = []
export let folderId = 0
export class Folder {
    constructor(folderTitle, folderId) {
        this.folderName = folderTitle
        this.folderId = folderId
        this.notes = []
    }
}

function removeFolderFromLibrary(folderId) {
    myFolders = myFolders.filter((folderToArr) => folderToArr.folderId !== folderId)
}
 
export function createFolder() {
    let titleFolder = document.getElementById("titleFolder").value

    const newFolder = document.createElement('div')
    newFolder.classList.add('newFolder')
    folderContainer.appendChild(newFolder)

    let folderName = document.createElement("button")
    folderName.innerHTML = titleFolder
    folderName.classList.add('folderName')
    newFolder.appendChild(folderName)
        
    const deleteFolderBtn = document.createElement("button")
    deleteFolderBtn.innerHTML = "-"
    deleteFolderBtn.classList.add('delBtn')
    deleteFolderBtn.setAttribute("id", 'deleteFolderBtn')
    newFolder.appendChild(deleteFolderBtn)

    if (localStorage.getItem("folderId") === null) {
        localStorage.setItem("folderId", folderId)
    }
    else {
        folderId = localStorage.getItem("folderId")
    }
    folderId++
    localStorage.setItem("folderId", folderId)
    folderName.setAttribute("id", folderId)
    newFolder.setAttribute("id", folderId)

    const folderToArr = new Folder(titleFolder, folderId)
    myFolders.push(folderToArr)
    
    let myFoldersString = JSON.stringify(myFolders)
    localStorage.setItem("MyFolders", myFoldersString)
    currFolder.innerHTML = 'New Folder ' + titleFolder + ' Created!'
    console.log(myFolders)
    // delete folder
    deleteFolderBtn.addEventListener('click', () => {
        if (newFolder && newFolder.parentNode) {
            newFolder.parentNode.removeChild(newFolder)
            currFolder.innerHTML = 'Folder ' + titleFolder + ' deleted!'
            removeFolderFromLibrary(folderToArr.folderId)
            myFoldersString = JSON.stringify(myFolders)
            localStorage.setItem("MyFolders", myFoldersString)
        }
    })
    // change WHICH FOLDER YOU ARE IN
    folderName.addEventListener('click', () => {
        currFolder.innerHTML = titleFolder
        const folders = document.querySelectorAll('.newFolder')
        folders.forEach(folder => folder.classList.remove('active'))
        newFolder.addEventListener('click', () => newFolder.classList.add("active"))

        myFolders = myFolders.filter((folderToArr) => folderToArr.folderId !== folderId)
        chosenFolder = folderToArr.folderId
        console.log(chosenFolder, folderToArr)
        location.reload()
        return chosenFolder
    })
    controlFolderForm.reset()
}

export function showFolders() {
    if (localStorage.getItem("MyFolders") === null) {
        return
    }

    let myFoldersLocalStorageString = localStorage.getItem("MyFolders")
    let myFoldersLocalStorage = JSON.parse(myFoldersLocalStorageString)
    myFolders = myFoldersLocalStorage

    for (let i = 0; i < myFoldersLocalStorage.length; i++) {
        let titleFolder = myFoldersLocalStorage[i].folderName

        const newFolder = document.createElement('div')
        newFolder.setAttribute("id", myFoldersLocalStorage[i].folderId)
        newFolder.classList.add('newFolder')
        folderContainer.appendChild(newFolder)

        let folderName = document.createElement("button")
        folderName.innerHTML = titleFolder
        folderName.classList.add('folderName')
        newFolder.appendChild(folderName)
        
        const deleteFolderBtn = document.createElement("button")
        deleteFolderBtn.innerHTML = "-"
        deleteFolderBtn.classList.add('delBtn')
        deleteFolderBtn.setAttribute("id", 'deleteFolderBtn')
        newFolder.appendChild(deleteFolderBtn)

        let myFoldersString = localStorage.getItem("MyFolders")
        myFolders = JSON.parse(myFoldersString)
        folderName.setAttribute("id", myFoldersLocalStorage[i].folderId)
        // Event listener to delete folder
        deleteFolderBtn.addEventListener('click', () => {
            if (newFolder && newFolder.parentNode) {
                newFolder.parentNode.removeChild(newFolder)
                currFolder.innerHTML = 'Folder ' + titleFolder + ' deleted!'
                removeFolderFromLibrary(myFoldersLocalStorage[i].folderId)
    
                myFoldersString = JSON.stringify(myFolders)
                localStorage.setItem("MyFolders", myFoldersString)
                // console.log(myFolders)
            }
        })
        // Event listener to change WHICH FOLDER YOU ARE IN
        folderName.addEventListener('click', () => {
            currFolder.innerHTML = titleFolder
            
            const folders = document.querySelectorAll('.newFolder')
            folders.forEach(folder => folder.classList.remove('active'))
            newFolder.addEventListener('click', () => newFolder.classList.add("active"))

            myFolders = myFolders.filter((myFoldersLocalStorage) => myFoldersLocalStorage.folderId !== folderId)
            chosenFolder = myFoldersLocalStorage[i].folderId
            console.log(chosenFolder, myFoldersLocalStorage[i])
            while (notesContainer.children.length > 1) {
                notesContainer.lastChild.remove()
            }          
            myFoldersLocalStorage = myFolders
            for (let note of myFoldersLocalStorage[i].notes) {
                let titleNote = note.titleNote
                let txtNote = note.txtNote
                let dateNote = note.dueDate
                let priority = note.priority
                let noteId = note.noteId

                function removeNoteFromLibrary(noteId) {
                    myFoldersLocalStorage[i].notes = myFoldersLocalStorage[i].notes.filter((note) => note.noteId !== noteId)
                }

                const toolTipSpan = document.createElement('span')
                if (titleNote !== "") {
                    const newNote = document.createElement('div')
                    notesContainer.appendChild(newNote)
                    newNote.classList.add('note')
                    
                    const toolTip = document.createElement('p')
                    newNote.appendChild(toolTip)
                    toolTip.innerHTML = titleNote
                    toolTip.classList.add('tooltip')
                    toolTip.classList.add('doubleWNE')
                    
                    if (txtNote !== '') {
                        toolTip.appendChild(toolTipSpan)
                        toolTipSpan.classList.add('tooltiptext')
                        toolTipSpan.innerHTML = txtNote         
                    }
                    
                    const dueDate = document.createElement('p')
                    newNote.appendChild(dueDate)
                    dueDateChecker(dateNote, dueDate)

                    const lowPrior= document.getElementById('value-1')
                    const midPrior = document.getElementById('value-2')
                    const highPrior = document.getElementById('value-3')
                    const prior = document.createElement('p')
                    newNote.appendChild(prior)
                    
                    if(priority == 1)
                    {   
                        prior.classList.add('lowPrior')
                        prior.innerHTML = "Low Priority"
                    }
                    else if(priority == 2)
                    {   
                        prior.classList.add('midPrior')
                        prior.innerHTML = "Mid Priority"
                    }
                    else if(priority == 3)
                    {   
                        prior.classList.add('highPrior')
                        prior.innerHTML = "High Priority"
                    }
                    else {   
                        prior.classList.add('lowPrior')
                        prior.innerHTML = "Low Priority"
                    }
                                
                    const deleteNoteBtn = document.createElement("button")
                    deleteNoteBtn.innerHTML = "-"
                    deleteNoteBtn.classList.add('delBtn')
                    deleteNoteBtn.setAttribute("id", 'deleteNoteBtn')
                    newNote.appendChild(deleteNoteBtn)
    
                    if (localStorage.getItem("noteId") === null) {
                        localStorage.setItem("noteId", noteId)
                    }
                    else {
                        noteId = localStorage.getItem("noteId")
                    }
                    noteId++
                    localStorage.setItem("noteId", noteId)
                    newNote.setAttribute("id", noteId)
                    myFoldersString = JSON.stringify(myFoldersLocalStorage)
                    localStorage.setItem("MyFolders", myFoldersString)
                    // deleting notes
                    deleteNoteBtn.addEventListener('click', () => {
                        if (newNote && newNote.parentNode) {
                            newNote.parentNode.removeChild(newNote)
                            removeNoteFromLibrary(note.noteId)
                        
                            myFoldersString = JSON.stringify(myFoldersLocalStorage)
                            localStorage.setItem("MyFolders", myFoldersString)
                        }
                    })
                    // changing notes' content
                    toolTipSpan.addEventListener("dblclick", (e) => {
                        let oldVal = txtNote
                        let newVal = prompt("Enter new description:")  
                        if (newVal === "") {
                            toolTipSpan.innerHTML = oldVal
                        } 
                        else if (newVal) {
                            toolTipSpan.innerHTML = txtNote = newVal
                            note.txtNote = newVal

                            myFoldersString = JSON.stringify(myFoldersLocalStorage)
                            localStorage.setItem("MyFolders", myFoldersString)
                        } 
                        else {
                            toolTipSpan.innerHTML = oldVal
                        }
                    })

                    function removeNoteFromLibrary(noteId) {
                        myFoldersLocalStorage[i].notes = myFoldersLocalStorage[i].notes.filter((note) => note.noteId !== noteId)
                    }
            } 
        }
        return chosenFolder
        })          
    }
}    
