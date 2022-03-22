import { forwardRef } from "react";
import styles from "@/styles/pages/home/Introduction.module.css";

const Introduction = forwardRef<HTMLElement>((props, ref) => (
  <section className={styles.container} ref={ref}>
    <h1 className={styles.heading}>Tentang Saya</h1>
    <div className="flex one two-1200">
      <div>
        <p className={styles.text}>
          Perkenalkan, Nama saya Ezra Khairan Permana atau biasa dipanggil Ezra.
          Saat ini saya berumur 15 tahun. Saya tinggal dan tinggal di Bekasi,
          Jawa Barat. Masih duduk dibangku sekolah SMA, bersekolah di SMA Negeri
          12 Kota Bekasi kelas X Bahasa. Sekarang sedang mempelajari bahasa C++
          dan hal-hal yang berkaitan dengan arduino.
        </p>
      </div>
      <div>
        <p className={styles.text}>
          Memulai belajar bahasa pemrograman sejak masih kelas 5 SD, tepatnya
          tahun 2016. Belajar saya terhenti satu tahun saat kelas 6 SD,
          melanjutkan kembali pada saat kelas 1 SMP. Saya memilih untuk tidak
          melanjutkan pembelajaran saya di bahasa pemrograman PHP dan
          mengalihkan fokus saya untuk belajar JavaScript. Saat ini saya
          melakukan development web menggunakan JavaScript, Node.js, dan React.
        </p>
      </div>
    </div>
  </section>
));
Introduction.displayName = "Introduction";

export default Introduction;
