import React from "react";
import { Link } from 'react-router-dom';
import i18n from "../../i18n";
import "./style.css";



const Navbar = () => {

    const setLanguage = (langCode) => {
        i18n.changeLanguage(langCode)
            .then(t => {
                // props.setLangCode(langCode);
            })
            .catch(err => {

            });
    };

    return (
        <header>
            <h2>Imerge</h2>
            <div className="row">
                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/Agencies">Agencies</Link></li>
                        <li> <Link to="/Maps">Maps</Link></li>
                        <li> <Link to="/News">News</Link></li>
                        <li> <Link to="/Translator">Translator</Link></li>
                    </ul>
                </nav>
                <ul>
                    <li>
                        <button onClick={() => setLanguage("en")}>English</button>
                        <button onClick={() => setLanguage("es")}>Español</button>
                        <button onClick={() => setLanguage("fr")}>Français</button>
                    </li>
                </ul>
            </div>
        </header>
    );
 
};


export default Navbar;