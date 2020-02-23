import React from 'react';
import {Header} from "./components/Header";
import {Services} from "./components/Services";
import {About} from "./components/About";
import { ServicesFullScreen } from './components/ServicesFullScreen';
import { CustomerFeedBack } from './components/CustomerFeeBack';
import { Features } from './components/Features';
import { Contact } from './components/ContactUs';
import { SubScribe } from './components/SubScribe';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Services/>
      <ServicesFullScreen/>
      <CustomerFeedBack/>
      <Features/>
      <Contact/>
      <SubScribe/>
      <Footer/>
    </div>
  );
}

export default App;
