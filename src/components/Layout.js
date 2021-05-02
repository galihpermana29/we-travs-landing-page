import React from 'react';
import Jumbotron from './Jumbotron';
import Services from './Services';
import Prices from './Prices';
import Review from './Review';
import About from './About';
import Footer from './Footer';

const Layout = () => {
   return (
      <div>
         <Jumbotron/>
         <Services/>
         <Prices/>
         <Review/>
         <About/>
         <Footer/>
      </div>
   );
}
 
export default Layout;