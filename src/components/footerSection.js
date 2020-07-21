import React from 'react';

import Logo from '../assets/images/logo2.png';

class FooterSection extends React.Component {
    render() {
        return (
            <footer className="footerArea">
                <div className="container">
                    <div className="row">
                        <div className="footerAbout">
                            <h3>About Yoox</h3>
                            <p>
                                Yoox – is a versatile fine one page HTML5 Responsive template for different purposes. It is
                                suitable for any creative agency,
                                corporate business, startups, personal portfolio, photography or web studios.
                        </p>
                        </div>
                        <div className="footerSocial">
                            <h3>Stay tuned</h3>
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row row2">
                        <div className="copyRightContainer">
                            <span> 2018 &copy; Copyright - Yoox theme.</span>
                            <span> All rights reserved. Developed by <a href="#">Layerdrops</a>. </span>
                        </div>
                        <div className="subRow">
                            <div className="footerLogo">
                                <div className="picContainer ">
                                    <img src={Logo} alt="" />
                                </div>
                            </div>
                            <div className="toTopContainer">
                                <a href="#" id="backToTop"><i className="fas fa-chevron-up"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterSection;
