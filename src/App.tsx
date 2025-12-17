import CampaignStep3Page from './pages/CampaignStep3Page';
import MorePage from './pages/MorePage';
import CampaignStep2Page from './pages/CampaignStep2Page';
import CampaignPage from './pages/CampaignPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';


import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import SignInPage from './pages/SignInPage';
import BusinessDetailsPage from './pages/BusinessDetailsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/business-details" element={<BusinessDetailsPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/campaign" element={<CampaignPage />} />
        <Route path="/campaign-step2" element={<CampaignStep2Page />} />
        <Route path="/campaign-step3" element={<CampaignStep3Page />} />
        <Route path="/more" element={<MorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
