import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import ReportPage from './pages/ReportPage.jsx';
import PlayerInfoPage from './pages/PlayerInfoPage.jsx';
import MatchSchedulePage from './pages/MatchSchedulePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/schedule" element={<MatchSchedulePage />} />
        <Route path="/players" element={<PlayerInfoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
