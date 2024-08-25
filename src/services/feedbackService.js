
const Feedback = require('../models/feedbackModel');

// Create a new feedback
async function createFeedback(feedbackData)
{
    const feedback = new Feedback(feedbackData);
    await feedback.save();
    return feedback;
  
}

// Get all feedback
async function getFeedback()
{
    const feedback = await Feedback.find();
    return feedback;
}

// Get feedback by id
async function getFeedbackById(id)
{
    const feedback = await Feedback.findById(id);
    return feedback;
}

async function updateFeedback(id, feedbackData)
{
    const feedback = await Feedback.findByIdAndUpdate (id, feedbackData, {new: true});
    return feedback;
}

async function deleteFeedback(id)
{
    await Feedback.findByIdAndDelete(id);
}

module.exports = {
    createFeedback,
    getFeedback,
    getFeedbackById,
    updateFeedback,
    deleteFeedback
};