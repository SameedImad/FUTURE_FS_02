import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-kicker">SMART MODERN SCALABLE</p>
          <h1 id="hero-title">
            Customer Relationship Management
          </h1>
          <p className="hero-subtitle">
            Collect leads from your website, track their status, manage follow-ups, and convert prospects into clients with one simple dashboard.
          </p>

          <div className="hero-actions">
            <a className="hero-btn hero-btn-primary" href="#contact">
              Contact Us
              <span aria-hidden="true">→</span>
            </a>
            <a className="hero-btn hero-btn-secondary" href="#features">
              Explore
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="crm-preview">
            <div className="crm-card crm-card-main">
              <div className="crm-card-header">
                <div>
                  <p className="crm-kicker">CRM DASHBOARD</p>
                  <h3>Simple lead overview</h3>
                </div>
                <span className="crm-chip">Live</span>
              </div>

              <div className="crm-stats">
                <div className="stat">
                  <span>New Leads</span>
                  <strong>128</strong>
                </div>
                <div className="stat">
                  <span>Follow Ups</span>
                  <strong>74</strong>
                </div>
                <div className="stat">
                  <span>Converted</span>
                  <strong>21</strong>
                </div>
              </div>

                <div className="lead-item">
                  <span className="lead-dot lead-dot-alt"></span>
                  <div>
                    <strong>Muneer</strong>
                    <p>Referral</p>
                  </div>
                  <span className="lead-status lead-status-active">New</span>
                </div>

              <div className="lead-list">
                <div className="lead-item">
                  <span className="lead-dot"></span>
                  <div>
                    <strong>Sameed Imad</strong>
                    <p>Website inquiry</p>
                  </div>
                  <span className="lead-status lead-status-warm">Contacted</span>
                </div>

                <div className="lead-item">
                  <span className="lead-dot lead-dot-teal"></span>
                  <div>
                    <strong>Kazim Tausif</strong>
                    <p>Instagram</p>
                  </div>
                  <span className="lead-status lead-status-new">Converted</span>
                </div>
              </div>

              <div className="crm-footer">
                <span>Conversion rate</span>
                <strong>18.4%</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
