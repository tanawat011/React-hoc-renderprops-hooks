import React from 'react';
import { Link } from 'react-router-dom';

const Navagation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li className="dropdown">
        <a hret={null} alt="..." className="dropbtn">
          All kind component
        </a>
        <div className="dropdown-content">
          <Link to="/all-kind-component/hoc">HOC</Link>
          <Link to="/all-kind-component/render-props">Render Props</Link>
          <Link to="/all-kind-component/hooks">Hooks</Link>
        </div>
      </li>
    </ul>
  );
};

export default Navagation;
