const router = require('express').Router();
const { Thought, User, reactionSchema } = require('../../models')

router.route('/')
.get(async (req, res) => {
    try{
        const thoughts = await Thought.find() 
        res.json(thoughts)
    } catch(err){
        res.status(500).json(err);
    }
})
.post(async (req, res) => {
    try{
        const thought = await Thought.create(req.body);
        res.json(thought)
    } catch(err){
        res.status(500).json(err);
    }
})


router.route('/:thoughtId')
.get(async (req, res) => {
    try{
        const thought = await Thought.findOne({ _id: req.params.thoughtId });
        if (!thought) {
            return res.status(404).json({ message: 'No thought Found! :(' });
          }
        res.json(thought)
    } catch(err){
        res.status(500).json(err);
    }
})
.put(async (req, res) => {
    try{
        const thought = await Thought.findOneAndUpdate({ _id : req.params.thoughtId}, req.body) 
        res.json(thought)
    } catch(err){
        res.status(500).json(err);
    }
})
.delete(async (req, res) => {
    try{
        const thought = await Thought.findOneAndDelete({_id : req.params.thoughtId});
        if (!thought) {
            return res.status(404).json({ message: 'No thought Found! :(' });
          }
        res.json("Thought successfully Deleted!")
    } catch(err){
        res.status(500).json(err);
    }
})

router.route('/:thoughtId/reactions')
.post(async (req, res) => {
    try{
        const reaction = await reactionSchema.findOne({ _id: req.params._id });
        if (!thought) {
            return res.status(404).json({ message: 'No thought Found! :(' });
          }
        res.json(thought)
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports= router;