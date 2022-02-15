import './Header.css';
import { Link } from 'react-router-dom';


function Header(props) {

    return (
        <>
            <h1>
                Travel Destination <br/>
                <Link to='/' className="navl">  Home </Link>
            </h1>
        </>
    );

}


export default Header;