const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-yellow-600">IMPERIO</h3>
            <p className="text-gray-400">El reinado del auténtico sabor casero.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto Real</h3>
            <p className="text-gray-400">Av. del Rey 1428</p>
            <p className="text-gray-400">contacto@imperiocomidas.com</p>
            <p className="text-gray-400">+54 11 4321-5678</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horarios Imperiales</h3>
            <p className="text-gray-400">Lunes a Viernes: 10am - 9pm</p>
            <p className="text-gray-400">Sábados: 11am - 7pm</p>
            <p className="text-gray-400">Domingos: Cerrado</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2023 IMPERIO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// DONE