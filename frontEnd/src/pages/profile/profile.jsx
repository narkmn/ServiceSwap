import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileAccountInfo from './profileAccountInfo';
import ProfilePersonalInfo from './profilePersonalInfo';
import ProfileSubsPlans from './profileSubsPlans';
import ProfilePayment from './profilePayment';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('account');

  const renderForm = () => {
    switch (activeTab) {
      case 'account':
        return <ProfileAccountInfo />;
      case 'personal':
        return <ProfilePersonalInfo/>;
      case 'subscription':
        return <ProfileSubsPlans/>;
      case 'payment':
        return <ProfilePayment/>;
      case 'credit':
        return <div>Time credits</div>;
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