// src/components/Footer/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-[#1e2a3b] text-gray-300 px-6 md:px-12 py-16">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + DESCRIPCIÓN */}
        <div>
          <h2 className="text-white text-2xl font-bold flex items-center gap-2">
            🌴 HotelesYReservas
          </h2>

          <p className="mt-4 text-sm leading-relaxed">
            Diseñamos experiencias de viaje que se convierten en recuerdos para toda la vida.
            Tu única tarea es disfrutar, nosotros nos ocupamos del resto.
          </p>
        </div>

        {/* EXPLORE */}
        <div>
          <h3 className="text-white font-semibold mb-4">Explora</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Destinos</li>
            <li className="hover:text-white cursor-pointer">Paquetes</li>
            <li className="hover:text-white cursor-pointer">Hot Sale</li>
            <li className="hover:text-white cursor-pointer">Blog de Viajes</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Privacidad</li>
            <li className="hover:text-white cursor-pointer">Términos</li>
            <li className="hover:text-white cursor-pointer">Política de Cookies</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>

          <p className="text-sm mb-4">
            Recibe guías de viaje gratuitas y descuentos exclusivos.
          </p>

          <div className="flex bg-[#243447] rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Tu email"
              className="bg-transparent px-4 py-2 w-full outline-none text-sm"
            />

            <button className="bg-teal-500 px-5 text-white font-semibold hover:bg-teal-600 transition">
              OK
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-sm text-gray-400">

        <p>
          © 2024 HotelesYReservas. Hecho con <span className="text-red-500">❤</span> para viajeros.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Instagram</span>
          <span className="hover:text-white cursor-pointer">Twitter</span>
          <span className="hover:text-white cursor-pointer">Facebook</span>
        </div>

      </div>

    </footer>
  );
}