const Prescription = require('../models/Prescription'); // Assuming you have a Prescription model

// Fetch all prescriptions
const getAllPrescriptions = async () => {
    try {
        return await Prescription.find();
    } catch (err) {
        throw new Error('Error fetching prescriptions');
    }
};

// Add a new prescription
const addPrescription = async (data) => {
    try {
        const prescription = new Prescription(data);
        return await prescription.save();
    } catch (err) {
        throw new Error('Error adding prescription');
    }
};

module.exports = {
    getAllPrescriptions,
    addPrescription,
};
