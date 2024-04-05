import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Email already exists'],
      required: [true, 'Email is required'],
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Property',
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Use the correct case for the model name
const User = models.User || model('User', UserSchema);

// Export the model using CommonJS syntax
module.exports = User;
