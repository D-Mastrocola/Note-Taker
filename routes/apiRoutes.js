//Requires
const router = require("express").Router();
const { notes } = require('../db/db.json');
const { read, write, getNotes, validateNote, addNote, removeNote } = require('../db/store')

// GET "/api/notes" responds with all notes from the database
router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});



// Post "/api/notes" responds with adding a note to database
router.post("/notes", (req, res) => {

  // if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    console.log('adding note');
    const note = addNote(req.body, notes);
    res.json(note);
  }
  res.status(200).send('finished')
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id


// export
module.exports = router;
