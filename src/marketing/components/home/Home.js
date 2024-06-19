import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeroSection from "./HeroSection";
import PricingSection from "./PricingSection";
import ImageSection from "./ImageSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeroSection />
      <ImageSection />
      <PricingSection />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
