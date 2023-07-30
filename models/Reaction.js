const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtValue) => {
        const myDate = new Date(createdAtValue).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: '2-digit',
            day: '2-digit',
          }
        );
        return `${myDate}`
      }
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    }
  }
);

module.exports = reactionSchema;
