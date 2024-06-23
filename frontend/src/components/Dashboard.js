import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import UsageDetails from './UsageDetails';
import BillingInfo from './BillingInfo';

const Dashboard = () => {
  const [usage, setUsage] = useState([]);
  const [billing, setBilling] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      axios.get(`/api/usage/${decoded.id}`)
        .then(res => setUsage(res.data))
        .catch(err => console.error(err));

      axios.get(`/api/billing/${decoded.id}`)
        .then(res => setBilling(res.data))
        .catch(err => console.error(err));
    }
  }, []);

  const generateInvoice = () => {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    axios.post(`/api/billing/invoice/${decoded.id}`)
      .then(res => alert('Invoice generated successfully!'))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <UsageDetails usage={usage} />
      <BillingInfo billing={billing} />
      <button onClick={generateInvoice}>Generate Invoice</button>
    </div>
  );
};

export default Dashboard;
