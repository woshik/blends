import React from 'react';
import Header from '../header';
import Footer from '../footer';

import { Helmet } from 'react-helmet-async';

const Layout = ({ title, description, children, page }) => {
    return ( 
        <>
        <Helmet>
            <title>{ title || "Temple Blends - Hemp Tea & Drink Mixes"}</title>
            <meta name="description" content={description} />
        </Helmet>
        <Header showHomeButton={page !== 'home'} />
        <div>
            {children}
        </div>
        <Footer/>
        </>
     );
}
 
export default Layout;