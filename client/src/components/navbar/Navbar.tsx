import { NotificationsNone, Settings } from "@mui/icons-material";
import './NavBar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="topbar navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <img src="logo.jpg" alt="" height={50} />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link topbarIconContainer" to="#">
                            <NotificationsNone/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link topbarIconContainer" to="#">
                            <Settings/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
