import React from 'react';

const Snowflake = ({ size = 24, className = '' }) => {
  return (
    <svg
      className={`inline-block ${className} snowflake-gradient shiny-snowflake`} // Adding the shiny effect class
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id="snowflake-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B9CCF" />
          <stop offset="100%" stopColor="#1E81CE" />
        </linearGradient>
      </defs>

      <path
        d="M12 2v20M12 12l4 4M12 12l-4 4M12 12l4-4M12 12l-4-4M4 6l4 2M20 6l-4 2M4 18l4-2M20 18l-4-2M6 4l2 4M18 4l-2 4M6 20l2-4M18 20l-2-4"
        stroke="url(#snowflake-gradient)" 
      />
    </svg>
  );
};

export default Snowflake;
