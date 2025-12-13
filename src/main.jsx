import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/table.css";
import "./styles/dashboard.css";
import "./styles/pages.css";
import "./styles/profile.css";

createRoot(document.getElementById("root")).render(<App />);
