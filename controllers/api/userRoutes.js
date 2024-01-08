const router = require('express').Router();
const { User } = require('../../models')

router.route('/')
.get(async (req, res) => {
    try{
        const users = await User.find() 
        res.json(users)
    } catch(err){
        res.status(500).json(err);
    }
})
.post(async (req, res) => {
    try{
        const user = await User.create(req.body);
    } catch(err){
        res.status(500).json(err);
    }
})
.put(async (req, res) => {
    try{
        const user = await User.findOneAndUpdate({ _id : req.params.userId});
        
    } catch(err){
        res.status(500).json(err);
    }
})
.delete(async (req, res) => {
    try{
        const user = await User.findOneAndDelete({ _id : req.params.userId});

        if(!user) {
            return res.status(404).json({ message: 'No User Found! :('})
        }
    } catch(err){
        res.status(500).json(err);
    }
});


router.get('/:userId', async (req, res) => {
    try{
        const user = await User.findOne({ _id: req.params.userId })
        if (!user) {
            return res.status(404).json({ message: 'No User Found! :(' });
          }
        res.json(user)
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports= router;