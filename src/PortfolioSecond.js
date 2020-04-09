import React from "react";

import portfolioFirst from "./images/portfolio-first.png";
import portfolio2 from "./images/portfolio2.png";
import portfolio3 from "./images/portfolio3.png";


class PortfolioSecond extends React.Component {
    render() {
        return (
            <div className="box third-slide">
                <div className="second-slide_inner">
                    <div className="portfolio-first">
                        <div className="portfolio-first_left">
                            <div className="portfolio-first_header">
                                Advanced Logic
                            </div>
                            <div className="portfolio-first_description">
                                Corporative web site
                                <a href="https://www.advancedlogic.eu">https://www.advancedlogic.eu</a>
                            </div>
                            <div className="portfolio-first_technologies-inner">
                                <div className="portfolio-first_technologies">
                                    Technologies
                                </div>
                                <div className="portfolio-first_technologies-wrapp">
                                    <div className="portfolio-first_technologies-name">
                                        HTML
                                    </div>
                                    <div className="portfolio-first_technologies-name">
                                        CSS
                                    </div>
                                    <div className="portfolio-first_technologies-name">
                                        PHP
                                    </div>
                                    <div className="portfolio-first_technologies-name">
                                        SQL
                                    </div>
                                    <div className="portfolio-first_technologies-name">
                                        PHP
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-first_technologies-inner">
                                <div className="portfolio-first_technologies">
                                    CMS
                                </div>
                                <div className="portfolio-first_technologies-wrapp">
                                    <div className="portfolio-first_technologies-name">
                                        Joomla
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-first_technologies-long">
                                Adaptive to mobile devices
                            </div>
                        </div>
                        <div className="portfolio-first_right">
                            <img src={portfolio2} alt="Portfolio First"/>
                        </div>
                    </div>
                    <div className="portfolio-first revert">
                        <div className="portfolio-first_left">
                            <div className="portfolio-first_header">
                                Simatek
                            </div>
                            <div className="portfolio-first_description">
                                Corporative web site
                            </div>
                            <div className="portfolio-first_technologies-inner">
                                <div className="portfolio-first_technologies">
                                    Technologies
                                </div>
                                <div className="portfolio-first_technologies-wrapp">
                                    <div className="portfolio-first_technologies-name">
                                        HTML
                                    </div>
                                    <div className="portfolio-first_technologies-name">
                                        SASS
                                    </div>
                                    <div className="portfolio-first_technologies-name">
                                        Java Script
                                    </div>
                                </div>
                            </div>

                            <div className="portfolio-first_technologies-long">
                                Adaptive to mobile devices
                            </div>
                        </div>
                        <div className="portfolio-first_right">
                            <img src={portfolio3} alt="Portfolio three"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default PortfolioSecond;