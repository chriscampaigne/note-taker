const router = require('express').Router();
const fs = require('fs')
// returns notes as json
const saveData = require('../db/db.json');

// GET request
router.get('/notes', function (req, res) {
    fs.readFile("./db/db.json", "utf-8", function(err,data){
        console.log(err)
        var notes = JSON.parse(data)
        res.json(notes)
    })

    //saveData
       // .retrieveNotes()
        //.then(notes => res.json(notes))
       // .catch(err => res.status(500).json(err));
});

// POST request
router.post('/notes', (req, res) => {
    fs.readFile("./db/db.json", "utf-8", function(err,data){
        console.log(err)
        var notes = JSON.parse(data)
        notes.push(req.body)
        fs.writeFile("./db/db.json", JSON.stringify(notes), function(err,data){
            res.json(req.body)
        })
        
    })

    // saveData
    //     .addNote(req.body)
    //     .then((note) => res.json(note))
    //     .catch(err => res.status(500).json(err));
});

module.exports = router;