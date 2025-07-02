import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageAbout from "../components/About/page";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import Testimonial from "../components/Testimonials/home-two";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/direction/map_2.jpg'
import ServiceThumb2 from '../assets/img/direction/map_3.jpg'

const PageService = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
               bgImg={require('../assets/img/direction/direction_main2_2.jpg')}
                title={
                    <span style={{ color: 'black' }}>
                      {/* DIRECTION */}
                    </span>
                  }
            />
            <PageAbout
                title={'DIRECTION'}
                heading="LevelUp Academy"
                thumb={ServiceThumb}
                content="<a> <strong>Address </strong> </a>   <br/>
                               <a> Sariosiyo district, Surkhandarya region, Uzbekistan </a> <br/>
                                <a> <strong>Email </strong> </a> <br/>
                                <a> fredrickuzb55@gmail.com </a> <br/>
                                <a> <strong>Number </strong></a> <br/>
                                <a> (+82 102674-5444 </a>  <br/>
                                <a> <strong>Fax </strong></a> <br/>
                                <a> (+82) 102674-5444</a>"
                                
            />
            
            {/* <Services classes="sm-top"/> */}
            {/* <PricingTable/> */}
            {/* <Testimonial/> */}
            {/* <BrandLogo/> */}
            {/* <Funfact classes="sp-top"/> */}
            {/* <CallToAction/> */}
            <br></br> <br></br> <br></br><br></br><br></br>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};


export default PageService;