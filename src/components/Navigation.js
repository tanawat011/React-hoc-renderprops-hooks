import React from 'react';
import { Link } from 'react-router-dom';

const Navagation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="dropdown">
          <a href="#" alt="..." className="dropbtn">
            All kind component
          </a>
          <div className="dropdown-content">
            <Link to="/all-kind-component/hoc">HOC</Link>
            <Link to="/all-kind-component/render-props">Render Props</Link>
            <Link to="/all-kind-component/hooks">Hooks</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navagation;
