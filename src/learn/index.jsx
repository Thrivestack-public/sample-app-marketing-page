import React, { useState } from 'react';
import { useAnimate } from "framer-motion/dist/framer-motion"; 
import HeroSection from './HeroSection';
import PricingSection from './PricingSection';
import InfoSlider from './InfoSlider';
import MouseCursor from './MouseCursor';
function Learn() {
  const [scope, animate] = useAnimate()
  const [contentId, setContentId] = useState(1);
  const [openIntroModal, setOpenIntroModal] = useState(false);
  const startAnimation = async () => {
    
    // close modal
    setOpenIntroModal(false);
    
    // initiate cursor
    await animate("#cursor", { opacity: 0.7 }, { duration: 0.3 })
    
    // get header contact us
    const headerContactUs = document.getElementById('header-contact-us');
    const headerContactUsOffsets = headerContactUs.getBoundingClientRect();
    const headerContactUsTopPosition = headerContactUsOffsets.top;
    const headerContactUsLeftPosition = headerContactUsOffsets.left;
    
    // animate cursor to header contact us
    await animate("#cursor", 
      { left : headerContactUsLeftPosition + 15, top: headerContactUsTopPosition + 10 }, 
      { duration: 2, ease: 'easeIn' }
    )

    // pulse header contact us
    await animate("#header-contact-us", 
      { scale: [1, 0.9, 1], boxShadow: ['' , '0 0 0 50px rgba(#5a99d4, 0)', '0 0 0 0 rgba(#5a99d4, 0)']  }, 
      { duration: 2, repeat: 1, repeatType: 'reverse' }
    )

    // change header contact us text
    document.getElementById("header-contact-us").innerHTML = "Sign Up";  

    // get hero contact us
    const heroContactUs = document.getElementById('hero-contact-us');
    const heroContactUsOffsets = heroContactUs.getBoundingClientRect();
    const heroContactUsTopPosition = heroContactUsOffsets.top;
    const heroContactUsLeftPosition = heroContactUsOffsets.left;

    // animate cursor to hero contact us
    await animate("#cursor", 
      { left : heroContactUsLeftPosition + 15, top: heroContactUsTopPosition + 10 }, 
      { duration: 2, ease: 'easeIn' }
    )

    // pulse hero contact us
    await animate("#hero-contact-us", 
      { scale: [1, 0.9, 1], boxShadow: ['' , '0 0 0 50px rgba(#5a99d4, 0)', '0 0 0 0 rgba(#5a99d4, 0)']  }, 
      { duration: 2, repeat: 1, repeatType: 'reverse' }
    )

    // change hero contact us text
    document.getElementById("hero-contact-us").innerHTML = "Sign Up";  

    // get hero contact us
    const heroLearnMore = document.getElementById('hero-learn-more');
    const heroLearnMoreOffsets = heroLearnMore.getBoundingClientRect();
    const heroLearnMoreTopPosition = heroLearnMoreOffsets.top;
    const heroLearnMoreLeftPosition = heroLearnMoreOffsets.left;
    
    // animate cursor to hero learn more
    await animate("#cursor", 
      { left : heroLearnMoreLeftPosition + 15, top: heroLearnMoreTopPosition + 10 }, 
      { duration: 1, ease: 'easeIn' }
    )

    // pulse hero learn more
    await animate("#hero-learn-more", 
      { scale: [1, 0.9, 1], boxShadow: ['' , '0 0 0 50px rgba(#5a99d4, 0)', '0 0 0 0 rgba(#5a99d4, 0)']  }, 
      { duration: 2, repeat: 1, repeatType: 'reverse' }
    )

    // change hero learn more text
    document.getElementById("hero-learn-more").innerHTML = "Login"; 

    // get pricing contact us 1
    const tierPersonal = document.getElementById('tier-personal-contact-us');
    const tierPersonalOffsets = tierPersonal.getBoundingClientRect();
    const tierPersonalTopPosition = tierPersonalOffsets.top + window.scrollY;
    const tierPersonalLeftPosition = tierPersonalOffsets.left + window.scrollX;
    document.getElementById("tier-personal-contact-us").scrollIntoView({behavior: 'smooth'});

    // animate cursor to pricing contact us 1
    animate("#cursor", 
      { left : tierPersonalLeftPosition + 15, top: tierPersonalTopPosition + 10 }, 
      { duration: 1, ease: 'easeIn' }
    )

    // pulse pricing contact us 1
    await animate("#tier-personal-contact-us", 
      { scale: [1, 0.9, 1], boxShadow: ['' , '0 0 0 50px rgba(#5a99d4, 0)', '0 0 0 0 rgba(#5a99d4, 0)']  }, 
      { duration: 2, repeat: 1, repeatType: 'reverse' }
    )

    // change pricing contact us 1 and 2 text
    document.getElementById("tier-personal-contact-us").innerHTML = "Sign Up"; 
    document.getElementById("tier-team-contact-us").innerHTML = "Sign Up"; 
    
    // reset cursor
    await animate("#cursor", { opacity: 0 }, { duration: 1 })

    // continuing modal
    setContentId(3);
    setOpenIntroModal(true);
  }
  return (
    <div ref={scope}>
      <InfoSlider 
        contentId={contentId} 
        setContentId={setContentId} 
        startAnimation={startAnimation} 
        openIntroModal={openIntroModal}
        setOpenIntroModal={setOpenIntroModal}
      />
      <MouseCursor />
      <HeroSection />
      <PricingSection />
    </div>
  );
}

export default Learn;
