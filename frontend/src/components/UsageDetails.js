import React from 'react';

const UsageDetails = ({ usage }) => {
  return (
    <div>
      <h2>Usage Details</h2>
      <ul>
        {usage.map((item, index) => (
          <li key={index}>{item.metric}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsageDetails;
