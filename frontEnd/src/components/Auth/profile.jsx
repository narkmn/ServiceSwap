import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileAccountInfo from './profileAccountinfo';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('account');

  const renderForm = () => {
    switch (activeTab) {
      case 'account':
        return <ProfileAccountInfo />;
      case 'personal':
        return <div>Personal Info form goes here...</div>;
      case 'subscription':
        return <div>Subscription info goes here...</div>;
      case 'payment':
        return <div>Payment method form goes here...</div>;
      case 'credit':
        return <div>Time credit details go here...</div>;
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid">
      
      {/* Page Content */}
      <div className="container">
        <h1 className="m-4">Update Your Profile</h1>

        {/* Menu Bar */}
        <div className="btn-group mb-3">
          <button onClick={() => setActiveTab('account')} className={`btn btn-outline-dark ${activeTab === 'account' ? 'active' : ''}`}>Account Info</button>
          <button onClick={() => setActiveTab('personal')} className={`btn btn-outline-dark ${activeTab === 'personal' ? 'active' : ''}`}>Personal Info</button>
          <button onClick={() => setActiveTab('subscription')} className={`btn btn-outline-dark ${activeTab === 'subscription' ? 'active' : ''}`}>Subscription</button>
          <button onClick={() => setActiveTab('payment')} className={`btn btn-outline-dark ${activeTab === 'payment' ? 'active' : ''}`}>Payment Method</button>
          <button onClick={() => setActiveTab('credit')} className={`btn btn-outline-dark ${activeTab === 'credit' ? 'active' : ''}`}>Time Credit</button>
        </div>

        {/* Main Form Area */}
        <div className="border border-dark p-3 mb-5 pb-5 rounded" style={{ minHeight: '500px' }}>
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default Profile;