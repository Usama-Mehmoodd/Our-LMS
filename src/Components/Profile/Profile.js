import React from 'react';
import './profile.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Profile() {
  // Sample user data – in a real app, this would come from props or an API
  const user = {
    name: 'Usama Khaild',
    title: 'Frontend developer',
    location: 'San Francisco, CA',
    email: 'usama.khaild@example.com',
    phone: '+92331 222267',
    website: 'usamakhaild.design',
    joined: 'March 2021',
    avatar: faUserCircle, 
    cover: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=200&fit=crop',
    bio: 'Passionate about creating intuitive digital experiences. I turn complex problems into simple, beautiful interfaces.',
    stats: {
      projects: 14,
      followers: '2k',
      following: 22
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Cover Image */}
        <div className="profile-cover">
          <img src={user.cover} alt="Cover" className="cover-img" />
        </div>

        {/* Avatar and Basic Info */}
        <div className="profile-header">
          <div className="profile-avatar">
            <FontAwesomeIcon icon={user.avatar} size="8x" />
            <span className="status-badge"></span>
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-title">{user.title}</p>
            <p className="profile-location">
              <span className="icon">📍</span> {user.location}
            </p>
          </div>
          <div className="profile-actions">
            <button className="btn btn-primary">Follow</button>
            <button className="btn btn-secondary">Message</button>
          </div>
        </div>

        {/* Bio */}
        <div className="profile-bio">
          <p>{user.bio}</p>
        </div>

        {/* Stats */}
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{user.stats.projects}</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">{user.stats.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">{user.stats.following}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>

        {/* Contact Details */}
        <div className="profile-details">
          <h2 className="details-heading">Contact Information</h2>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-icon">✉️</span>
              <div>
                <span className="detail-label">Email</span>
                <span className="detail-value">{user.email}</span>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📞</span>
              <div>
                <span className="detail-label">Phone</span>
                <span className="detail-value">{user.phone}</span>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🌐</span>
              <div>
                <span className="detail-label">Website</span>
                <span className="detail-value">{user.website}</span>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <div>
                <span className="detail-label">Joined</span>
                <span className="detail-value">{user.joined}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}