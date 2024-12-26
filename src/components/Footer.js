import React from "react";
import logo from "../img/Logo .svg"

const Footer = () => {
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=""/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias illum voluptatum tempora ipsam quas alias blanditiis, necessitatibus animi, provident dolore, consequuntur harum velit sapiente iusto doloribus! Velit quis facilis eos!</p>
                </div>
                <div>
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Services</a>
                        </li>
                        <li>
                            <a href="/">Menu</a>
                        </li>
                        <li>
                            <a href="/">Reservation</a>
                        </li>
                        <li>
                            <a href="/">Sign up</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Contact us: 1234567890</h3>
                </div>
                <div>
                <h3>Socials</h3>
                    <ul>
                        <li>
                            <a href="/">Instagram</a>
                        </li>
                        <li>
                            <a href="/">Twitter</a>
                        </li>
                        <li>
                            <a href="/">Facebook</a>
                        </li>
    
                    </ul>
                </div>

                
            </section>
        </footer>
    );
};

export default Footer;