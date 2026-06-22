import "./App.css";
import { useEffect, useState } from "react";
import Home from "../src/pages/Home";
import Admin from "../src/pages/Admin";
import Dashboard from "../src/pages/Dashboard";
import LeadDetails from "../src/pages/LeadDetails";

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [selectedLead, setSelectedLead] = useState(() => {
    const storedLead = localStorage.getItem("selectedLead");

    return storedLead ? JSON.parse(storedLead) : null;
  });
  const token = localStorage.getItem("token");

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleNavigate = (nextPath, payload = null) => {
    if (nextPath === window.location.pathname) {
      if (payload) {
        setSelectedLead(payload);
        localStorage.setItem("selectedLead", JSON.stringify(payload));
      }
      return;
    }

    if (payload) {
      setSelectedLead(payload);
      localStorage.setItem("selectedLead", JSON.stringify(payload));
    }

    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
  };

  if (path === "/" && token) {
    return <Dashboard onNavigate={handleNavigate} />;
  }

  if (path === "/admin") {
    if (token) {
      return <Dashboard onNavigate={handleNavigate} />;
    }

    return <Admin onNavigate={handleNavigate} />;
  }

  if (path === "/dashboard") {
    return <Dashboard onNavigate={handleNavigate} />;
  }

  if (path === "/lead-details") {
    return <LeadDetails lead={selectedLead} onNavigate={handleNavigate} />;
  }

  return <Home onNavigate={handleNavigate} />;
}

export default App;
