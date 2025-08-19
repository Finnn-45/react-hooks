import { forwardRef, useRef, useImperativeHandle } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));

  return <input ref={inputRef} {...props} />;
});

export default function CustomInputExample() {
  const ref = useRef();

  return (
    <section>
      <CustomInput ref={ref} placeholder="Klik tombol untuk fokus" />
      <button onClick={() => ref.current.focus()}>Fokuskan Input</button>
    </section>
  );
}
