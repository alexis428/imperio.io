const FoodHero = () => {
  return (
    <div className="relative h-96 bg-gradient-to-r from-orange-50 to-amber-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601050690597-df0568f70950')] bg-cover bg-center opacity-30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center">
        {/* Logo placeholder - reemplazar con tu logo real */}
        <div className="mb-6 flex flex-col items-center">
          <div className="text-5xl font-bold text-yellow-600 mb-2">IMPERIO</div>
          <div className="w-32 h-1 bg-yellow-600"></div>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">Sabores <span className="text-yellow-600">reales</span></h1>
        <p className="text-xl text-gray-700 max-w-2xl text-center">Delicias dignas de tu mesa</p>
        <button className="mt-8 bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition duration-300 w-fit">
          Ver menú
        </button>
      </div>
    </div>
  );
};

export default FoodHero;