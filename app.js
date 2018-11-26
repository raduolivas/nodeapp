const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs'); 

const notes = require('./notes');

const argv = yargs.argv;

let command = argv._[0];

if (command == 'add') {
	let note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created');
		notes.logNote(note);
	} else {
		console.log('Note title taken')
	}
} else if (command == 'list') {
	let allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));
} else if (command == 'read') {
	let note = notes.getNote(argv.title);
	if (note) {
		console.log('Note found');
		notes.logNote(note);
	} else {
		console.log('Note not found');
	}
} else if (command == 'remove') {
	let removed = notes.removeNote(argv.title);
	let message = removed ? 'Note was removed' : 'Note was not removed';
	console.log(message);
} else {
	console.log('Command not recognized');
}