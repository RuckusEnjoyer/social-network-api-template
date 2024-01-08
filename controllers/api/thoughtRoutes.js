const router = require('express').Router();
const { Thought, User } = require('../../models')

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
    } catch(err){
        res.status(500).json(err);
    }
})
.put(async (req, res) => {
    try{
        const thoughts = await Thought.find() 
        res.json(thoughts)
    } catch(err){
        res.status(500).json(err);
    }
})
.delete(async (req, res) => {
    try{
        const thought = await Thought.findOneAndDelete({_id : req.params.userId});
        if(!user) {
            return res.status(404).json({ message: 'No Thought Found! :('})
        }
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports= router;