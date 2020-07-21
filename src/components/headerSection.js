import React from 'react';
import Hedar from '../assets/images/hedar.jpg';
import Logo from '../assets/images/logo.png';

class HeaderSection extends React.Component {
    render() {
        return (
            <header className="headerContainer">
                <div className="picContainer">
                    <img src={Hedar} alt="ThemeWar" />
                </div>
                <div className="logoContent">
                    <div className="logoContentContainer">
                        <div className="logo">
                            <a href="#">
                                <div className="picContainer"><img src={Logo} alt="ThemeWar" /></div>
                            </a>
                        </div>
                        <p>Yoox - Fine One Page Parallax HTML5 Responsive Template</p>
                        <button className="buyNowButton"><i className="fas fa-shopping-bag"></i><span>Buy Now</span></button>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderSection;