import './App.css';
import Header from './components/layouts/header';
import IntroDesktop from './components/desktop/IntroDesktop';
import Border from './components/layouts/border';
import AboutMeDesktop from './components/desktop/AboutMeDesktop';
import { useEffect, useState } from 'react';
import React from 'react';
import IntroMobile from './components/mobile/IntroMobile';
import AboutMeMobile from './components/mobile/AboutMeMobile';
import OfferServicesDesktop from './components/desktop/OfferServicesDesktop';
import OfferServicesMobile from './components/mobile/OfferServicesMobile';
import FeaturedProjects from './components/desktop/FeaturedProjects';
import FeaturedProjectsMobile from './components/mobile/FeaturedProjectsMobile';
import FooterDesktop from './components/desktop/FooterDesktop';
import FooterMobile from './components/mobile/FooterMobile';
import Recommendations from './components/desktop/Recommendations';
import RecommendationsMobile from './components/mobile/RecommendationsMobile';

function App() {
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
	const handleResize = () => {
	setIsMobile(window.innerWidth <= 630);
	 };
  
	 window.addEventListener('resize', handleResize);
	 handleResize(); // Initial check
  
	 return () => {
	window.removeEventListener('resize', handleResize);
	 };
}, []);

  return (
    <div>
      {!isMobile && (
				<>
				<div>
        <Header/>
        <IntroDesktop/>
        <Border/>
        <AboutMeDesktop/>
        <OfferServicesDesktop/>
        <FeaturedProjects/>
		<Recommendations/>
		<FooterDesktop/>
			  </div>
			  </>
			)}

      {isMobile && (
				<>
				<div>
        <IntroMobile/>
        <Border/>
        <AboutMeMobile/>
        <OfferServicesMobile/>
        <FeaturedProjectsMobile/>
		<RecommendationsMobile/>
		<FooterMobile/>
			  </div>
			  </>
			)}


      
    </div>
  );
}

export default App;
