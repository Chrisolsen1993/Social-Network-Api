const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');
// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
  
    username: {
      type: String,
      required: true
         },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

const Thought = model('Thought', thoughtSchema);
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  })
  // will try the Setter 

module.exports = Thought;
