const express = require('express');
const burgers = require('../models/burger.js');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    burgers.selectAll((data) => {
        const hbsObject = {
            burger: data,
        };
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    const { burger_name, devoured } = req.body;
    burgers.insertOne({
        burger_name,
        devoured,
    }, () => {
        res.redirect('/');
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = req.params.id;
    const { devoured } = req.body;
    burgers.updateOne({
        devoured,
    }, condition, () => {
        res.redirect('/');
    });
});

module.exports = router;