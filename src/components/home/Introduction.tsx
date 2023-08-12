export const Introduction = ({ time }: { time: string }) => {
    return (
        <section className="m-auto min-h-[160vh] px-6 pt-24 sm:px-14 sm:pt-28 md:px-16" id="introduction">
            <h1 className="font-bold dark:text-gray-50 font-poppins text-3xl sm:text-3xl md:text-4xl mb-8">Tentang Saya</h1>
            <div className="font-light font-lato flex flex-wrap gap-10 text-xl md:flex-nowrap md:gap-18 lg:gap-12 lg:text-2xl leading-loose">
                <p>
                    Perkenalkan, Nama saya Ezra Khairan Permana atau biasa dipanggil Ezra.
                    Saat ini saya berumur {time} tahun. Saya tinggal dan tinggal di
                    Bekasi, Jawa Barat. Masih duduk dibangku sekolah SMA, bersekolah di
                    SMA Negeri 12 Kota Bekasi kelas XII Bahasa. Sekarang sedang mempelajari
                    bahasa C++ dan hal-hal yang berkaitan dengan arduino.
                </p>
                <p>
                    Memulai belajar bahasa pemrograman sejak masih kelas 5 SD, tepatnya
                    tahun 2016. Belajar saya terhenti satu tahun saat kelas 6 SD,
                    melanjutkan kembali pada saat kelas 1 SMP. Saya memilih untuk tidak
                    melanjutkan pembelajaran saya di bahasa pemrograman PHP dan
                    mengalihkan fokus saya untuk belajar JavaScript. Saat ini saya
                    melakukan development web menggunakan JavaScript, Node.js, dan React.
                </p>
            </div>
        </section>
    )
}