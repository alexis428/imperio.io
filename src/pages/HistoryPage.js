const HistoryPage = ({ goBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button 
          onClick={goBack}
          className="mb-8 flex items-center text-yellow-600 hover:text-yellow-700 transition duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nuestra <span className="text-yellow-600">Historia Imperial</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Los inicios del reinado</h2>
            <p className="text-gray-600 mb-4">
              IMPERIO nació en 1995 en el corazón de Buenos Aires, cuando la abuela María comenzó a vender sus famosas empanadas desde la ventana de su casa.
            </p>
            <p className="text-gray-600">
              Lo que empezó como un pequeño emprendimiento familiar pronto se convirtió en un referente de la comida casera en el barrio.
            </p>
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606787366850-de6330128bfc')] bg-cover bg-center"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl order-last md:order-first">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556911220-bff31c812dba')] bg-cover bg-center"></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">La expansión</h2>
            <p className="text-gray-600 mb-4">
              En 2005 inauguramos nuestro primer local propio, ampliando el menú con viandas completas que rápidamente se hicieron famosas.
            </p>
            <p className="text-gray-600">
              La calidad de nuestros ingredientes y el sabor auténtico nos valieron el apodo de "La Cocina Real" entre nuestros clientes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">El Imperio hoy</h2>
            <p className="text-gray-600 mb-4">
              Hoy seguimos manteniendo las recetas originales pero con estándares profesionales, llegando a más familias cada día.
            </p>
            <p className="text-gray-600">
              Nuestro compromiso sigue siendo el mismo: servir comida como la de casa, pero con la consistencia de un restaurante.
            </p>
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;

// DONE