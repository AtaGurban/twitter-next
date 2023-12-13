import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(),
  },
  name: String,
  username: String,
  bio: String,
  email: {
    type: String,
    unique: true,
  },
  emailVerified: Date,
  image: String,
  profileImage: String,
  coverImage: String,
  hashedPassword: String,
  followingIds: [{
    type: String,
    ref: 'User',
  }],
  hasNotification: Boolean,
  posts: [{
    type: String,
    ref: 'Post',
  }],
  notifications: [{
    type: String,
    ref: 'Notification',
  }],
  comments: [{
    type: String,
    ref: 'Comment',
  }],
}, {timestamps: true});

export const User = mongoose.models.User || mongoose.model('User', userSchema);

// Post Schema
const postSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(),
  },
  body: String,
  userId: String,
  user: {
    type: String,
    ref: 'User',
  },
  comments: [{
    type: String,
    ref: 'Comment',
  }],
}, {timestamps: true});

export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

// Comment Schema
const commentSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(),
  },
  body: String,
  userId: String,
  postId: String,
  user: {
    type: String,
    ref: 'User',
  },
  post: {
    type: String,
    ref: 'Post',
  },
}, {timestamps: true});

export const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema);

// Notification Schema
const notificationSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(),
  },
  body: String,
  userId: String,
  user: {
    type: String,
    ref: 'User',
  },
}, {timestamps: true});

export const Notification = mongoose.models.Notification || mongoose.model('Notification', notificationSchema);


