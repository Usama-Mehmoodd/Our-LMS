import React, { useState } from 'react';
import './user.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function User() {
  const [activeTab, setActiveTab] = useState('profile');

  // Profile state
  const [profile, setProfile] = useState({
    name: 'Usama Khaild',
    username: 'usamakhaild',
    email: 'usama.khaild@example.com',
    bio: 'Passionate about creating intuitive code-based digital experiences with custom CSS.',
    location: 'San Francisco, CA',
    website: 'usamakhaild.design',
  });

  // Notification toggles
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    pushNotifications: false,
    weeklyDigest: true,
    mentions: true,
    comments: false,
  });

  // Appearance
  const [theme, setTheme] = useState('light');
  const [accent, setAccent] = useState('#3b82f6');

  // Privacy
  const [privacy, setPrivacy] = useState({
    publicProfile: true,
    showEmail: false,
    allowTagging: true,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleNotificationToggle = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrivacyToggle = (key) => {
    setPrivacy((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const navItems = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'account', label: 'Account', icon: '🔐' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'appearance', label: 'Appearance', icon: '🎨' },
    { id: 'privacy', label: 'Privacy', icon: '🛡️' },
    { id: 'danger', label: 'Danger Zone', icon: '⚠️' },
  ];

  return (
    <div className="settings-page">
      <div className="settings-container">
        {/* Header */}
        <header className="settings-header">
          <div>
            <h1 className="settings-title">Settings</h1>
            <p className="settings-subtitle">
              Manage your account preferences and personal information.
            </p>
          </div>
          <button className="btn btn-secondary">Back to Profile</button>
        </header>

        <div className="settings-body">
          {/* Sidebar Nav */}
          <aside className="settings-sidebar">
            <nav className="settings-nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${activeTab === item.id ? 'active' : ''} ${
                    item.id === 'danger' ? 'nav-item-danger' : ''
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="settings-content">
            {/* PROFILE TAB */}
            {activeTab === 'profile' && (
              <section className="settings-section">
                <div className="section-header">
                  <h2 className="section-title">Profile Information</h2>
                  <p className="section-desc">
                    Update your personal details and public profile.
                  </p>
                </div>

                {/* Avatar */}
                <div className="avatar-row">
                  <FontAwesomeIcon icon={faUserCircle} size="8x" />
                  <div className="avatar-actions">
                    <button className="btn btn-primary">Upload New</button>
                    <button className="btn btn-ghost">Remove</button>
                    <p className="avatar-hint">JPG, PNG or GIF. Max 2MB.</p>
                  </div>
                </div>

                {/* Form */}
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={profile.name}
                      onChange={handleProfileChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={profile.username}
                      onChange={handleProfileChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows="3"
                      value={profile.bio}
                      onChange={handleProfileChange}
                      className="form-input form-textarea"
                    />
                    <span className="form-hint">{profile.bio.length}/160 characters</span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      value={profile.location}
                      onChange={handleProfileChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      value={profile.website}
                      onChange={handleProfileChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="section-footer">
                  <button className="btn btn-ghost">Cancel</button>
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </section>
            )}

            {/* ACCOUNT TAB */}
            {activeTab === 'account' && (
              <section className="settings-section">
                <div className="section-header">
                  <h2 className="section-title">Account Settings</h2>
                  <p className="section-desc">
                    Manage your password and account security.
                  </p>
                </div>

                <div className="form-grid">
                  <div className="form-group form-group-full">
                    <label htmlFor="current">Current Password</label>
                    <input id="current" type="password" className="form-input" placeholder="••••••••" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="new">New Password</label>
                    <input id="new" type="password" className="form-input" placeholder="••••••••" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input id="confirm" type="password" className="form-input" placeholder="••••••••" />
                  </div>
                </div>

                <div className="divider" />

                <div className="list-item">
                  <div>
                    <h3 className="list-title">Two-Factor Authentication</h3>
                    <p className="list-desc">Add an extra layer of security to your account.</p>
                  </div>
                  <button className="btn btn-secondary">Enable</button>
                </div>

                <div className="list-item">
                  <div>
                    <h3 className="list-title">Active Sessions</h3>
                    <p className="list-desc">You're currently signed in on 2 devices.</p>
                  </div>
                  <button className="btn btn-ghost">Manage</button>
                </div>

                <div className="section-footer">
                  <button className="btn btn-primary">Update Password</button>
                </div>
              </section>
            )}

            {/* NOTIFICATIONS TAB */}
            {activeTab === 'notifications' && (
              <section className="settings-section">
                <div className="section-header">
                  <h2 className="section-title">Notifications</h2>
                  <p className="section-desc">
                    Choose what updates you'd like to receive.
                  </p>
                </div>

                <div className="toggle-list">
                  {[
                    { key: 'emailUpdates', title: 'Email Updates', desc: 'Receive product news and updates by email.' },
                    { key: 'pushNotifications', title: 'Push Notifications', desc: 'Get real-time alerts on your device.' },
                    { key: 'weeklyDigest', title: 'Weekly Digest', desc: 'A summary of activity delivered every Monday.' },
                    { key: 'mentions', title: 'Mentions', desc: 'Notify when someone mentions you.' },
                    { key: 'comments', title: 'Comments', desc: 'Notify when someone comments on your posts.' },
                  ].map((item) => (
                    <div key={item.key} className="toggle-item">
                      <div className="toggle-info">
                        <h3 className="list-title">{item.title}</h3>
                        <p className="list-desc">{item.desc}</p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={notifications[item.key]}
                        className={`switch ${notifications[item.key] ? 'switch-on' : ''}`}
                        onClick={() => handleNotificationToggle(item.key)}
                      >
                        <span className="switch-thumb" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="section-footer">
                  <button className="btn btn-primary">Save Preferences</button>
                </div>
              </section>
            )}

            {/* APPEARANCE TAB */}
            {activeTab === 'appearance' && (
              <section className="settings-section">
                <div className="section-header">
                  <h2 className="section-title">Appearance</h2>
                  <p className="section-desc">Customize how the app looks for you.</p>
                </div>

                <div className="form-group">
                  <label>Theme</label>
                  <div className="theme-options">
                    {['light', 'dark', 'system'].map((t) => (
                      <button
                        key={t}
                        className={`theme-card ${theme === t ? 'theme-card-active' : ''}`}
                        onClick={() => setTheme(t)}
                      >
                        <div className={`theme-preview theme-${t}`}>
                          <div className="theme-preview-bar" />
                          <div className="theme-preview-body" />
                        </div>
                        <span className="theme-label">
                          {t.charAt(0).toUpperCase() + t.slice(1)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Accent Color</label>
                  <div className="color-options">
                    {['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#ef4444'].map(
                      (color) => (
                        <button
                          key={color}
                          className={`color-swatch ${accent === color ? 'color-swatch-active' : ''}`}
                          style={{ background: color }}
                          onClick={() => setAccent(color)}
                          aria-label={`Select ${color}`}
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="section-footer">
                  <button className="btn btn-primary">Save Appearance</button>
                </div>
              </section>
            )}

            {/* PRIVACY TAB */}
            {activeTab === 'privacy' && (
              <section className="settings-section">
                <div className="section-header">
                  <h2 className="section-title">Privacy</h2>
                  <p className="section-desc">Control who can see and interact with your content.</p>
                </div>

                <div className="toggle-list">
                  {[
                    { key: 'publicProfile', title: 'Public Profile', desc: 'Anyone can view your profile.' },
                    { key: 'showEmail', title: 'Show Email', desc: 'Display email on your public profile.' },
                    { key: 'allowTagging', title: 'Allow Tagging', desc: 'Let others tag you in posts.' },
                  ].map((item) => (
                    <div key={item.key} className="toggle-item">
                      <div className="toggle-info">
                        <h3 className="list-title">{item.title}</h3>
                        <p className="list-desc">{item.desc}</p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={privacy[item.key]}
                        className={`switch ${privacy[item.key] ? 'switch-on' : ''}`}
                        onClick={() => handlePrivacyToggle(item.key)}
                      >
                        <span className="switch-thumb" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="section-footer">
                  <button className="btn btn-primary">Save Privacy</button>
                </div>
              </section>
            )}

            {/* DANGER ZONE TAB */}
            {activeTab === 'danger' && (
              <section className="settings-section">
                <div className="section-header">
                  <h2 className="section-title">Danger Zone</h2>
                  <p className="section-desc">
                    Irreversible actions. Please be careful.
                  </p>
                </div>

                <div className="danger-item">
                  <div>
                    <h3 className="list-title">Deactivate Account</h3>
                    <p className="list-desc">
                      Temporarily disable your account. You can reactivate anytime.
                    </p>
                  </div>
                  <button className="btn btn-warning">Deactivate</button>
                </div>

                <div className="danger-item">
                  <div>
                    <h3 className="list-title">Delete Account</h3>
                    <p className="list-desc">
                      Permanently delete your account and all associated data.
                    </p>
                  </div>
                  <button className="btn btn-danger">Delete Account</button>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}