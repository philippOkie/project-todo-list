export const folderContainer = document.getElementById('folderContainer')
export const currFolder = document.getElementById('currFolder')
export const controlFolderForm = document.getElementById('controlFolder')

export let myFolders = []
export let folderId = 0
export class Folder {
    constructor(folderTitle) {
        this.folderName = folderTitle
        this.folderId = folderId++
        let notes = []
    }
}

export function createFolder() {
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
    // delete folder
    deleteFolderBtn.addEventListener('click', () => {
        if (newFolder && newFolder.parentNode) {
            newFolder.parentNode.removeChild(newFolder)
            currFolder.innerHTML = 'Folder Deleted!'
        }
    })
    // change WHICH FOLDER YOU ARE IN
    folderName.addEventListener('click', () => {
        currFolder.innerHTML = titleFolder

    })
    // changing folders' content
    folderName.addEventListener("dblclick", (e) => {
        alert('this is a folder name section')
        prompt("Folder Name:")
    })
    controlFolderForm.reset()
}

