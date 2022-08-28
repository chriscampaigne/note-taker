const path = require('path');
const router = require('express').Router();

router.get('/', (req,res) => {
    res.sendFile(path.join(Develop, '../public/index.html'));
});

router.get('/notes', (req,res) => {
    res.sendFile(path.join(Develop, '../public/notes.html'));
})

router.get('*', (req,res) => {
    res.sendFile(path.join(Develop, '../public/index.html'));
});

module.exports = router;