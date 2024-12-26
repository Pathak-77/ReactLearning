import React from "react";
import bannerImage from "../img/restauranfood.jpg"
const Header = () =>{
return (
    <header className="header">
        <section>
            <div className="banner">
                <h2>
                    Little Lemon
                </h2>
                <h3>
                    London
                </h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis earum nisi blanditiis aliquam consectetur sed! Necessitatibus eaque facilis quas, repellendus facere dignissimos autem odio omnis illo voluptates dolor saepe iste..</p>
                <button aria-label="On Click">Reserve Table</button>
            </div>

            <div className="banner-img">
                <img 
                    src= {bannerImage} 
                    alt='banner_image'
                />
            </div>
        </section>
    </header>
);
};

export default Header;