// src/app/page.tsx
import Navbar from "@/src/components/Navbar/Navbar";
import SearchBar from "@/src/components/SearchBar/SearchBar";
import Carousel from "@/src/components/Carousel/Carousel";
import Packages from "@/src/components/Packages/Package";
import Testimonials from "@/src/components/Testimonials/Testimonial";
import Contact from "@/src/components/Contact/Contact";
import Footer from "@/src/components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-[#eaf3f1]">

      <Navbar />

      {/* HERO */}
      <section className="relative h-[500px] w-full">

        {/* IMAGEN */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          className="absolute w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* TEXTO */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <span className="bg-white/20 px-4 py-1 rounded-full text-sm mb-4">
            EXPERIENCIAS PREMIUM
          </span>

          <h1 className="text-5xl font-bold">
            Descubre lo <span className="text-yellow-400">Inexplorado</span>
          </h1>

          <p className="mt-4 max-w-xl">
            Desde playas vírgenes hasta ciudades vibrantes. Diseñamos tus vacaciones perfectas.
          </p>
        </div>

        {/* SEARCHBAR */}
        <div className="absolute bottom-[-30px] w-full flex justify-center z-20">
          <SearchBar />
        </div>

      </section>

      {/* CONTENIDO */}
      <div className="mt-24 px-6">

        {/* TITULO */}
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Lugares que debes conocer hoy
        </h2>

        {/* CAROUSEL */}
        <Carousel />

      </div>


      <Packages />

      <Testimonials />

      <Contact />

      <Footer />

    </main>
  );
}