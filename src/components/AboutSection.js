const AboutSection = ({ setCurrentPage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">El <span className="text-yellow-600">IMPERIO</span> del sabor</h2>
          <p className="text-gray-600 mb-4">
            En IMPERIO gobernamos con sabores auténticos y recetas que conquistan paladares.
          </p>
          <p className="text-gray-600 mb-4">
            Cada plato es un edicto real de calidad, elaborado con ingredientes nobles y técnicas magistrales.
          </p>
          <p className="text-gray-600">
            Nuestro reino se extiende a través de la tradición familiar y la innovación culinaria.
          </p>
          <button 
            onClick={() => setCurrentPage('history')}
            className="mt-8 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            Nuestra historia
          </button>
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606787366850-de6330128bfc')] bg-cover bg-center"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;