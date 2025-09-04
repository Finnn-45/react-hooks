import { forwardRef, useRef, useImperativeHandle } from "react";

// Bikin komponen input custom yang bisa dikasih ref dari luar
const CustomInput = forwardRef((props, ref) => {
  // Bikin ref lokal buat nyimpen elemen input
  const inputRef = useRef();

  // Kasih akses ke fungsi tertentu biar bisa dipanggil dari luar komponen
  useImperativeHandle(ref, () => ({
    // Jadi kalo dipanggil 'focus', langsung ngefokusin input
    focus: () => inputRef.current.focus(),
  }));

  // Balikin input biasa tapi nyimpen ref lokal
  return <input ref={inputRef} {...props} />;
});

// Komponen contoh buat make CustomInput
export default function CustomInputExample() {
  // Bikin ref buat dipasang ke CustomInput
  const ref = useRef();

  return (
    <section>
      {/* Input custom, bisa difokusin lewat tombol */}
      <CustomInput ref={ref} placeholder="Klik tombol untuk fokus" />

      {/* Tombol yang kalo diklik, bikin input langsung auto fokus */}
      <button onClick={() => ref.current.focus()}>Fokuskan Input</button>
    </section>
  );
}
