import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <h3>Mini CRM</h3>
          <p>
            A clean lead management experience for modern businesses.
          </p>
        </div>

        <div className="site-footer-meta">
          <p>Built with care by Sameed Imad</p>
          <span>© {year} All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
