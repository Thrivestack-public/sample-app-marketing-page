import React, { Fragment } from "react";

import { textConstants } from "../../../textConstants";

function ImageSection() {
  return (
    <Fragment>
      <div className="bg-white">
        <div className="relative isolate px-2 lg:px-4">
          <div className="mx-auto  py-4 sm:py-6 lg:py-8">
            <div className="text-center w-full">
              <h1 className="text-2xl font-bold tracking-tight text-violet-900 sm:text-xl">
                {textConstants.IMAGE_SECTION_TITLE}
              </h1>
              <div className="mt-6 mx-auto max-w-6xl w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/images/marketing/thrive-image.png`}
                  alt="thrivestack-working"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ImageSection;
