import React, { Fragment, useState } from "react";

import { textConstants } from "../../../textConstants";
import { Button } from "@mui/material";

function ImageSection() {
  const images = {
    0: `${process.env.PUBLIC_URL}/images/animations/step0.gif`,
    1: `${process.env.PUBLIC_URL}/images/animations/step1.gif`,
    2: `${process.env.PUBLIC_URL}/images/animations/step2.gif`,
    3: `${process.env.PUBLIC_URL}/images/animations/step3.gif`,
    4: `${process.env.PUBLIC_URL}/images/animations/step4.gif`,
    5: `${process.env.PUBLIC_URL}/images/animations/step5.gif`,
    6: `${process.env.PUBLIC_URL}/images/animations/step6.gif`,
    7: `${process.env.PUBLIC_URL}/images/animations/step7.gif`,
    8: `${process.env.PUBLIC_URL}/images/animations/step8.gif`,
    9: `${process.env.PUBLIC_URL}/images/animations/step9.gif`,
  };
  const [currStep, setCurrStep] = useState(0);

  return (
    <Fragment>
      <div className="bg-white">
        <div className="relative isolate px-2 lg:px-4">
          <div className="mx-auto  py-4 sm:py-6 lg:py-8">
            <div className="text-center w-full">
              <h1 className="text-4xl font-bold tracking-tight text-violet-900 sm:text-2xl">
                {textConstants.IMAGE_SECTION_TITLE}
              </h1>

              <div className="mt-2 mx-auto max-w-6xl w-full">
                <img
                  src={images[currStep]}
                  alt="thrivestack-working"
                  className="w-full"
                />
              </div>
              <div
                className={
                  "flex relative justify-center gap-4" +
                  (currStep === 0 ? " -mt-[40px]" : "")
                }
              >
                <Button
                  variant="contained"
                  className="bg-violet-900 text-white"
                  color="secondary"
                  onClick={() => {
                    if (currStep === 0) {
                      setCurrStep(1);
                    } else {
                      setCurrStep(0);
                    }
                  }}
                >
                  {currStep === 0 ? "See Action" : "Stop"}
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  disabled={currStep < 2}
                  onClick={() => {
                    setCurrStep((prev) => prev - 1);
                  }}
                >
                  Prev
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    setCurrStep((prev) => prev + 1);
                  }}
                  disabled={currStep > 8 || currStep < 1}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ImageSection;
