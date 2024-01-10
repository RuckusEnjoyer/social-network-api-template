const router = require('express').Router();
const { User } = require('../../models')

router.route('/')
.get(async (req, res) => {
    try{
        const users = await User.find() 
        res.json(users)
    } catch(err){
        res.status(500).json(err);
        console.log(err)
    }
})
.post(async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.json(user)
    } catch(err){
        res.status(500).json(err);
        console.log(err)

    }
})



router.route('/:userId')
.get( async (req, res) => {
    try{
        const user = await User.findOne({ _id: req.params.userId })
        if (!user) {
            return res.status(404).json({ message: 'No User Found! :(' });
          }
        res.json(user)
    } catch(err){
        res.status(500).json(err);
        console.log(err)

    }
})
.put( async (req, res) => {
    try{
        const user = await User.findOneAndUpdate({ _id : req.params.userId}, req.body) 
        res.json(user)
    } catch(err){
        res.status(500).json(err);
        console.log(err)

    }
})
.delete( async (req, res) => {
    try{
        const user = await User.findOneAndDelete({ _id : req.params.userId});

        if(!user) {
            return res.status(404).json({ message: 'No User Found! :('})
        }
        res.json('User Deleted!')
    } catch(err){
        res.status(500).json(err);
        console.log(err)

    }
});

module.exports= router;