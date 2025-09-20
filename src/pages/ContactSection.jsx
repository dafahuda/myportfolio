const ContactSection = () => {
  return (
    <div
      className="kontak mt-32 sm:p-10 p-0"
      id="kontak"
      style={{ scrollMarginTop: "100px" }}
    >
      <h1
        className="text-center text-3xl md:text-4xl font-bold mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Kontak
      </h1>
      <p
        className="text-base/loose text-center mb-10 opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Mari Terhubung dengan saya.
      </p>

      <div
        className="grid lg:grid-cols-2 gap-10 mt-14"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
      >
        {/* Informasi Kontak */}
        <div className="bg-zinc-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <i className="ri-mail-line ri-xl text-violet-500 mt-1"></i>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="opacity-75">dafahudarifai147@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <i className="ri-map-pin-line ri-xl text-violet-500 mt-1"></i>
              <div>
                <h3 className="font-semibold text-lg">Lokasi</h3>
                <p className="opacity-75">Indonesia</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <i className="ri-links-line ri-xl text-violet-500 mt-1"></i>
              <div>
                <h3 className="font-semibold text-lg">Media Sosial</h3>
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://github.com/dafahuda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-700 p-3 rounded-lg hover:bg-violet-600 transition-colors"
                  >
                    <i className="ri-github-line ri-lg"></i>
                  </a>
                  <a
                    href="www.linkedin.com/in/dafa-huda-rifa-i"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-700 p-3 rounded-lg hover:bg-violet-600 transition-colors"
                  >
                    <i className="ri-linkedin-line ri-lg"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/dafa.h.r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-700 p-3 rounded-lg hover:bg-violet-600 transition-colors"
                  >
                    <i className="ri-instagram-line ri-lg"></i>
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
                    <i className="ri-user-line"></i>
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
                    <i className="ri-mail-line"></i>
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
                    <i className="ri-edit-line"></i>
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
