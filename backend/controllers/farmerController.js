const FarmerModel = require('../models/farmerModel');
const createFarmer = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body;
        const farmer = new FarmerModel({ name, phone, email, password });
        await farmer.save();
        res.status(201).json(farmer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const viewFarmers = async (req, res) => {
    try {
        const farmers = await FarmerModel.find();
        res.status(200).json(farmers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const updateFarmer = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, phone, email, password } = req.body;
        const farmer = await FarmerModel.findByIdAndUpdate(id, { name, phone, email, password }, { new: true });
        if (!farmer) {
            return res.status(404).json({ message: 'Farmer not found' });
        }
        res.status(200).json(farmer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const deleteFarmer = async (req, res) => {
    try {
        const { id } = req.params;
        const farmer = await FarmerModel.findByIdAndDelete(id);
        if (!farmer) {
            return res.status(404).json({ message: 'Farmer not found' });
        }
        res.status(200).json({ message: 'Farmer deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


module.exports = {createFarmer, viewFarmers, updateFarmer, deleteFarmer};