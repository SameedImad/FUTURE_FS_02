import AdminHeader from "../components/AdminHeader/AdminHeader.jsx";
import LeadDetailsCard from "../components/LeadDetails/LeadDetails.jsx";

const LeadDetails = ({ lead, onNavigate }) => {
  return (
    <>
      <AdminHeader onNavigate={onNavigate} />
      <LeadDetailsCard lead={lead} onNavigate={onNavigate} />
    </>
  );
};

export default LeadDetails;
