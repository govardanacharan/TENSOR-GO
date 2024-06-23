import React from 'react';

const BillingInfo = ({ billing }) => {
  return (
    <div>
      <h2>Billing Information</h2>
      <p>Current Cycle: {billing.cycle}</p>
      <p>Cumulative Usage: {billing.usage}</p>
    </div>
  );
};

export default BillingInfo;
