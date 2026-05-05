import Navbar from "@/src/components/Navbar/Navbar";
import Packages from "@/src/components/Packages/Package";
import Footer from "@/src/components/Footer/Footer";
import SearchBar from "@/src/components/SearchBar/SearchBar";

export default function Page() {
  return (
    <>
      {/* 🔥 NAVBAR */}
      <Navbar />

      {/* 🔥 HERO / ENCABEZADO */}
      <section className="relative w-full h-[450px] flex items-center justify-center">

        {/* 🌊 IMAGEN DE FONDO */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
          className="absolute w-full h-full object-cover"
        />

        {/* 🔥 OVERLAY */}
        <div className="absolute w-full h-full bg-black/30" />

        {/* 🔥 TEXTO */}
        <div className="relative text-center text-white px-4">
          <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
            EXPERIENCIAS PREMIUM
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Descubre lo <span className="text-yellow-400">Inexplorado</span>
          </h1>

          <p className="mt-4 text-gray-200 max-w-xl mx-auto">
            Encuentra los mejores paquetes exclusivos para tus próximas vacaciones.
          </p>
        </div>

        {/* 🔥 SEARCHBAR FLOTANTE */}
        <div className="absolute bottom-[-40px] w-full flex justify-center">
          <SearchBar />
        </div>

      </section>

      {/* 🔥 ESPACIADO PARA EL SEARCHBAR */}
      <div className="mt-0">
        <Packages />
      </div>

      {/* 🔥 FOOTER */}
      <Footer />
    </>
  );
}