import React from 'react';

const Footer = () => {
    return (
        <div className="d-flex flex-column mt-auto bg-primary">
            <footer className="footer container">
                <div className="justify-content-center d-flex text-light">
                    <span className="secondary">
                        <a href="https://coreui.io" className="text-light">WOShop </a>
                        &copy; 2021
                    </span>
                </div>
                <div className="ml-auto justify-content-center d-flex text-light">
                    <span>Powered by
                        <a href="https://coreui.io" className="text-light"> IProzapas</a> 
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
