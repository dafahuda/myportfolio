import { Icon } from "@iconify/react";

const ContactSection = () => {
  return (
    <div className="kontak mt-32 py-25" id="kontak">
      <h1
        className="text-center text-3xl md:text-4xl font-bold mb-2 fade-in"
      >
        Kontak
      </h1>
      <p
        className="text-base/loose text-center mb-10 opacity-50 fade-in"
      >
        Mari Terhubung dengan saya.
      </p>

      <div className="grid lg:grid-cols-2 gap-10 mt-14 fade-in">
        {/* Informasi Kontak */}
        <div className="bg-zinc-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Icon icon="lucide:mail" className="ri-xl text-violet-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="opacity-75">dafahudarifai147@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Icon
                icon="lucide:map-pin"
                className="ri-xl text-violet-500 mt-1"
              />
              <div>
                <h3 className="font-semibold text-lg">Lokasi</h3>
                <p className="opacity-75">Indonesia</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Icon icon="lucide:link" className="ri-xl text-violet-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Media Sosial</h3>
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://www.github.com/dafahuda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-700 p-3 rounded-lg hover:bg-violet-600 transition-colors"
                  >
                    <Icon icon="lucide:github" className="ri-lg" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dafa-huda-rifa-i"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-700 p-3 rounded-lg hover:bg-violet-600 transition-colors"
                  >
                    <Icon icon="uil:linkedin" className="ri-lg" />
                  </a>
                  <a
                    href="https://www.instagram.com/dafa.h.r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-700 p-3 rounded-lg hover:bg-violet-600 transition-colors"
                  >
                    <Icon icon="lucide:instagram" className="ri-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Kontak */}
        <div className="bg-zinc-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
          <form
            action="https://formsubmit.co/dafahudarifai147@gmail.com"
            method="POST"
            autoComplete="off"
          >
            <div className="space-y-6">
              <div>
                <label className="font-semibold block mb-2">Nama Lengkap</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
                    <Icon icon="lucide:user" />
                  </div>
                  <input
                    type="text"
                    name="nama"
                    placeholder="Masukkan Nama"
                    required
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-2">E-mail</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
                    <Icon icon="lucide:mail" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Masukkan E-mail"
                    required
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-2">Pesan</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 text-zinc-400">
                    <Icon icon="lucide:edit" />
                  </div>
                  <textarea
                    name="pesan"
                    id="pesan"
                    rows="5"
                    placeholder="Tulis pesan Anda..."
                    required
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-violet-700 p-3 rounded-lg font-semibold hover:bg-violet-600 transition-colors"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
