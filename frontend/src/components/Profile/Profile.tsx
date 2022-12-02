import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import './Profile.css';
import { UserContext } from '../../context/UserContext';

export const Profile = () => {
  const userCtx = useContext(UserContext);

  if (!userCtx) {
    return null;
  }

  return (
    <div className="profile-container">
      <div className="profile-details-container">
        <div className="image-username">
          <img alt="event" src={userCtx?.userInfo?.picUrl} className="profile__image" />
          <h2 className="profile__username">{userCtx?.userInfo?.username}</h2>
        </div>
        <div className="profile-text-container">
          <h2 className="profile-text-headings">First Name</h2>
          <div className="profile-text-style">
            <h2 className="profile-line">{userCtx?.userInfo?.name}</h2>
          </div>
          <h2 className="profile-text-headings">Last Name</h2>
          <div className="profile-text-style">
            <p className="profile-line">{userCtx?.userInfo?.lastName}</p>
          </div>
          <h2 className="profile-text-headings">Email</h2>
          <div className="profile-text-style">
            <p className="profile-line">{userCtx?.userInfo?.email}</p>
          </div>
          <h2 className="profile-text-headings">Bio</h2>
          <div className="profile-text-style bio">
            <p className="profile-line">{userCtx?.userInfo?.bio}</p>
          </div>
          <div className="btn-container">
            <Link to="/edit-form">
              <Button className="edit-btn" variant="contained" startIcon={<EditIcon />}>
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};