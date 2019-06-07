import React from 'react';
import MetrialPriceTable from './components/meterialTable/meterialPriceTable'
import Logo from './components/logo/logo'
import Footer from './components/footer/footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <MetrialPriceTable />
      <Footer />
    </div>
  );

}

export default App;
