const Case = require("../models/caseModel");

exports.createCase = async (req, res) => {
  try {
    const newCase = await Case.create(req.body);
    res.json(newCase);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllCases = async (req, res) => {
  try {
    const cases = await Case.find().populate("customer_id assigned_to");
    res.json(cases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCaseById = async (req, res) => {
  try {
    const caseData = await Case.findById(req.params.id).populate("customer_id assigned_to");
    res.json(caseData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCase = async (req, res) => {
  try {
    const updated = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteCase = async (req, res) => {
  try {
    await Case.findByIdAndDelete(req.params.id);
    res.json({ message: "Case deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
