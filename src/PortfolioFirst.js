import React from "react";
import portfolioFirst from './images/portfolio-first.png';

class PortfolioFirst extends React.Component {
    render() {
        return (

            <div className="box second-slide">
                <div className="second-slide_inner">
                    <div className="portfolio-first">
                        <div className="portfolio-first_left">
                            <div className="portfolio-first_header">
                                Coaching Zone
                            </div>
                            <div className="portfolio-first_description">
                                Education platform for couches and couchees.
                            </div>
                            <div className="portfolio-first_technologies-inner">
                                <div className="portfolio-first_technologies">
                                    Technologies
                                </div>
                                <div className="portfolio-first_technologies-wrapp">
                                    <div className="portfolio-first_technologies-name">
                                        ReactJs
                                    </div>
                                    <div className="portfolio-first_technologies-name">
                                        HTML
                                    </div>
                                    <div className="portfolio-first_technologies-name">
                                        CSS
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-first_technologies-long">
                                Adaptive to mobile devices
                            </div>
                        </div>
                        <div className="portfolio-first_right">
                            <img src={portfolioFirst} alt="Portfolio First"/>
                        </div>
                    </div>
                    <div className="main-technologies_portfolio">
                        Progects
                    </div>
                </div>
            </div>

        );
    }
}


export default PortfolioFirst;