export const controlNotesForm = document.getElementById("controlNotes")
export const notesContainer = document.getElementById('notes')
export const deleteNoteBtn = document.getElementById('delBtn')

export let noteId = 0
export class Note {
    constructor(noteTitle, description, dueDate, priority) {
        this.noteTitle = noteTitle
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.noteId = noteId++
    }
}

export function createNote() {
    const newNote = document.createElement('div')
    notesContainer.appendChild(newNote)
    newNote.classList.add('note')
   
    const titleNote = document.getElementById('titleNote').value
    const toolTip = document.createElement('p')
    newNote.appendChild(toolTip)
    toolTip.innerHTML = titleNote
    toolTip.classList.add('tooltip')
    toolTip.classList.add('doubleWNE')

    const toolTipSpan = document.createElement('span')
    const txtNote = document.getElementById('txtNote').value
    if (txtNote !== '') {
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

    deleteNoteBtn .addEventListener('click', () => {
        if (newNote && newNote.parentNode) {
            newNote.parentNode.removeChild(newNote)
        }
    })
    // changing notes' content
    prior.addEventListener("dblclick", (e) => {
        alert('this is a priority section')
    })

    dueDate.addEventListener("dblclick", (e) => {
        alert('this is a due date section')
    })

    toolTipSpan.addEventListener("dblclick", (e) => {
        alert('this is a description section')
    })

    toolTip.addEventListener("dblclick", (e) => {
        alert('this is a title section')
    })
    
    controlNotesForm.reset()
}

export function dueDateChecker(dateNote, dueDate) {
    if (dateNote !== '') {
        return dueDate.innerHTML = dateNote
    }
    else {
        return dueDate.innerHTML = "No due-date!"
    }
}

export function priorityChecker(lowPrior, midPrior, highPrior, prior, priority) {
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