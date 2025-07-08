import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}
