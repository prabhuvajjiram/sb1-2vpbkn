import { useState } from 'react';

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>Here's some basic information about our company...</p>
      
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show Less' : 'Learn More'}
      </button>
      
      {expanded && (
        <div className="expanded-content">
          <h2>Our History</h2>
          <p>More detailed information about the company's history...</p>
          <h2>Our Mission</h2>
          <p>Information about the company's mission and values...</p>
        </div>
      )}
    </div>
  );
}
