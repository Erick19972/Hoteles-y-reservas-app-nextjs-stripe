// src/components/Contact/Contact.tsx
"use client";
export default function Contact() {
    return (
        <section className="py-20 px-6 md:px-10 bg-[#f5f7f6]">

            <div className="w-full flex flex-col md:flex-row rounded-[30px] overflow-hidden shadow-lg">

                {/* LADO IZQUIERDO */}
                <div className="md:w-1/2 relative text-white min-h-[500px] rounded-l-[30px] overflow-hidden">

                    <img
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop"
                        alt="Resort tropical"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/20"></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/70 to-transparent"></div>

                    <div className="relative z-10 p-10 flex flex-col justify-between h-full backdrop-blur-[1px]">

                        <div>
                            <h2 className="text-4xl font-bold mb-4">Hablemos</h2>
                            <p className="mb-10">
                                Tu próxima gran historia comienza con un mensaje.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm opacity-70">OFICINA</p>
                                    <p className="font-semibold">Calle Palmeras 45, Cancún</p>
                                </div>

                                <div>
                                    <p className="text-sm opacity-70">EMAIL</p>
                                    <p className="font-semibold">hola@hotelesyreservas.com</p>
                                </div>

                                <div>
                                    <p className="text-sm opacity-70">TELÉFONO</p>
                                    <p className="font-semibold">+52 800 351 0834</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-10 text-xl">
                            <span>📷</span>
                            <span>📘</span>
                            <span>🎵</span>
                        </div>

                    </div>
                </div>

                {/* FORMULARIO */}
                <div className="md:w-1/2 bg-white p-10">

                    <h2 className="text-3xl font-bold mb-8 text-gray-800">
                        Envíanos un mensaje
                    </h2>

                    <form
                        className="space-y-6"
                        onSubmit={(e) => {
                            e.preventDefault();

                            const form = e.target as HTMLFormElement;

                            const nombre = (form[0] as HTMLInputElement).value;
                            const apellido = (form[1] as HTMLInputElement).value;
                            const email = (form[2] as HTMLInputElement).value;
                            const mensaje = (form[3] as HTMLTextAreaElement).value;

                            const texto = encodeURIComponent(`
Hola, quiero información de viajes:

Nombre: ${nombre} ${apellido}
Email: ${email}
Mensaje: ${mensaje}
              `);

                            const telefono = "528003510834"; // 👈 cambia por tu número real

                            window.open(`https://wa.me/${telefono}?text=${texto}`, "_blank");
                        }}
                    >

                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                className="w-1/2 p-4 rounded-xl border outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            <input
                                type="text"
                                placeholder="Tu apellido"
                                className="w-1/2 p-4 rounded-xl border outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="ejemplo@correo.com"
                            className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-teal-500"
                        />

                        <textarea
                            rows={5}
                            placeholder="Cuéntanos a dónde quieres ir..."
                            className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-teal-500"
                        />

                        <button
                            type="submit"
                            className="w-full bg-[#1e2a3b] text-white py-4 rounded-xl font-semibold hover:bg-[#16202d] transition"
                        >
                            Enviar Solicitud ✈️
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}