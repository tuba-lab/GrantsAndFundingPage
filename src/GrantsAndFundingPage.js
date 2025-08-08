import React, { useState, useEffect } from "react";

// The Header component, self-contained within this file.
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownItems = [
    { label: "Thrust Area", key: "thrust-area", href: "#" },
    {
      label: "On Going Research Projects",
      key: "ongoing-research-projects",
      href: "#",
    },
    {
      label: "Completed Research Projects",
      key: "completed-research-projects",
      href: "#",
    },
    { label: "Joint Project", key: "joint-project", href: "#" },
    {
      label: "Important Laboratories",
      key: "important-laboratories",
      href: "/laboratories",
    },
    {
      label: "Departmental Committees",
      key: "departmental-committees",
      href: "#",
    },
    {
      label: "Alumni Relations",
      key: "alumni-relations",
      href: "/alumni-relations",
    },
  ];

  // Hook to handle closing the dropdown when a user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".dropdown-toggle") &&
        !e.target.closest(".dropdown-menu")
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        /* --- HEADER STYLES --- */
        .amu-header-horizontal {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #e0e0e0;
          padding: 12px 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          flex-wrap: wrap; /* Allows items to wrap on smaller screens */
        }

        .amu-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .amu-left img {
          height: 45px;
          flex-shrink: 0; /* Prevents the logo from shrinking */
        }

        .amu-title {
          font-weight: bold;
          font-size: 1.2em;
          color: #004d40;
          white-space: nowrap; /* Prevents the title from wrapping prematurely */
        }

        .amu-nav {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .amu-nav-link, .dropdown-toggle {
          text-decoration: none;
          color: #004d40;
          font-weight: 600;
          font-size: 0.95em;
          cursor: pointer;
          transition: color 0.2s ease-in-out;
          padding: 8px 0; /* Add padding for better touch targets */
        }

        .amu-nav-link:hover, .dropdown-toggle:hover {
          color: #00796b;
        }

        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          background: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          padding: 10px;
          top: 100%;
          right: 0;
          z-index: 999;
          min-width: 250px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .dropdown-menu-item {
          display: block;
          padding: 8px;
          color: #004d40;
          text-decoration: none;
          font-size: 14px;
          transition: background-color 0.2s ease-in-out;
        }

        .dropdown-menu-item:hover {
          background: #e0f2f1;
          border-radius: 4px;
        }

        /* Responsive adjustments for the header on tablets and mobile devices */
        @media (max-width: 768px) {
          .amu-header-horizontal {
            flex-direction: column;
            align-items: center;
            padding: 15px;
          }
          .amu-left {
            margin-bottom: 15px;
            flex-direction: column;
            text-align: center;
          }
          .amu-nav {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            width: 100%;
          }
          .amu-nav-link, .dropdown-toggle {
            width: 100%;
            text-align: center;
            padding: 12px 0; /* Larger touch targets */
            border-bottom: 1px solid #eee; /* Visual separation for menu items */
          }
          .amu-nav-link:last-child {
            border-bottom: none;
          }
          .dropdown-wrapper {
            width: 100%;
          }
          .dropdown-menu {
            position: static; /* Stack dropdown items vertically */
            width: 100%;
            box-shadow: none;
            border: none;
            padding: 0;
            margin-top: 5px;
            background: #f8f8f8;
          }
          .dropdown-menu-item {
            padding-left: 15px;
            text-align: center;
          }
        }

        /* Further adjustments for very small mobile devices */
        @media (max-width: 480px) {
          .amu-title {
            font-size: 1em;
            text-align: center;
          }
          .amu-left img {
            height: 35px;
          }
        }
      `}</style>
      <header className="amu-header-horizontal">
        <div className="amu-left">
          <img
            src="https://amubuddy.com/wp-content/uploads/2023/06/amu-logo.jpg"
            alt="AMU Logo"
            className="amu-logo"
          />
          <span className="amu-title">Aligarh Muslim University</span>
        </div>
        <nav className="amu-nav">
          <a href="/" className="amu-nav-link">
            Home
          </a>
          <a href="/about" className="amu-nav-link">
            About
          </a>
          <a href="/programs" className="amu-nav-link">
            Programs
          </a>
          <a href="/faculty" className="amu-nav-link">
            Faculty
          </a>
          <a href="/contact" className="amu-nav-link">
            Contact
          </a>
          <div className="dropdown-wrapper">
            <span
              className="dropdown-toggle"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Links ▼
            </span>
            {showDropdown && (
              <div className="dropdown-menu">
                {dropdownItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.key}
                    className="dropdown-menu-item"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="amu-underline"></div>
    </>
  );
};

// The Footer component, self-contained within this file.
const Footer = () => {
  return (
    <>
      <style>{`
        /* --- FOOTER STYLES --- */
        .amu-footer {
          background-color: #ffffff;
          color: #004d40;
          padding: 20px 0;
          margin-top: auto;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          border-top: 1px solid #e0e0e0;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          align-items: center; /* Vertically center items */
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .footer-logo {
          height: 50px;
        }

        .footer-text {
          font-size: 0.9em;
          line-height: 1.6;
          color: #004d40;
        }

        .footer-right {
          text-align: right;
          font-size: 0.85em;
          color: #004d40;
        }

        /* Responsive adjustments for the footer on tablets and mobile devices */
        @media (max-width: 768px) {
          .amu-footer {
            padding: 15px 0;
          }
          .footer-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 0 15px;
          }
          .footer-left {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 10px;
          }
          .footer-logo {
            margin-bottom: 5px;
          }
        }
      `}</style>
      <footer className="amu-footer">
        <div className="footer-container">
          <div className="footer-left">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Aligarh Muslim University. All
              Rights Reserved.
            </p>
          </div>
          <div className="footer-right">
            <p>Designed and Developed by Department of Computer Science</p>
            <p>Contact: info@amu.ac.in</p>
          </div>
        </div>
      </footer>
    </>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <style>{`
        /* Global Styles (apply to the entire page body) */
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #f7f8f6;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Main content area styling */
        .main-content-wrapper {
          flex-grow: 1;
          max-width: 1100px;
          margin: 20px auto;
          padding: 0 20px;
          width: 100%;
        }
        
        .amu-underline {
          height: 4px;
          background: #004d40;
          width: 100%;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          margin-bottom: 20px;
        }

        /* Responsive adjustment for main content */
        @media (max-width: 768px) {
            .main-content-wrapper {
                margin: 15px auto;
                padding: 0 15px;
            }
        }
      `}</style>
      <Header />
      <main className="main-content-wrapper">{children}</main>
      <Footer />
    </>
  );
};

// New component for the Grants and Funding section
const GrantsAndFundingPage = () => {
  const grants = [
    {
      id: 1,
      text: "Rs 1.1 Crore under ERP Mission, Project (NME-ICT), Govt. of India.",
    },
    {
      id: 2,
      text: "Rs 32.36 Lacs under XIIth Plan , equipment grant.",
    },
    {
      id: 3,
      text: "Rs 10 Lacs under UGC, Design and Analysis of Energy-aware Robust Scheduling (ERS) Models for Stochastic jobs under DAG constraints in uncertain environment.",
    },
  ];

  return (
    <Layout>
      <style>{`
        /* --- GRANTS PAGE STYLES --- */
        .grants-container {
          padding: 20px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .page-title {
          font-size: 2.2rem;
          font-weight: bold;
          color: #004d40;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .grants-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .grants-item {
          padding: 15px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          margin-bottom: 15px;
          font-size: 1.1rem;
          color: #333;
          line-height: 1.5;
        }
        .grants-item:last-child {
          margin-bottom: 0;
        }

        /* Responsive adjustments for grants list */
        @media (max-width: 600px) {
            .page-title {
                font-size: 1.8rem;
            }
            .grants-item {
                font-size: 1rem;
                padding: 12px;
            }
        }
      `}</style>
      <div className="grants-container">
        <h1 className="page-title">GRANTS AND FUNDING</h1>
        <ul className="grants-list">
          {grants.map((grant) => (
            <li key={grant.id} className="grants-item">
              {grant.text}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

const App = () => {
  return <GrantsAndFundingPage />;
};

export default App;
