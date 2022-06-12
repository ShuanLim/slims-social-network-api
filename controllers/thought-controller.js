const { Thought, User } = require('../models');

const thoughtController = {

    getThoughts(req, res) {
        Thought.find({})
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getThoughtByID({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    addThought({ body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.UserId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'Thought data is incorrect.' });
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => res.json(err));
    },
    updateThought({params, body}, res) {
        Thought.findByIdAndUpdate({_id: params.thoughtId}, body, {runValidators: true, new: true})
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({ message: 'No user found with this ID!' });
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.json(err));
    },
    deleteThought({params}, res) {
        Thought.findByIdAndDelete({_id: params.thoughtId}, {runValidators: true, new: true})
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({ message: 'No user found with this ID!' });
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.json(err));
    }
}

module.exports = thoughtController; 