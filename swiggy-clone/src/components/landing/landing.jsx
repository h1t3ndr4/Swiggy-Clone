import React from 'react';

import Header from './components/signin/Signin';
import Feature from './components/features/feature';
import Advertisement from './components/advertisement/Advertisement';
import Footer from './components/footer/Footer';

function Landing() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <Advertisement />
      <Footer/>
    </div>
  )
}

export default Landing