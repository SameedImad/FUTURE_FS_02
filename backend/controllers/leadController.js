const Lead = require("../models/Lead");

const createLead = async (req, res) => {
  try {
    const { name, email, phone, company, source, message } = req.body;

    const lead = new Lead({
      name,
      email,
      phone,
      company,
      source,
      message,
    });

    await lead.save();

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: lead,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating lead",
      error: error.message,
    });
  }
};

const getAllLeads = async (req, res) => {
    try {

        const leads = await Lead.find();

        res.status(200).json({
            success: true,
            data: leads
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateLead = async (req, res) => {
  try {

    const { id } = req.params;

    const { status, notes } = req.body;

    const updatedLead = await Lead.findByIdAndUpdate(
      id,
      {
        status,
        notes
      },
      {
        new: true
      }
    );

    res.status(200).json({
      success: true,
      data: updatedLead
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const deleteLead = async (req, res) => {
  try {

    const { id } = req.params;

    await Lead.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Lead deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// Export the controller function
module.exports = {
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  deleteLead
};