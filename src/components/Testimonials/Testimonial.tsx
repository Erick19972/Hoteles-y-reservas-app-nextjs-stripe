// src/components/Testimonials/Testimonials.tsx

export default function Testimonials() {
  return (
    <section className="bg-[#f5f7f6] py-20 px-6">

      {/* TITULO */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Historias de Viajeros
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* CARD */}
        <div className="bg-[#dfeeee] rounded-[30px] p-8 relative shadow-sm">

          {/* ICONO */}
          <div className="absolute -top-5 left-6 bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-xl text-2xl shadow">
            “
          </div>

          <p className="text-gray-700 italic mt-6">
            "La atención al detalle fue increíble. Nos recibieron en el aeropuerto con flores y todo el transporte fue privado y puntual. ¡Repetiremos!"
          </p>

          {/* USER */}
          <div className="flex items-center gap-4 mt-8">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-gray-800">Ana García</h4>
              <div className="text-yellow-400">★★★★★</div>
            </div>
          </div>

        </div>

        {/* CARD */}
        <div className="bg-[#dfeeee] rounded-[30px] p-8 relative shadow-sm">

          <div className="absolute -top-5 left-6 bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-xl text-2xl shadow">
            “
          </div>

          <p className="text-gray-700 italic mt-6">
            "Gracias a ViajesParaíso descubrimos rincones de Perú que no salen en las guías. Fue una experiencia auténtica y segura."
          </p>

          <div className="flex items-center gap-4 mt-8">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-gray-800">Carlos Ruiz</h4>
              <div className="text-yellow-400">★★★★★</div>
            </div>
          </div>

        </div>

        {/* CARD */}
        <div className="bg-[#dfeeee] rounded-[30px] p-8 relative shadow-sm">

          <div className="absolute -top-5 left-6 bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-xl text-2xl shadow">
            “
          </div>

          <p className="text-gray-700 italic mt-6">
            "Excelente relación calidad-precio. Los hoteles seleccionados superaron nuestras expectativas, especialmente el resort en Punta Cana."
          </p>

          <div className="flex items-center gap-4 mt-8">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-gray-800">Laura Méndez</h4>
              <div className="text-yellow-400">★★★★★</div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}