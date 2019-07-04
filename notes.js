const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return "Your notes..."
}

const addNote = (title,body)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>title===note.title)

    debugger
    if(duplicateNotes.length===0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('Note added Successfully'))
    }
    else{
        console.log(chalk.red('Note with the given name already exist'))
    }
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>title!==note.title)
    if(notes.length!==notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green('Note Deleted Successfully'))
    }
    else
        console.log(chalk.red('No note exist with the given title'))
}

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.blue('Your notes'))
    notes.forEach(note=> {
        console.log(chalk.yellow(note.title))
    });
}

const readNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=>note.title===title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(chalk.blue(note.body))
    }
    else{
        console.log(chalk.red('No note found'))
    }
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const notes = dataBuffer.toString()
        return JSON.parse(notes);
    }
    catch{
        return [];
    }
}
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON);
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}