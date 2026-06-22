import { useEffect, useMemo, useState } from "react";
import "./AdminHero.css";

const AdminHero = ({ onViewLead }) => {
  const [leadData, setLeadData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch leads from backend
  // Call API when component loads
  useEffect(() => {
    let isActive = true;

    const fetchLeads = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("https://mini-crm-backend-5uyg.onrender.com/api/leads", {
          headers: {
            Authorization: token || "",
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Unable to load leads.");
        }

        if (isActive) {
          setLeadData(data.data || []);
        }
      } catch (error) {
        console.log("Error fetching leads:", error);
      }
    };

    fetchLeads();

    return () => {
      isActive = false;
    };
  }, []);

  // Search functionality
  const filteredLeads = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    if (!term) {
      return leadData;
    }

    return leadData.filter((lead) =>
      [lead.name, lead.email, lead.company, lead.source, lead.status]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [searchTerm, leadData]);

  // Dashboard statistics
  const totalLeads = leadData.length;
  const newLeads = leadData.filter((lead) => lead.status === "New").length;
  const contactedLeads = leadData.filter(
    (lead) => lead.status === "Contacted"
  ).length;
  const convertedLeads = leadData.filter(
    (lead) => lead.status === "Converted"
  ).length;

  return (
    <main className="dashboard-page">
      <section className="dashboard-hero">
        <div className="dashboard-intro">
          <p className="dashboard-kicker">ADMIN DASHBOARD</p>
          <h1>Welcome back, Admin</h1>
          <p>
            Manage your client leads, check progress, and keep follow-ups
            simple.
          </p>
        </div>

        <div className="dashboard-stats">
          <article className="stat-card">
            <span>Total Leads</span>
            <strong>{totalLeads}</strong>
          </article>

          <article className="stat-card">
            <span>New</span>
            <strong>{newLeads}</strong>
          </article>

          <article className="stat-card">
            <span>Contacted</span>
            <strong>{contactedLeads}</strong>
          </article>

          <article className="stat-card">
            <span>Converted</span>
            <strong>{convertedLeads}</strong>
          </article>
        </div>

        <div className="dashboard-panel">
          <div className="dashboard-panel-header">
            <div>
              <h2>Leads</h2>
              <p>Search and review your latest client information.</p>
            </div>

            <input
              type="text"
              className="dashboard-search"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="dashboard-table-wrap">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Source</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead._id}>
                    <td>{lead.name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.company}</td>
                    <td>{lead.source}</td>

                    <td>
                      <span
                        className={`status ${lead.status.toLowerCase()}`}
                      >
                        {lead.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="view-btn"
                        onClick={() => onViewLead(lead)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredLeads.length === 0 && (
                  <tr>
                    <td colSpan="6" style={{ textAlign: "center" }}>
                      No Leads Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminHero;
