//Requires
const router = require("express").Router();
const db = require('../db/db.json');
const {createNewNote} = require("../lib/note");

// GET "/api/notes" responds with all notes from the database
router.get("/notes", (req, res) => {
  let results = db;
  /*if (req.query) {
    results = filterByQuery(req.query, results);
  }*/
  res.json(results);
});

// Post "/api/notes" responds with adding a note to database
router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = db.length.toString();

  // if any data in req.body is incorrect, send 400 error back
  if (!validateAnimal(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, animals);

    res.json(note);
  }
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id


// export
module.exports = router;
