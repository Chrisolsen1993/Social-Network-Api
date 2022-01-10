const router = require('express').Router();
const {
  
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  AddFriendToUser,
  deleteFriendFromUser
} = require('../../controllers/userController');

// /api/users
router.route('/')
.get(getAllUser)
.post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser)
.put(updateUser)
.delete(deleteUser);



// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(AddFriendToUser)
.delete(deleteFriendFromUser);

module.exports = router;
