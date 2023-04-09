import VerifiedIcon from '@mui/icons-material/Verified';
import EmailIcon from '@mui/icons-material/Email';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Avatar } from '@mui/material';
import moment from 'moment';
import { Fragment } from 'react';
import './profile.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Navbar } from '../Main/Homepage/Navbar';

const UserProfile = () => {
  // const { user, loading } = useSelector((state) => state.user);
  // const date = moment(user?.createdAt);
  // const formattedDate = date.format('MMM D, YYYY');

  return (
    
        <Fragment>
          {/* <Navbar /> */}
          <h1 className="account">My Account</h1>

          <div className="mainProfile">
            <div className="profile">
              {/* <Avatar src={user.avatar?.url} sx={{ width: 100, height: 100 }} /> */}
              <span className="userFullname">
                {/* @{user?.firstName} {user?.lastName}
                {user?.isVerified && <VerifiedIcon color="primary" />} */}
              </span>
              <div className="userInfo">
                <span className="aDetails"> Admin Details </span>
                <span className="items">
                  <EmailIcon />
                  <span className="data"> Name </span>
                </span>
                <span className="items">
                  <LocationCityIcon />
                  <span className="data"> Email </span>
                </span>
                <span className="items">
                  <SmartphoneIcon />
                  <span className="data"> Contact </span>
                </span>
              
              </div>
              <div className="editDetails">
                <Link to="/updateprofile" style={{ textDecoration: 'none' }}>
                  <button className="edit">Save</button>
                </Link>
             
              
              </div>
            </div>
          </div>
        </Fragment>
  );
};

export default UserProfile;