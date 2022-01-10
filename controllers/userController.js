const { User, thought } = require('../models');

module.exports = {
  //get alluser
  async getAllUser(req, res) {
    try {
      const userData = await User.find()
      console.log(userData);
      res.json(userData)
    } catch (error) {
      return console.log(err);
    }
  },
  //get single user
  async getSingleUser(req, res) {
    try {
      const singleUser = await User.findOne({ _id: req.params.userId })
        .populate('thoughts')
        .populate('friends')
      console.log(singleUser);
      if (!singleUser) {
        res.json("user not found")
      }
      res.json(singleUser)
    } catch (error) {
      return console.log(error);
    }
  },
  //create user
  async createUser(req, res) {
    try {
      const userData = await User.create(req.body)
      console.log(userData);
      res.json(userData)
    } catch (error) {
      return console.log(err);
    }
  },
  //update user

  async updateUser(req, res) {
    try {
      const updateUser = await User.findOneAndUpdate({ _id: req.params.userId },  { $set: req.body },{ new: true })
      console.log(updateUser);
      if (!updateUser) {
        res.json("user not found with that id")
      }
      res.json(updateUser)
    } catch (error) {
      return console.log(err);
    }
  },
  //delete User
  async deleteUser(req, res) {
    try {
      const deleteUser = await User.findOneAndRemove({ _id: req.params.userId })
      console.log(deleteUser);
      if (!deleteUser) {
        res.json("user not found with that id")
      }
      res.json("User has been deleted")

    } catch (error) {
      return console.log(error);
    }

  },
  //add a new friend to user friend list
  async AddFriendToUser(req, res) {
    try {
      // const { params } = req;
      // const friendData = await User.findById(req.params.userId)
      const friendData = await User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { runValidators: true, new: true })
      // console.log(72, { friendData })
      if (!friendData) {
        res.json("user not found with that id")
      }
      res.json("Friend has been added")
    } catch (error) {
      return console.log(error)
    }


  },
  //remove a friend from user friend's list
  async deleteFriendFromUser(req, res){

try {
const deleteFriend= await User.findOneAndUpdate(
  {_id: req.params.userId},
  {$pull: {friends: req.params.friendId}},
  { runValidators: true, new: true }
 )
 if(!deleteFriend){
  res.json("user not found with that id")
 }
  res.json("friend has been deleted")
} catch (error) {
  return console.log(error)
}

  }


};
