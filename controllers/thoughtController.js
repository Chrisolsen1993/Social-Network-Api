const { User, Thought } = require('../models');

module.exports = {
  
  // get all thought
  async getThoughts (req, res){
    try {
      const thoughtData = await Thought.find()
      console.log(thoughtData);
      res.json(thoughtData)
    } catch (error) {
      return console.log(error);
    }
  },
  // get a thought
async getSingleThought(req, res){
  try {
  const singleThoughtData= await Thought.findOne({_id: req.params.thoughtId })
   if (!singleThoughtData){
     console.log("no thought found with that id")
   }
   res.json(singleThoughtData)

   }  catch (error) {
  return console.log(error)
}

  },



  // Another way of Creating a thought
  // createThought(req, res) {
  //   Thought.create(req.body)
  //   .then((data) => {
  //     return User.findOneAndUpdate(
  //       { _id: req.params.userId },
  //       { $push: { thoughts: data._id } },
  //       { new: true }
  //     );
  //   })
  //   .then(dbUserData => {
  //     if (!dbUserData) {
  //         res.json({ message: 'thought created, but no user with this ID' });
  //         return;
  //     }
  //     res.json(dbUserData);
  //   })
  //     .catch((err) => {
  //       console.log(err);
  //       return res.status(500).json(err);
  //     });
  // },


//create a thought
async createThought (req, res){
  try {
     await Thought.create(req.body)
     const data = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { thoughts: req.params.userId} },
      { new: true }
    );
    if (!data){
      res.json({ message: 'thought created, but no user with this ID' });
      return;
  }
  res.json(data)
  } catch (error) {
    return console.log(error);
  }
},
//update Thought
async updateThought(req,res){
try {
  const updateData = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, { $set: req.body }, { new: true })
  if (!updateData){
    res.json("No thought found with that id")
  }
  res.json(updateData)
} catch (error) {
  return console.log(error);
}

},
async deleteThought(req, res) {
  try {
    const deletedData = await Thought.findOneAndRemove({ _id: req.params.thoughtId })
    console.log(deletedData);
    if (!deletedData) {
      res.json("thought not found with that id")
    }
    res.json("thought has been deleted")

  } catch (error) {
    return console.log(error);
  }

},
async addReaction(req, res) {
  try {
    // const { params } = req;
    // const reactionData = await User.findById(req.params.userId)
    const reactionData = await Thought.findByIdAndUpdate(req.params.thoughtId, { $addToSet: { reactions: req.body } }, { runValidators: true, new: true })
    // console.log(72, { friendData })
    if (!reactionData) {
      res.json("thought not found with that id")
    }
    res.json("reaction has been added")
  } catch (error) {
    return console.log(error)
  }

},
 //remove a friend from user friend's list
 async deleteReaction(req, res){

  try {
  const deleteData= await Thought.findOneAndUpdate(
    {_id: req.params.thoughtId},
    {$pull: { reactions: { reactionId: req.params.reactionId } }},
    { runValidators: true, new: true }
   )
   if(!deleteData){
    res.json("thought not found with that id")
   }
    res.json("reaction has been deleted")
  } catch (error) {
    return console.log(error)
  }
  
    }

  
};
