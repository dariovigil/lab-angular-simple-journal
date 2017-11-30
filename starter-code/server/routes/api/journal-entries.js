const express       = require('express');
const router        = express.Router();
const Entry         = require('../../models/journal-entry');

/* List all journal entries from #{model} */
router.get('/journal-entries', (req, res, next) => {
  Entry.find()
    .then(entries => {
      res.json(entries);
    })
    .catch(e => res.json(e));
});

router.get('/journal-entries/:id', (req, res, next) => {
  Entry.findById(req.params.id, (err, entry) => {
    if (err)    { return res.json(err).status(500); }
    if (!entry) { return res.json(err).status(404); }

    return res.json(entry);
  });
});

router.post('/journal-entries', (req, res, next) => {
  const newEntry = new Entry(req.body);

  newEntry.save( (err) => {
    if (err)             { return res.status(500).json(err) }
    if (newEntry.errors) { return res.status(400).json(newEntry) }
                           return res.json(newEntry);
  });
});

module.exports = router;
