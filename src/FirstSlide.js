import React from "react";
import logoSkype from "./images/logo-skype.svg";
import logoPhone from "./images/logo-telegram.svg";
import logoMail from "./images/logo-mail.svg";
import logoGit from "./images/logo-github.svg";

class FirstSlide extends React.Component {
    render() {
        return (
            <div className="box bg-image">
                <div className="first-slide">
                    <div className="first-slide_inner">
                        <div className="header">
                            <header className="header_inner">
                                <div className="header_speciality">
                                    Frontend Developer
                                </div>
                                <div className="header_name">
                                    Yuliya Zhezhel
                                </div>
                            </header>
                            <div className="header_contact-info">
                                <div className="header_contact-info_item">
                                    <img src={logoSkype} alt="logo-skype"/>
                                    <a className='header_contact-info_link'
                                       href="skype:yuliya_zhezhel">yuliya_zhezhel</a>
                                </div>
                                <div className="header_contact-info_item">
                                    <img src={logoPhone} alt="logo-phone"/>
                                    <a className='header_contact-info_link'
                                       href="tel:+375447401571">+375447401571</a>
                                </div>
                                <div className="header_contact-info_item">
                                    <img src={logoMail} alt="logo-mail"/>
                                    <a className='header_contact-info_link'
                                       href="mailto:yuliya.zhezhel@gmail.com">yuliya.zhezhel@gmail.com</a>
                                </div>
                                <div className="header_contact-info_item">
                                    <img src={logoGit} alt="logo-github"/>
                                    <a className='header_contact-info_link'
                                       href="https://github.com/yuliya-zhezhel">Github</a>
                                </div>
                            </div>
                        </div>

                        <div className="main-technologies">
                            <div className="main-technologies_first-child">
                                <div className="main-technologies_header">
                                    Technologies
                                </div>
                                <div className="main-technologies_header-item">
                                    HTML
                                </div>
                                <div className="main-technologies_header-item">
                                    Java Script
                                </div>
                                <div className="main-technologies_header-item">
                                    SASS/LESS
                                </div>
                                <div className="main-technologies_header-item">
                                    ReactJs
                                </div>
                            </div>
                            <div className="main-technologies_first-child">
                                <div className="main-technologies_header">
                                    Frameworks
                                </div>
                                <div className="main-technologies_header-item">
                                    Bootstrap
                                </div>
                                <div className="main-technologies_header-item">
                                    jQuery
                                </div>
                            </div>
                            <div className="main-technologies_first-child">
                                <div className="main-technologies_header">
                                    CMS
                                </div>
                                <div className="main-technologies_header-item">
                                    Bootstrap
                                </div>
                                <div className="main-technologies_header-item">
                                    jQuery
                                </div>
                            </div>
                        </div>
                        <div className="main-technologies_portfolio">
                            Portfolio
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}


export default FirstSlide;