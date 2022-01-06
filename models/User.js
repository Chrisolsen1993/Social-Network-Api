const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Reaction');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      Unique:true,
      required: true,
      Trimmed:true,
    },
    email: {
      type: String,
      required: true,
      Unique:true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    thoughts: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Thought'
      }
           ],
    friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]


  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,

  }
);

const User = model('User', userSchema);
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })
  // will try the Setter 

module.exports = User;
