import React from 'react'
import"./sidebar.scss";

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Grocery Admin</span>
            </div>
            <hr />
        <div className="Center">
            <ul>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Add Item</span>
                </li>
                <li>
                    <span>Purchase Item</span>
                </li>
                <li>
                    <span>Sell Item</span>
                </li>
                <li>
                    <span>Add Suppliers</span>
                </li>
                <li>
                    <span>Suppliers List</span>
                </li>
                <li>
                    <span>Customer List</span>
                </li>
            </ul>
            </div>
        <div className="bottom">color options</div>


    </div>
  )
}

export default Sidebar; 