const chalk = require('chalk')
const yargs = require('yargs')
const getUtils = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        
        getUtils.addNote(argv.title,argv.body)
    }

})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'title of the note to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        getUtils.addNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
       
        getUtils.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe: 'title of the note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        getUtils.readNote(argv.title)
    }
}).argv
