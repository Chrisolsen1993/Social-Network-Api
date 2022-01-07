const router = require('express').Router();
const {
  
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  // AddFriendToUser,
  // DeleteFriendFromUser
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
// router.route('/:userId/friends/:friendId').post(AddFriendToUser).delete(DeleteFriendFromUser);

module.exports = router;
