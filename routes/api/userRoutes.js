const router = require('express').Router();
const {
  // getStudents,
  // getSingleStudent,
  // createStudent,
  // deleteStudent,
  // addAssignment,
  // removeAssignment,
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  AddFriendToUser,
  DeleteFriendFromUser
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getAllUser).post(createUser);

// /api/students/:studentId
router.route('/:studentId').get(getSingleStudent).delete(deleteStudent);

// /api/students/:studentId/assignments
router.route('/:studentId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
