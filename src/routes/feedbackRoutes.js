const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

router.post('/create', feedbackController.addFeedback);
router.get('/', feedbackController.getFeedback);
router.get('/:id', feedbackController.getFeedbackById);
router.put('/:id', feedbackController.updateFeedback);
router.delete('/:id', feedbackController.deleteFeedback);


module.exports = router;