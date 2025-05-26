import WhatsAppButton from './WhatsAppButton';

const FeaturedItems = () => {
  const items = [
    {
      id: 1,
      name: 'Empanada Imperial',
      description: 'Carne premium con especias exclusivas',
      price: '$150',
      image: 'bg-[url("https://images.unsplash.com/photo-1603133872878-684f208fb84b")]'
    },
    {
      id: 2,
      name: 'Vianda Real',
      description: 'Milanesa premium con guarniciones selectas',
      price: '$400',
      image: 'bg-[url("https://images.unsplash.com/photo-1559847844-5315695dadae")]'
    },
    {
      id: 3,
      name: 'Empanada Ducal',
      description: 'Quesos gourmet y tomates confitados',
      price: '$160',
      image: 'bg-[url("https://images.unsplash.com/photo-1601050690597-df0568f70950")]'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Especialidades <span className="text-yellow-600">IMPERIO</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className={`h-48 ${item.image} bg-cover bg-center`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-yellow-600 font-bold text-lg">{item.price}</span>
                  <WhatsAppButton productName={item.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;