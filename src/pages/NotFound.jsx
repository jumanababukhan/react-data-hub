import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="hira-not-found">
      <div>
        <h1>404</h1>
        <p>Oops! Page not found</p>
        <Link to="/dashboard">Return to Dashboard</Link>
      </div>
    </div>
  );
};

export default NotFound;
