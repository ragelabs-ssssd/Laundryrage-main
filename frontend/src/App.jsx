import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NavbarV2 from './components/NavbarV2';
import FooterV2 from './components/FooterV2';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';
import HomeV2 from './pages/HomeV2';
import Services from './pages/Services';
import NavPreview from './pages/NavPreview';
import WidgetPreview from './pages/WidgetPreview';
import HeroPreview from './pages/HeroPreview';
import HygienePreview from './pages/HygienePreview';
import ServicesPreview from './pages/ServicesPreview';
import StepsPreview from './pages/StepsPreview';
import SocialPreview from './pages/SocialPreview';
import QRPreview from './pages/QRPreview';
import PhotoPreview from './pages/PhotoPreview';
import IroningPreview from './pages/IroningPreview';
import DryCleaningPreview from './pages/DryCleaningPreview';

function App() {
  return (
    <Router>
      <Routes>
        {/* Original / restored landing page & services */}
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col bg-white">
              <Navbar />
              <main className="flex-1">
                <Home />
              </main>
              <Footer />
              <WhatsAppWidget />
            </div>
          }
        />
        <Route
          path="/services"
          element={
            <div className="min-h-screen flex flex-col bg-white">
              <Navbar />
              <main className="flex-1">
                <Services />
              </main>
              <Footer />
              <WhatsAppWidget />
            </div>
          }
        />

        {/* Navbar, Floating Widget & Hero Preview Routes */}
        <Route path="/nav-preview" element={<NavPreview />} />
        <Route path="/widget-preview" element={<WidgetPreview />} />
        <Route path="/hero-preview" element={<HeroPreview />} />
        <Route path="/hygiene-preview" element={<HygienePreview />} />
        <Route path="/services-preview" element={<ServicesPreview />} />
        <Route path="/steps-preview" element={<StepsPreview />} />
        <Route path="/social-preview" element={<SocialPreview />} />
        <Route path="/qr-preview" element={<QRPreview />} />
        <Route path="/photo-preview" element={<PhotoPreview />} />
        <Route path="/ironing-preview" element={<IroningPreview />} />
        <Route path="/drycleaning-preview" element={<DryCleaningPreview />} />

        {/* New Awwwards-tier overhaul preview route */}
        <Route
          path="/v2"
          element={
            <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
              <NavbarV2 />
              <main className="flex-1">
                <HomeV2 />
              </main>
              <FooterV2 />
              <WhatsAppWidget />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
