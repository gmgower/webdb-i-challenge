// s1
const express = require('express');

// s2
const db = require('../data/dbConfig.js');

// s3
const router = express.Router();

// 9
router.post('/', (req, res) => {
    const postData = req.body;

    db('accounts').insert(postData)
    .then(account => {
        res.status(201).json(account)
    })
    .catch(err => {
        res.status(500).json({message: 'Problem with the database.', err})
    })
})

// 8
router.get('/', (req, res) => {
    // console.log(accounts)
    db('accounts')
    // .select('*')
        .then(accounts => {          
            res.status(200).json(accounts);
        })
        .catch(err => {
            res.status(500).json({message: 'Problem with the database.', err})
        })
});


// 10
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    db('accounts').where({id}).update(changes)
        .then(count => {
            if(count) {
            res.status(200).json({update: count})
        } else {
            res.status(404).json({message: 'invalid id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Problem with database.'})
    })
})


// 11
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db('accounts')
      .where({id})
      .del()
      .then( count => {
        count
          ? res.status(200).json({deleted: count})
          : res.status(404).json({ message: 'Invalid ID' });
      })
      .catch( err => {
        res.status(500).json({ message: 'Problem with the database' });
      });
});


// s4
module.exports = router;


