import AdminHeader from "../components/AdminHeader/AdminHeader.jsx";
import AdminHero from "../components/AdminHero/AdminHero.jsx";

const Dashboard = ({ onNavigate }) => {
  return (
    <>
      <AdminHeader onNavigate={onNavigate} />
      <AdminHero onViewLead={(lead) => onNavigate("/lead-details", lead)} />
    </>
  );
};

export default Dashboard;
