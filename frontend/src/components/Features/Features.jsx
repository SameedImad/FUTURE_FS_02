import "./Features.css";
import {
  FiUsers,
  FiClipboard,
  FiEdit3,
  FiMessageSquare,
  FiShield,
  FiBarChart2,
} from "react-icons/fi";

const features = [
  {
    icon: FiUsers,
    title: "Lead Management",
    description:
      "Store and organize all client leads from your website in one centralized dashboard.",
  },
  {
    icon: FiClipboard,
    title: "Lead Status Tracking",
    description:
      "Update lead status from New to Contacted and Converted with a single click.",
  },
  {
    icon: FiEdit3,
    title: "Follow-up Notes",
    description:
      "Add meeting notes, reminders, and follow-up details for every lead.",
  },
  {
    icon: FiMessageSquare,
    title: "Contact Form Integration",
    description:
      "Capture customer inquiries directly from your website and save them automatically.",
  },
  {
    icon: FiShield,
    title: "Secure Admin Access",
    description:
      "Only authorized administrators can access and manage lead information securely.",
  },
  {
    icon: FiBarChart2,
    title: "CRM Dashboard",
    description:
      "View total leads, contacted clients, conversions, and business insights at a glance.",
  },
];

const Features = () => {
  return (
    <section className="features-section" id="features" aria-labelledby="features-title">
      <div className="features-container">
        <p className="features-kicker">WHY CHOOSE US</p>

        <h2 id="features-title">
          Everything You Need to Manage Client Leads
        </h2>

        <p className="features-subtitle">
          Our Mini CRM helps businesses capture leads, track follow-ups,
          manage client interactions, and convert prospects into customers
          from one simple dashboard.
        </p>

        <div className="features-grid">
          {features.map(({ icon: Icon, title, description }) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon">
                <Icon />
              </div>

              <h3>{title}</h3>

              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
