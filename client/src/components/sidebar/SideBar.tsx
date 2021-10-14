import HomeIcon from '@mui/icons-material/Home'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div className="sidebar">
            <h3 className="text-primary text-center font-weight-bold m-2 mt-4">ChurnAnalytics</h3>
            <div className="menu">
        
                <Link className="links" to="/">
                    <HomeIcon color="primary"/>
                    <p className="menu_links font-weight-bold">Home</p>
                </Link>
                

                <Link className="links font-weight-bold" to="/customer">
                    <AccessibilityNewIcon color="primary"/>
                    <p className="menu_links font-weight-bold">Customer</p>
                </Link>
        
                <Link to="/parameter" className="links font-weight-bold">
                    <AppsIcon color="primary"/>
                    <p className="menu_links font-weight-bold">Parameter</p>
                </Link>
            
                <Link className="links" to="/user">
                    <PersonIcon color="primary"/>
                    <p className="menu_links font-weight-bold">Manage Users</p>
                </Link>
            
            </div>
        </div>
    )
}

export default SideBar
