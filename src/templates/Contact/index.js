import React from 'react';
import From from "./From";
import ContactInfo from "./ContactInfo";


const ContactPage = () => {
    return (
        <div className={'contact-page-area-wrapper sp-y'}>
            <div className="container">
                <div className="contact-content-wrap">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-form-area contact-method">
                                <h3>Takliflarni yuboring</h3>
                                <From/>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="contact-information contact-method">
                                <div className="contact-info-con">
                                    <h3>Contact Info</h3>
                                    <ContactInfo
                                        address="Sariosiyo district, Surkhandarya region, Uzbekistan <hr> fredrickuzb55@gmail.com <br/>(+82) 1026745444 <br> levelup.com <br/>"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;