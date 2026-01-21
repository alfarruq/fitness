
import './style.css'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {

    return (
        <header className='contayner' >

            <div className='fazliddin' >
                <div className='fazliddinheader' >
                    <Link to="/"   >
                        <img src={logo} alt="" />
                    </Link>
                    <div className="select" onClick={() => setOpen(!open)}>
                        <div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg"
                                alt="flag"
                                className="flag"
                            />
                            <p><b>+998 (90)-606-66-66</b></p>

                            <button className='fbutton' >оставить заявку</button>
                        </div>



                    </div>


                </div>
            </div>
            <hr />
            <div>
                <ul className='fazliddinul' >
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