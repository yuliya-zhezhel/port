import React from 'react';
import logoSkype from './images/logo-skype.svg';
import logoPhone from './images/logo-skype.svg';
import logoMail from './images/logo-mail.svg';
import logoGit from './images/logo-github.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="">
                <div className="header-speciality">
                    Frontend Developer
                </div>
                <div className="header-name">
                    Yuliya Zhezhel
                </div>

            </header>
            <div className="header_contact-info">
                <div className="header_contact-info_skype">
                    <img src={logoSkype} alt="logo-skype"/>
                    <a href="skype:yuliya_zhezhel">yuliya_zhezhel</a>
                </div>
                <div className="header_contact-info_phone">
                    <img src={logoPhone}  alt="logo-phone"/>
                    <a href="tel:+375447401571">+375447401571</a>
                </div>
                <div className="header_contact-info_mail">
                    <img src={logoMail} alt="logo-mail"/>
                    <a href="mailto:yuliya.zhezhel@gmail.com">yuliya.zhezhel@gmail.com</a>
                </div>
                <div className="header_contact-info_git">
                    <img src={logoGit} alt="logo-github"/>
                    <a href="https://github.com/yuliya-zhezhel">Github</a>

                </div>
        </div>
        </div>
    );
}

export default App;