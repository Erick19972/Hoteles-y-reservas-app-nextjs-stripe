export type Hotel = {
  id: string;
  pais: string;
  ciudad: string;
  titulo: string;
  nombre: string;
  descripcion: string;
  duracion: string;
  rating: number;
  precio: number;
  imagen: string;
  categoria: string;
  favorito: boolean;
};

export const hoteles: Hotel[] = [
  ...["México", "Japón", "Francia", "España", "Italia", "Estados Unidos", "Perú"].flatMap(
    (pais, paisIndex) => {

      const ciudades: Record<string, string[]> = {
        México: ["Cancún", "CDMX", "Los Cabos"],
        Japón: ["Tokio", "Kioto", "Osaka"],
        Francia: ["París", "Niza", "Lyon"],
        España: ["Madrid", "Barcelona", "Sevilla"],
        Italia: ["Roma", "Venecia", "Milán"],
        "Estados Unidos": ["Miami", "Nueva York", "Las Vegas"],
        Perú: ["Cusco", "Lima", "Arequipa"],
      };

      const imagenes: Record<string, string[]> = {
        México: [
          "https://images.unsplash.com/photo-1552074284-5e88ef1aef18",
          "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
        Japón: [
          "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
          "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
          "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
        ],
        Francia: [
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
          "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
          "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b",
        ],
        España: [
          "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
          "https://images.unsplash.com/photo-1583422409516-2895a77efded",
          "https://images.unsplash.com/photo-1543783207-ec64e4d95325",
        ],
        Italia: [
          "https://images.unsplash.com/photo-1529260830199-42c24126f198",
          "https://images.unsplash.com/photo-1514890547357-a9ee288728e0",
          "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
        ],
        "Estados Unidos": [
          "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee",
          "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
        Perú: [
          "https://images.unsplash.com/photo-1526392060635-9d6019884377",
          "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        ],
      };

      const nombresHotel = [
        "Grand Luxury Resort",
        "Hotel Boutique Premium",
        "Skyline Suites",
        "Royal Palace Hotel",
        "Ocean View Resort",
        "Urban Elite Hotel",
        "Golden Sunset Inn",
        "Paradise Stay",
        "Infinity Tower Suites",
        "Crystal Bay Hotel",
        "Majestic Horizon",
        "Blue Lagoon Resort",
        "Imperial Grand Hotel",
        "Dreamscape Suites",
        "Velvet Stay Hotel",
      ];

      const descripciones = [
        "La ciudad de la luz, gastronomía exquisita y museos infinitos.",
        "Experiencia premium con vistas espectaculares y servicio exclusivo.",
        "Ubicación privilegiada cerca de las principales atracciones.",
        "Ideal para una escapada romántica o vacaciones inolvidables.",
        "Lujo, confort y diseño moderno en cada detalle.",
        "Disfruta de una estancia única con servicios de primer nivel.",
        "Perfecto para viajeros que buscan elegancia y comodidad.",
        "Un destino que combina cultura, historia y sofisticación.",
      ];

      return Array.from({ length: 15 }, (_, i) => {
        const ciudad = ciudades[pais][i % 3];

        return {
          id: `${pais}-${i + 1}`,
          pais,
          ciudad,
          titulo: `${ciudad}, ${pais}`,
          nombre: `${nombresHotel[i % nombresHotel.length]} ${i + 1}`,
          descripcion: descripciones[i % descripciones.length],
          duracion: `${4 + (i % 4)} Días / ${3 + (i % 4)} Noches`,
          rating: 4 + (i % 2),
          precio: 28000 + (paisIndex * 4000) + (i * 1200),
          imagen: `${imagenes[pais][i % 3]}?q=80&w=1200&auto=format&fit=crop`,
          categoria:
            ["Francia", "España", "Italia"].includes(pais)
              ? "EUROPA"
              : pais.toUpperCase(),
          favorito: false,
        };
      });
    }
  ),
];