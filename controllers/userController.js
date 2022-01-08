const { User, thought } = require('../models');

module.exports = {
  //get alluser
async getAllUser (req, res){
  try {
    const userData = await User.find()
    console.log(userData);
    res.json(userData)
  } catch (error) {
    return console.log(err);
  }
},
//get single user
async getSingleUser (req, res){
  try {
    const singleUser = await User.findOne({ _id: req.params.userId })
    .populate('thoughts')
    .populate('friends')
    console.log(singleUser);
    if (!singleUser){
     res.json("user not found")
    }
    res.json(singleUser)
  } catch (error) {
    return console.log(error);
  }
},
//create user
async createUser (req, res){
  try {
    const userData = await User.create(req.body)
    console.log(userData);
    res.json(userData)
  } catch (error) {
    return console.log(err);
  }
},
//update user

async updateUser (req, res){
  try {
    const updateUser = await User.findOneAndUpdate({ _id: req.params.userId }, body, {new:true})
    console.log(updateUser);
    if (!updateUser){
      res.json("user not found with that id")
     }
    res.json(updateUser)
  } catch (error) {
    return console.log(err);
  }
},
//delete User
async deleteUser(req, res){
try{
  const deleteUser = await User.findOneAndRemove({ _id: req.params.userId })
    console.log(deleteUser);
    if (!deleteUser){
      res.json("user not found with that id")
     }
    res.json("User has been deleted")

} catch (error) {
  return console.log(err);
}

},
//add a new friend to user friend list
async  AddFriendToUser(req, res){
  try {
    friendData = await User.findOneAndUpdate({_id: req.params.userId}, {$addToSet: { friend: req.body}} )
    
  } catch (error) {
    
  }


}


//   // Delete a student and remove them from the course
//   deleteStudent(req, res) {
//     Student.findOneAndRemove({ _id: req.params.studentId })
//       .then((student) =>
//         !student
//           ? res.status(404).json({ message: 'No such student exists' })
//           : Course.findOneAndUpdate(
//               { students: req.params.studentId },
//               { $pull: { students: req.params.studentId } },
//               { new: true }
//             )
//       )
//       .then((course) =>
//         !course
//           ? res.status(404).json({
//               message: 'Student deleted, but no courses found',
//             })
//           : res.json({ message: 'Student successfully deleted' })
//       )
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },

//   // Add an assignment to a student
//   addAssignment(req, res) {
//     console.log('You are adding an assignment');
//     console.log(req.body);
//     Student.findOneAndUpdate(
//       { _id: req.params.studentId },
//       { $addToSet: { assignments: req.body } },
//       { runValidators: true, new: true }
//     )
//       .then((student) =>
//         !student
//           ? res
//               .status(404)
//               .json({ message: 'No student found with that ID :(' })
//           : res.json(student)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
//   // Remove assignment from a student
//   removeAssignment(req, res) {
//     Student.findOneAndUpdate(
//       { _id: req.params.studentId },
//       { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
//       { runValidators: true, new: true }
//     )
//       .then((student) =>
//         !student
//           ? res
//               .status(404)
//               .json({ message: 'No student found with that ID :(' })
//           : res.json(student)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
};
