import React from 'react';
import './App.scss';
/*import Form from "./Form";*/
import {SectionsContainer, Section, Header} from 'react-fullpage';
import PortfolioSecond from "./PortfolioSecond";
import PortfolioFirst from "./PortfolioFirst";
import FirstSlide from "./FirstSlide";

let options = {
    sectionClassName: 'section',
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    arrowNavigation: true,
};

function App() {
    return (
        <div className="App">
            <div id="container2">
                <SectionsContainer {...options}>
                    <Section class="section">
                        <FirstSlide/>
                    </Section>
                    <Section>
                        <PortfolioFirst/>
                    </Section>
                    <Section>
                        <PortfolioSecond/>
                    </Section>
{/*                    <Section>
                        <div className="box fourth-slide">
                            <div className="contact_form">
                                If you have any questions let me know
                            </div>
                            <Form/>
                            <div className="main-technologies_portfolio">
                                Contact
                            </div>
                        </div>
                    </Section>*/}
                </SectionsContainer>
            </div>
        </div>
    );
}

export default App;