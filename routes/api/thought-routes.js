const router = require('express').Router();
// const dateFormat = require('../../utils/dateFormat');

const {
    getThoughts,
    getThoughtByID,
    addThought,
    updateThought,
    deleteThought, 
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router.route('/')
.get(getThoughts)

router.route('/:userid')
.post(addThought)

router.route('/:thoughtId')
.get(getThoughtByID)
.put(updateThought)
.delete(deleteThought)

router.route('/:thoughtId/reactions')
.post(addReaction)

router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

module.exports = router; 