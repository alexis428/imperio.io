import { useState } from 'react';
import FoodHero from './components/FoodHero';
import FoodCategoryGrid from './components/FoodCategoryGrid';
import FeaturedItems from './components/FeaturedItems';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import HistoryPage from './pages/HistoryPage';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen flex flex-col">
      {currentPage === 'history' ? (
        <HistoryPage goBack={() => setCurrentPage('home')} />
      ) : (
        <>
          <FoodHero />
          <FoodCategoryGrid />
          <FeaturedItems />
          <AboutSection setCurrentPage={setCurrentPage} />
        </>
      )}
      <Footer />
      <WhatsAppButton 
        isFloating 
        productName="producto de IMPERIO"
        phoneNumber="54 9 2634683319"
      />
    </div>
  );
};

export default App;

// DONE