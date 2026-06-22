import "./AdminHeader.css";
import { RiShieldUserFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const AdminHeader = ({ onNavigate }) => {
  const goHome = () => {
    if (onNavigate) {
      onNavigate("/");
      return;
    }

    window.location.href = "/";
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("selectedLead");
    if (onNavigate) {
      onNavigate("/");
      return;
    }
    window.location.href = "/";
  };

  return (
    <nav className="admin-navbar">
      <button type="button" className="logo logo-button" onClick={goHome}>
        <span className="logo-icon" aria-hidden="true">
          <RiShieldUserFill />
        </span>
        <h2>Mini CRM</h2>
      </button>

      <div className="admin-header-actions">
        <div className="admin-user-chip">
          <span className="admin-user-initial">A</span>
          <div className="admin-user-text">
            <strong>Admin</strong>
            <span>Dashboard</span>
          </div>
        </div>

        {/* Mobile-only icon button (hidden on desktop) */}
        <button
          type="button"
          className="admin-logout-icon"
          onClick={handleLogout}
          aria-label="Logout"
        >
          <FiLogOut />
        </button>

        <button type="button" className="admin-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminHeader;
