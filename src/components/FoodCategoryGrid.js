const FoodCategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: 'Empanadas Imperiales',
      description: 'Rellenos exclusivos para tu paladar',
      image: 'bg-[url("https://images.unsplash.com/photo-1626700051175-d68178ac5fc2")]'
    },
    {
      id: 2,
      name: 'Viandas Reales',
      description: 'Platos dignos de tu mesa',
      image: 'bg-[url("https://images.unsplash.com/photo-1544025162-d76694265947")]'
    },
    {
      id: 3,
      name: 'Especiales del Reino',
      description: 'Creaciones únicas de nuestro chef',
      image: 'bg-[url("https://images.unsplash.com/photo-1559847844-5315695dadae")]'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Delicias de <span className="text-yellow-600">IMPERIO</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="group relative h-64 rounded-2xl overflow-hidden shadow-xl">
            <div className={`absolute inset-0 ${category.image} bg-cover bg-center transition-transform duration-500 group-hover:scale-110`}></div>
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition duration-300"></div>
            <div className="relative h-full flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              <p className="text-white mt-1">{category.description}</p>
              <button className="mt-4 text-white font-medium py-2 px-4 border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition duration-300 w-fit">
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategoryGrid;