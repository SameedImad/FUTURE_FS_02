import { useState } from "react";
import "./LeadDetails.css";

const LeadDetails = ({ lead, onNavigate }) => {
  const [status, setStatus] = useState(lead?.status || "New");
  const [notes, setNotes] = useState(lead?.notes || "");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const goBack = () => {
    if (onNavigate) {
      onNavigate("/dashboard");
      return;
    }

    window.location.href = "/dashboard";
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!lead?._id) {
      setMessage("No lead is loaded to save.");
      return;
    }

    setIsSaving(true);
    setMessage("");

    try {
      const response = await fetch(
        `https://mini-crm-backend-5uyg.onrender.com/api/leads/${lead._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token") || "",
          },
          body: JSON.stringify({ status, notes }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Unable to save lead changes.");
      }

      localStorage.setItem(
        "selectedLead",
        JSON.stringify(data.data || { ...lead, status, notes })
      );

      setMessage("Lead changes saved.");
    } catch (error) {
      setMessage(error.message || "Unable to save lead changes.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!lead) {
    return (
      <main className="lead-details-page">
        <section className="lead-details-card">
          <button type="button" className="lead-back-btn" onClick={goBack}>
            ← Back
          </button>
          <h1 className="lead-details-title">Lead Details</h1>
          <p className="lead-details-empty">
            No lead selected. Please go back to the dashboard and click View.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="lead-details-page">
      <section className="lead-details-card">
        <button type="button" className="lead-back-btn" onClick={goBack}>
          ← Back
        </button>

        <h1 className="lead-details-title">Lead Details</h1>

        <div className="lead-details-grid">
          <div className="lead-detail-item">
            <span>Name</span>
            <strong>{lead.name}</strong>
          </div>

          <div className="lead-detail-item">
            <span>Email</span>
            <strong>{lead.email}</strong>
          </div>

          <div className="lead-detail-item">
            <span>Phone</span>
            <strong>{lead.phone}</strong>
          </div>

          <div className="lead-detail-item">
            <span>Company</span>
            <strong>{lead.company}</strong>
          </div>

          <div className="lead-detail-item">
            <span>Lead Source</span>
            <strong>{lead.source}</strong>
          </div>

          <div className="lead-detail-item">
            <span>Status</span>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>New</option>
              <option>Contacted</option>
              <option>Converted</option>
            </select>
          </div>
        </div>

        <div className="lead-message-block">
          <span>Message</span>
          <p>"{lead.message}"</p>
        </div>

        <form className="lead-notes-form" onSubmit={handleSave}>
          <label className="lead-notes-label">
            <span>Follow-up Notes</span>
            <textarea
              rows="4"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write your follow-up notes here..."
            />
          </label>

          <button type="submit" className="lead-save-btn">
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </form>

        {message ? <p className="lead-save-message">{message}</p> : null}
      </section>
    </main>
  );
};

export default LeadDetails;
