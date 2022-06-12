const { Schema, model, Types } = require('mongoose');
const {dateFormat} = require('../utils/dateFormat.js');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            validate: [({ length }) => length > 0 && length <= 280, 'Thoughts can only be between 1 and 280 characters long!']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: {

        }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);


ThoughtSchema.virtuals('reactionCount').get(function () {
    return this.reactions.length;
});


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought; 