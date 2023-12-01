import React from 'react';
import Modal from './Modal';

export default function InfoSlider() {
  // count to 5s and open the modal
  const introContent = () => {
    return <div>1</div>
  };
  const configureURLContent = () => {
    return <div>2</div>
  };
  const testE2EBySignUp = () => {
    return <div>3</div>
  };
  return (
    // send as child node
    <Modal />
  )
}
