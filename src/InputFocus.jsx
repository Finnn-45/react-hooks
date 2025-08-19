import { useRef, useEffect } from "react";

export default function InputFocus() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section>
      <input ref={inputRef} placeholder="Auto focus di sini" />
    </section>
  );
}
