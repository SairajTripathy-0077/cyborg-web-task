let notes = [];
let currentPage = 1;
const notesPerPage = 5;

const noteForm = document.getElementById('note-form');
const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('notes-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const pageIndicator = document.getElementById('page-indicator');
const notesContainer = document.getElementById('notes-container');

function loadNotes(){
    const saved = localStorage.getItem('simple-notes');
    if(saved){
        notes = JSON.parse(saved);
    }else{
        notes = [];
    }
}

function saveNotes() {
    localStorage.setItem('simple-notes', JSON.stringify(notes));
}

function renderNotes() {
    notesContainer.innerHTML = '';

    if(notes.length === 0){
        notesContainer.innerHTML = `
            <div class="text-center text-slate-500 py-10 border-2 border-dashed border-slate-200 rounded-lg">
                No notes available. Please add a note!
            </div>
        `;
        pageIndicator.textContent = 'Page 1 of 1';
        prevButton.disabled = true;
        nextButton.disabled = true;
        return;
    }

    const totalPages = Math.ceil(notes.length / notesPerPage);
    if(currentPage > totalPages) currentPage = totalPages;
    if(currentPage < 1) currentPage = 1;
    
    const startIndex = (currentPage - 1) * notesPerPage;
    const endIndex = startIndex + notesPerPage;
    const currentNotes = notes.slice(startIndex, endIndex);

    currentNotes.forEach(function(note) {
        const noteCard = document.createElement('div');
        noteCard.className = 'bg-white border border-slate-200 rounded-lg p-4 shadow-sm relative';

        const titleText = note.title ? note.title : 'Untitled Note'

        noteCard.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <span class="font-bold text-slate-800">${titleText}</span>
                <button class="text-red-500 hover:text-red-700 text-xs font-semibold" onclick="deleteNote(${note.id})">
                    Delete
                </button>
            </div>
            <p class="text-sm text-slate-600 mb-3 whitespace-pre-wrap">${note.content}</p>
            <div class="text-xs text-slate-400 border-t border-slate-100 pt-2">
                Created: ${note.date}
            </div>
        `
        notesContainer.appendChild(noteCard);
    });

    pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
    prevButton.disabled = (currentPage === 1);
    nextButton.disabled = (currentPage === totalPages);
}

noteForm.addEventListener('submit', function(event){
    event.preventDefault();

    const title = noteTitleInput.value.trim();
    const content = noteContentInput.value.trim();

    if (!content) return;

    const newNote = {
        id: Date.now(),
        title: title,
        content: content,
        date: new Date().toLocaleString()
    };

    notes.unshift(newNote);
    saveNotes(); 

    noteTitleInput.value = '';
    noteContentInput.value = '';

    currentPage = 1;
    renderNotes();
});

window.deleteNote = function(id) {
    const confirmDelete = confirm('Are you sure you want to delete this note?');
    if (confirmDelete) {
        notes = notes.filter(function(note) {
            return note.id !== id;
        });

        saveNotes();    
        renderNotes();  
    }
};

prevButton.addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        renderNotes();
    }
});

nextButton.addEventListener('click', function() {
    const totalPages = Math.ceil(notes.length / notesPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderNotes();
    }
});

loadNotes();
renderNotes();