const express=require("express")

const router=express.Router();

const { createLead } = require("../controllers/leadController");
const {getAllLeads}=require("../controllers/leadController.js");
const {getLeadById}=require("../controllers/leadController.js");
const {updateLead}=require("../controllers/leadController.js");
const {deleteLead}=require("../controllers/leadController.js")

router.post("/", createLead);
router.get("/",getAllLeads);
router.get("/:id",getLeadById);
router.put("/:id", updateLead);
router.delete("/:id", deleteLead);

module.exports=router