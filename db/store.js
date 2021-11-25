const util = require('util');
const fs = require('fs');
const path = require('path');
const db = require('../db/db.json');

// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuidv1 = require('uuid/v1');


function read() {
  return readFileAsync('db/db.json', 'utf8');
}

function write(note) {

}

function getNotes() {

  // read and return notes


  // If notes isn't an array or can't be turned into one, send back a new empty array

}
function validateNote(note) {
  if (!note.title || typeof note.title !== "string") {
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    return false;
  }
  return true;
}
function addNote(body, notesArray) {
  const note = body;
  // creat note object with validation
  console.log(notesArray);
  // Add a unique id to the note using uuid package
  note.id = uuidv1();

  // Get all notes, add the new note, write all the updated notes, return the newNote

  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  )
  return note;
}

function removeNote(id) {
  // Get all notes, remove the note with the given id, write the filtered notes

}
// export
module.exports = { read, write, getNotes, validateNote, addNote, removeNote };