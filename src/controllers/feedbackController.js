const feedbackService = require('../services/feedbackService');

exports.addFeedback = async (req, res) => {
    try{
        const feedback = req.body;
        const newFeedback = await feedbackService.createFeedback(feedback);
        return res.status(201).json({ message: 'Feedback added successfully', user: newFeedback });
    }
    catch(e){
        return res.status(500).json({ message: e.message });
    }
}

exports.getFeedback = async (req, res) => {
    try{
        const feedback = await feedbackService.getFeedback();
        return res.status(200).json({ feedback });
    }
    catch(e){
        return res.status(500).json({ message: e.message });
    }
}

exports.getFeedbackById = async (req, res) => {
    try{
        const feedback = await feedbackService.getFeedbackById(req.params.id);
        return res.status(200).json({ feedback });
    }
    catch(e){
        return res.status(500).json({ message: e.message });
    }
}

exports.updateFeedback = async (req, res) => {
    try{
        const feedback = req.body;
        const updatedFeedback = await feedbackService.updateFeedback(req.params.id, feedback);
        return res.status(200).json({ message: 'Feedback updated successfully', user: updatedFeedback });
    }
    catch(e){
        return res.status(500).json({ message: e.message });
    }
}

exports.deleteFeedback = async (req, res) => {
    try{
        const feedback = await feedbackService.deleteFeedback(req.params.id);
        return res.status(200).json({ message: 'Feedback deleted successfully' });
    }
    catch(e){
        return res.status(500).json({ message: e.message });
    }
}