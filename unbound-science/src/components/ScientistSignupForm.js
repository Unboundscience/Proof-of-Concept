import React, { useState } from 'react';
import './ScientistSignupForm.css'; // Create a corresponding CSS file

function ScientistSignupForm({ onNavigate }) {
  const [formData, setFormData] = useState({
    username: '',
    contact: '',
    blockchain: '',
    storage: '',
    sectors: [],
    funding: [],
    notifications: [],
    // Add other form fields as needed (e.g., institution, research areas, etc.)
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
  
    setFormData(prevFormData => {
      if (name === 'notifications') {
        // Handle notifications array
        if (checked) {
          return { ...prevFormData, notifications: [...prevFormData.notifications, value] };
        } else {
          return {
            ...prevFormData,
            notifications: prevFormData.notifications.filter(item => item !== value)
          };
        }
      } else if (name.startsWith('sector-')) {
        // Handle sectors array
        if (checked) {
          return { ...prevFormData, sectors: [...prevFormData.sectors, value] };
        } else {
          return {
            ...prevFormData,
            sectors: prevFormData.sectors.filter(item => item !== value)
          };
        }
      } else {
        // Handle other inputs
        return { ...prevFormData, [name]: value };
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server, validate, etc.)
    console.log(formData); // For now, just log the form data
    onNavigate('scientist');
  };

  return (
    <div className="scientist-signup-form">
      <h2>Scientist Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username"   
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Info:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
            <label htmlFor="blockchain">Blockchain:</label>
            <select 
                id="blockchain" 
                name="blockchain" 
                value={formData.blockchain}
                onChange={handleChange} 
                required 
            >
                <option value="">Select a Blockchain To Store Your Reputation (Gas Varies By Chain)</option>
                <option value="ethereum">Ethereum (High Gas Fee)</option>
                <option value="icp">Internet Computer (Average Gas Fee)</option>
                <option value="volary">Volary (Free) </option>
                
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="storage">Decentralized Storage:</label>
            <select 
                id="storage" 
                name="storage" 
                value={formData.storage} // Bind to formData.storage
                onChange={handleChange} 
                required 
            >
                <option value="">Pick A Decentralized Storage Container to Save Your Precious Work -- Forever</option>
                <option value="ipfs">IPFS</option>
                <option value="icp-storage">Internet Computer</option>
                <option value="arweave">Arweave</option>                
            </select>
        </div>


        <div className="form-group">
            <label>Which Sectors Will You Create In?</label>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        name="sector-energy" 
                        value="energy"
                        checked={formData.sectors.includes('energy')} 
                        onChange={handleChange} 
                    /> Energy
            </label>
            </div>
            <div>
                <label>
                <input 
                    type="checkbox" 
                    name="sector-natural-sciences" 
                    value="natural-sciences"
                    checked={formData.sectors.includes('natural-sciences')} 
                    onChange={handleChange} 
                /> Natural Sciences
                </label>
            </div>
            <div>
                <label>
                <input 
                    type="checkbox" 
                    name="sector-pollution" 
                    value="pollution"
                    checked={formData.sectors.includes('pollution')} 
                    onChange={handleChange} 
                /> Pollution
                </label>
            </div>
            <div>
                <label>
                <input 
                     type="checkbox" 
                     name="sector-quantum" 
                     value="quantum"
                     checked={formData.sectors.includes('quantum')} 
                     onChange={handleChange} 
                /> Quantum
                </label>
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="funding">Do You Need Funding?</label>
            <select 
                id="funding" 
                name="funding" 
                value={formData.funding} // Bind to formData.funding
                onChange={handleChange} 
                required 
            >
                <option value="">Do you need funding?</option>
                <option value="yes">Yes (enables voting on your work, invites for new seasons)</option>
                <option value="no">No (disables voting, invites, you can still vote for others regardless)</option>                
            </select>
        </div>

        <div className="form-group">
            <label>Notifications:</label>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        name="notifications" 
                        value="new-project-for-peer-review"
                        checked={formData.notifications.includes('new-project-for-peer-review')} 
                        onChange={handleChange} 
                    /> New project is submitted for peer review in your sector(s)
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        name="notifications" 
                        value="vote-lead"
                        checked={formData.notifications.includes('vote-lead')} 
                        onChange={handleChange} 
                    /> New project takes the vote lead
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        name="notifications" 
                        value="friend"
                        checked={formData.notifications.includes('friend')} 
                        onChange={handleChange} 
                    /> Your friend joins the platform
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        name="notifications" 
                        value="referal-payout"
                        checked={formData.notifications.includes('referal-payout')} 
                        onChange={handleChange} 
                    /> Your referral payout is ready to claim
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        name="notifications" 
                        value="in-app"
                        checked={formData.notifications.includes('in-app')} 
                        onChange={handleChange} 
                    /> Notify in-app
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        name="notifications" 
                        value="via-contact-info"
                        checked={formData.notifications.includes('via-contact-info')} 
                        onChange={handleChange} 
                    /> Notify via contact info
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        name="notifications" 
                        value="no-notifications"
                        checked={formData.notifications.includes('no-notifications')} 
                        onChange={handleChange} 
                    /> Never send notifications
                </label>
            </div>
        </div>
        {/* Add more form fields here */}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default ScientistSignupForm;
