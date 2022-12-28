import React from 'react'
import"./sidebar.scss";

import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SellIcon from '@mui/icons-material/Sell';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
            <span className="logo">Grocery Admin</span>
            </div>
            <hr />
            <div className="center">
            <ul>
              <p className="title">MAIN</p>
              <li>
              <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
              </li>
              <p className="title">STOCK DATA</p>
                <li>
                    <AddIcon className="icon"/>
                    <span>Add Item</span>
                </li>
                <li>
                    <LocalGroceryStoreIcon className="icon"/>
                    <span>Purchase Item</span>
                </li>
                <li>
                    <SellIcon className="icon"/>
                    <span>Sell Item</span>
                    </li>
                  <p className="title">SERVICE</p>
                <li>
                    <AddBoxIcon className="icon"/>
                    <span>Add Suppliers</span>
                </li>
               
                <li>
                     <ManageAccountsIcon className="icon"/>
                    <span>Suppliers List</span>
                    </li>
                <li>
                    <PermContactCalendarIcon className="icon"/>
                    <span>Customer List</span>
                </li>
                <p className="title">USER</p>
                <li>
               
                    <AccountCircleIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            
                </ul>
                </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          </div>


 
        

    </div>
  );
};

export default Sidebar; 