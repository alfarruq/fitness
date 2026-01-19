
import './style.css'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>

            <div>
                <Link to="/" >
                    <img src={logo} alt="" />
                </Link>

            </div>
            <hr />
            <div>
                <ul>
                    <li><Link to="/brand">о бренде</Link></li>
                    <li><Link to="afzalliklar">преимущества</Link></li>
                    <li><Link to="openclub">открыть клуб</Link></li>
                    <li><Link to="contacts">контакты</Link></li>
                </ul>
            </div>

        </header>
    );
}

export default Header;