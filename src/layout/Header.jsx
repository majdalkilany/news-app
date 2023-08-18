import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <div className="header">
    <h1>NexusNews</h1>
    <nav>
      <Link to="/" className="nav-link">Home</Link>
    </nav>
  </div>
);

export default Header;
