const express = require('express');
const { getAllPrescriptions, addPrescription } = require('../services/prescriptionService');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const prescriptions = await getAllPrescriptions();
        res.json(prescriptions);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const newPrescription = await addPrescription(req.body);
        res.status(201).json(newPrescription);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
