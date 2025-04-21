import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      match: [/.+@.+\..+/, 'Please enter a valid email'],
    },
    course: {
      type: String,
      default: 'Undeclared',
    },
    enrolledDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Student', studentSchema);
