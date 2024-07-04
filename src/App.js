import Component from './components';
import {Bootstrap} from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App text-center">
      <section className="container text-center my-3">
        <Router>
          <nav className="d-flex flex-row justify-content-center gap-2">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/about">About</Link>
          </nav>
          <Component />
        </Router>
      </section>
    </div>
  );
}

export default App;
