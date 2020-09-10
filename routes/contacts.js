const express = require('express');
const router = express.Router();

// @route GET api/contacts
// @desc Get all Users contacts
// @access Private
router.get('/', (req, res) => {
  res.send('Get contacts associated to Users');
});

// @route POST api/contacts
// @desc Add contact
// @access Private
router.post('/', (req, res) => {
  res.send('Add new contact for the user');
});
// @route DELETE api/contacts/:id
// @desc Delete contact
// @access Private
router.delete('/:id', (req, res) => {
  res.send('Delete a contact for the user');
});
// @route PUT api/contacts/:id
// @desc Update contact
// @access Private
router.put('/:id', (req, res) => {
  res.send('update a contact for the user');
});
module.exports = router;
