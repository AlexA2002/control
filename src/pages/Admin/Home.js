
import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';

function Home() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjOne} />
    </>
  );
}

export default Home;

