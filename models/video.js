const mongoose = require('mongoose');

const Video = mongoose.model('Hoot', hootSchema);

module.exports = Video;

const videoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ['Raw', 'Edited', 'Cropped'],
        },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        comments: [commentSchema],
    },
    { timestamps: true }
);

const commentSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    { timestamps: true }
);
