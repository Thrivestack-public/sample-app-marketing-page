import React, { useState } from 'react';
import { InformationCircleIcon, ArrowSmallRightIcon } from '@heroicons/react/20/solid'
import Modal from './Modal';
import { useEffectOnce } from '../hooks/useEffectOnce';

const delayForIntro = 3000;

export default function InfoSlider() {
  const [openIntroModal, setOpenIntroModal] = useState(false);
  const [contentId, setContentId] = useState(1);

  useEffectOnce(() => {
    const timeout = setTimeout(() => {
      setOpenIntroModal(true);
    }, delayForIntro);
    return () => {
      clearTimeout(timeout);
    }
  });
  const introContent = () => {
    return (
      <div>
        <div className="font-medium text-lg">
          Saasbox currently have contact us page and don’t have sign up and login. Now you are going the setup self serve
            <InformationCircleIcon className="h-4 w-4 inline text-slate-500"/>
        </div>
        <div className="px-12 mt-5 text-left">
          <div>
            <div>Part of this learning series, you will experience 3 items</div>
            <ol style={{listStyle: 'decimal'}} className="mt-4 px-4">
                <li>
                  Enable Self-Serve for your SaaS Product
                </li>
                <li>
                  Experience what the end-user experience with your app
                </li>
                <li>
                  Your business teams will get out-of-box analytics for all B2B SaaS events
                </li>
            </ol>
          </div>
        </div>
        <div className="mt-10">
          <button onClick={() => setContentId(2)} className="inline-flex justify-center rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Continue
          </button>
        </div>
      </div>
    )
  };
  const configureURLContent = () => {
    return (
      <div>
        <div className="font-medium text-lg">
          Scenario: Your engineering team has provided new URLs for an enhanced experience.
        </div>
        <div className="px-12 mt-5 text-left">
          <div>
            <div>Your task: Replace the existing 'Contact Us' URL with our new self-serve <b>sign-up</b>, <b>login</b>, and <b>pricing</b> pages.</div>
            <div className="mt-4 ml-1">URL: marketing.saasbox.online/contact-us to</div>
            <ol>
                <li>
                  <ArrowSmallRightIcon className="h-6 w-5 inline"/>
                  URL: marketing.saasbox.online/signup
                </li>
                <li>
                  <ArrowSmallRightIcon className="h-6 w-5 inline"/>
                  URL: marketing.saasbox.online/signin
                </li>
                <li>
                  <ArrowSmallRightIcon className="h-6 w-5 inline"/>
                  URL: marketing.saasbox.online/pricing-plans
                </li>
            </ol>
          </div>
        </div>
        <div className="mt-10">
          <button onClick={() => setContentId(3)} className="inline-flex justify-center rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Replace
          </button>
        </div>
      </div>
    )
  };
  const testE2EBySignUp = () => {
    return (
      <div>
        <div className="font-medium text-lg">
          Before you go live, test out the end-user experience by clicking on the Signup button.
        </div>
        <div className="px-12 mt-5 text-left">
          <div>
            <div>You will be able to see the end-to-end integration with your product's onboarding.</div>
            <ol style={{listStyle: 'decimal'}} className="mt-4 px-4">
                <li>
                  End-Users will click on signup (try it)
                </li>
                <li>
                  End-users get prompted with onboarding questionnaire
                </li>
                <li>
                  Behind the scenes lots of decisions and instrumentation happen
                </li>
                <li>
                  End-users will now get redirected to your SaaS product
                </li>
            </ol>
          </div>
        </div>
        <div className="mt-10">
          <button onClick={() => setContentId(4)} className="inline-flex justify-center rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Let's Go
          </button>
        </div>
      </div>
    )
  };
  const redirectContent = () => {
    return (
      <div>
        <div className="font-medium text-lg">
          When you go live, your end users will experience the first tile and your internal/GTM team will experience the second tile
        </div>
        <div className="flex flex-col mt-8 gap-8">
          <button onClick={() => setOpenIntroModal(false)} className="inline-flex justify-center rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Try out end users exp. sample
          </button>
          <button disabled className="inline-flex justify-center rounded-md bg-slate-600 px-8 py-2 text-sm font-semibold text-white shadow-sm">
            Try out analytics exp. for you and growth team (*coming soon)
          </button>
        </div>
      </div>
    )
  };

  const getContent = () => {
    switch (contentId) {
      case 1:
        return introContent();
      case 2:
        return configureURLContent();
      case 3:
        return testE2EBySignUp();
      case 4:
        return redirectContent();
      default:
        return null;
    }
  };

  return (
    <Modal 
      openModal={openIntroModal}
      setOpenModal={setOpenIntroModal}
      contentId={contentId}
      setContentId={setContentId}
      content={getContent()}
    />
  )
}
