import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div className="sidebar">
            <h3 className="text-primary text-center font-weight-bold m-2">churn analytics</h3>
            <div className="menu">
        
                <Link className="links" to="/">
                    <HomeIcon color="primary"/>
                    <p className="menu_links">Home</p>
                </Link>
                

                <Link className="links" to="/customer">
                    <AccessibilityNewIcon color="primary"/>
                    <p className="menu_links">Customer</p>
                </Link>
        
                <Link to="/parameter" className="links">
                    
                    <AppsIcon color="primary"/>
                    <p className="menu_links">Parameter</p>
                </Link>
            
                <Link className="links" to="/user">
                    <PersonIcon color="primary"/>
                    <p className="menu_links">Manage Users</p>
                </Link>
            
            </div>
        </div>
    )
}

export default SideBar
