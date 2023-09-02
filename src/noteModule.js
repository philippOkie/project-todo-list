export const controlNotesForm = document.getElementById("controlNotes");
export const notesContainer = document.getElementById("notes");
export const deleteNoteBtn = document.getElementById("delBtn");
export const active = document.getElementsByClassName("active");

export let noteId = 1;
export class Note {
  constructor(titleNote, txtNote, dueDate, priority) {
    this.titleNote = titleNote;
    this.txtNote = txtNote;
    this.dueDate = dueDate;
    this.priority = priority;
    this.noteId = noteId;
  }
}

export function createNote() {
  const newNote = document.createElement("div");
  notesContainer.appendChild(newNote);
  newNote.classList.add("note");

  let titleNote = document.getElementById("titleNote").value;
  const toolTip = document.createElement("p");
  newNote.appendChild(toolTip);
  toolTip.innerHTML = titleNote;
  toolTip.classList.add("tooltip");
  toolTip.classList.add("doubleWNE");

  const toolTipSpan = document.createElement("span");
  let txtNote = document.getElementById("txtNote").value;
  if (txtNote !== "") {
    toolTip.appendChild(toolTipSpan);
    toolTipSpan.classList.add("tooltiptext");
    toolTipSpan.innerHTML = txtNote;
  }

  const dateNote = document.getElementById("dateNote").value;
  const dueDate = document.createElement("p");
  newNote.appendChild(dueDate);
  dueDateChecker(dateNote, dueDate);

  const lowPrior = document.getElementById("value-1");
  const midPrior = document.getElementById("value-2");
  const highPrior = document.getElementById("value-3");
  const prior = document.createElement("p");
  newNote.appendChild(prior);
  let priority;
  if (lowPrior.checked) {
    priority = 1;
  } else if (midPrior.checked) {
    priority = 2;
  } else if (highPrior.checked) {
    priority = 3;
  } else {
    priority = 1;
  }
  console.log(priority);
  if (priority == 1) {
    prior.classList.add("lowPrior");
    prior.innerHTML = "Low Priority";
  } else if (priority == 2) {
    prior.classList.add("midPrior");
    prior.innerHTML = "Mid Priority";
  } else if (priority == 3) {
    prior.classList.add("highPrior");
    prior.innerHTML = "High Priority";
  } else {
    prior.classList.add("lowPrior");
    prior.innerHTML = "Low Priority";
  }

  const deleteNoteBtn = document.createElement("button");
  deleteNoteBtn.innerHTML = "-";
  deleteNoteBtn.classList.add("delBtn");
  deleteNoteBtn.setAttribute("id", "deleteNoteBtn");
  newNote.appendChild(deleteNoteBtn);

  if (localStorage.getItem("noteId") === null) {
    localStorage.setItem("noteId", noteId);
  } else {
    noteId = localStorage.getItem("noteId");
  }
  noteId++;
  localStorage.setItem("noteId", noteId);
  newNote.setAttribute("id", noteId);

  const newNoteArr = new Note(titleNote, txtNote, dateNote, priority);

  // deleting notes
  deleteNoteBtn.addEventListener("click", () => {
    if (newNote && newNote.parentNode) {
      newNote.parentNode.removeChild(newNote);
    }
  });
  // changing notes' content
  toolTipSpan.addEventListener("dblclick", () => {
    let oldVal = txtNote;
    let newVal = prompt("Enter new description:");
    if (newVal === "") { 
      toolTipSpan.innerHTML = oldVal;
    } else if (newVal) {
      toolTipSpan.innerHTML = txtNote = newVal;
      newNoteArr.txtNote = newVal;
    } else {
      toolTipSpan.innerHTML = oldVal;
    }
  });
  controlNotesForm.reset();
  return newNoteArr;
}

export function dueDateChecker(dateNote, dueDate) {
  if (dateNote !== "") {
    return (dueDate.innerHTML = dateNote);
  } else {
    return (dueDate.innerHTML = "No due-date!");
  }
}
