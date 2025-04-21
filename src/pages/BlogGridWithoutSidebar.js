import React,{Fragment} from 'react';
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import Team from "../components/Team/home-two";
import BlogPage from "../templates/Blog";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";

const PageBlogGrid = () => {
    return (
        <Fragment>
            <Header/> 
            <PageHeader
                bgImg={require('../assets/img/tech_news/tech_main2.jpg')}
                // title={
                //     <span style={{ color: 'black' }}>
                //     PRODUCTS
                //     </span>
                //   }
            />  <br/>
            {/* <BlogPage blog_type={'grid'} sidebar={false} sidebar_position={'left'}/> */}
            <Team/>
            <br/><br/><br/>
            {/* <CallToAction/> */}
            <Footer/>
            {/* <LoginRegister/> */}
            <MobileMenu/>
        </Fragment>
    );
};

export default PageBlogGrid;