const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/')
.get(getThoughts)
// /api/thoughts/<userId>
router.route('/:userId')
.post(createThought);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);
  // Add a reaction to thought
router
.route("/:thoughtId/reactions/")
.post(addReaction);
// Delete a reaction from thought
router
.route("/:thoughtId/reactions/:reactionId")
.delete(deleteReaction);


module.exports = router;
