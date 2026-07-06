import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import AppRouter from './router/AppRouter';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="app-container">
        <a href="#maincontent" className="skip-link">Skip to main content</a>
        <Navbar />
        <div id="maincontent" tabIndex={-1}>
          <AppRouter />
        </div>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}
