const router = require('express').Router();
const { Books } = require('../models');

// restful api
// /api/todo/
router
  .route('/')
  .get((req, res) => {
    Books
      .find({})
      .then(data => {
        res.json({ success: true, data });
      })
      .catch(err => {
        res.json({ success: false });
      });
  })
  .post((req, res) => {
    console.log({ reqBody: req.body });

    Books
      .create({
        text: req.body.text
      })
      .then(data => {
        res.json({ success: true, data });
      })
      .catch(err => {
        res.json({ success: false });
      });
  });


// /api/todo/:id
router
  .route('/:id')
  .delete((req, res) => {
    console.log(req.params);

    Books
      .findByIdAndDelete(req.params.id)
      .then(data => {
        res.json({ success: true });
      })
      .catch(err => {
        res.json({ success: false });
      });
  });

module.exports = router;