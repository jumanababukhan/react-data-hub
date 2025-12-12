import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import CandidatesPage from "./pages/CandidatesPage.jsx";
import CandidateProfilePage from "./pages/CandidateProfilePage.jsx";
import PositionsPage from "./pages/PositionsPage.jsx";
import InterviewsPage from "./pages/InterviewsPage.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="candidates" element={<CandidatesPage />} />
          <Route path="candidates/:id" element={<CandidateProfilePage />} />
          <Route path="positions" element={<PositionsPage />} />
          <Route path="interviews" element={<InterviewsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
