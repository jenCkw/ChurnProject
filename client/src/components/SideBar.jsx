import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';

function SideBar() {
    return (
        <div className="sidebar">
            <h3 className="text-primary text-center m-2">CHURN DASHBORD</h3>
            <div className="menu">
                <div className="links">
                    <HomeIcon color="primary"/>
                    <p className="menu_links">Home</p>
                </div>
                <div className="links">
                    <AccessibilityNewIcon color="primary"/>
                    <p className="menu_links">Customer</p>
                </div>
                <div className="links">
                    <AppsIcon color="primary"/>
                    <p className="menu_links">Product</p>
                </div>
                <div className="links">
                    <PersonIcon color="primary"/>
                    <p className="menu_links">Manage Users</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar
