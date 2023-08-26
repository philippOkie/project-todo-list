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
    folderName.setAttribute("id", titleFolder)
    newFolder.appendChild(folderName)
        
    const deleteFolderBtn = document.createElement("button")
    deleteFolderBtn.innerHTML = "Del"
    deleteFolderBtn.classList.add('delBtn')
    deleteFolderBtn.setAttribute("id", 'deleteFolderBtn')
    newFolder.appendChild(deleteFolderBtn)

    const folderToArr = new Folder(titleFolder)
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
            // console.log(myFolders)
        }
    })

    // change WHICH FOLDER YOU ARE IN
    folderName.addEventListener('click', () => {
        currFolder.innerHTML = titleFolder
        // code
    })

    // changing folder's name
    folderName.addEventListener("dblclick", (e) => {
        let oldVal = titleFolder
        let newVal = prompt("Please enter a new folder name:")  
        if (newVal === "") {
            folderName.innerHTML = oldVal
        } 
        else if (newVal) {
            folderName.innerHTML = titleFolder = newVal
            folderToArr.folderName = newVal
            myFoldersString = JSON.stringify(myFolders)
            localStorage.setItem("MyFolders", myFoldersString)
        } 
        else {
            folderName.innerHTML = oldVal
        }
        console.log(myFolders)
    })
   
    controlFolderForm.reset()
}

export function showFolders() {

}
